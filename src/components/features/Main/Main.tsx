import { useEffect, useState } from "react";
import SList from "../SeminarsList/SList";
import cl from "./Main.module.css";

export interface ISeminar {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    photo: string;
}

function Main() {
    const [seminars, setSeminars] = useState<ISeminar[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
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
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchSeminars();
    }, []);

    return (
        <main className={cl.main}>
            {seminars.length > 0 && <SList seminars={seminars} />}
        </main>
    );
}

export default Main;
