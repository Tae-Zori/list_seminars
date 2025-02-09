import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

export interface ISeminar {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    photo: string;
}

interface SeminarContextProps {
    seminars: ISeminar[] | ((prev: ISeminar[]) => ISeminar[]);
    loading: boolean;
    error: string | null;
    selectedSeminar: ISeminar | null;
    setSeminars: (
        seminars: ISeminar[] | ((prev: ISeminar[]) => ISeminar[])
    ) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    setSelectedSeminar: (selectedSeminar: ISeminar | null) => void;
}

const SeminarContext = createContext<SeminarContextProps | undefined>(
    undefined
);

export function SeminarProvider({ children }: { children: ReactNode }) {
    const [seminars, setSeminars] = useState<
        ISeminar[] | ((prev: ISeminar[]) => ISeminar[])
    >([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedSeminar, setSelectedSeminar] = useState<ISeminar | null>(
        null
    );

    const fetchSeminars = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch("http://localhost:5000/seminars");
            if (!response.ok) {
                throw new Error("Ошибка при получении данных");
            }
            const data = await response.json();
            setSeminars(data);
        } catch (error) {
            setError("Ошибка при получении данных");
            console.error("Ошибка:", error);
        } finally {
            const timeoutId = setTimeout(() => {
                setLoading(false);
            }, 500);

            return () => clearTimeout(timeoutId);
        }
    };
    useEffect(() => {
        fetchSeminars();
    }, []);
    return (
        <SeminarContext.Provider
            value={{
                seminars,
                setSeminars,
                loading,
                setLoading,
                error,
                setError,
                selectedSeminar,
                setSelectedSeminar,
            }}
        >
            {children}
        </SeminarContext.Provider>
    );
}
export const useSeminar = () => {
    const context = useContext(SeminarContext);
    if (!context) {
        throw new Error("useModal должен использоваться внутри ModalProvider");
    }
    return context;
};
