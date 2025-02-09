import React, { ReactNode } from "react";
import { ModalProvider } from "./ModalProvider";
import { SeminarProvider } from "./SeminarProvider";
interface GlobalProviderProps {
    children: ReactNode;
}
const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
    return (
        <ModalProvider>
            <SeminarProvider>{children}</SeminarProvider>
        </ModalProvider>
    );
};

export default GlobalProvider;
