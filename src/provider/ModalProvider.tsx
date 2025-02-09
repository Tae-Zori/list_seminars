import { createContext, ReactNode, useContext, useState } from "react";

interface ModalContextProps {
    visibleModal: boolean;
    setVisibleModal: (visible: boolean) => void;
    modalContent: "delete" | "edit" | null;
    setModalContent: (content: "delete" | "edit" | null) => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [visibleModal, setVisibleModal] = useState(false);
    const [modalContent, setModalContent] = useState<"delete" | "edit" | null>(
        null
    );

    return (
        <ModalContext.Provider
            value={{
                visibleModal,
                setVisibleModal,
                modalContent,
                setModalContent,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal должен использоваться внутри ModalProvider");
    }
    return context;
};
