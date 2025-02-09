import { ISeminar } from "../provider/SeminarProvider";

export const handleCancelAction = (
    setVisibleModal: (value: boolean) => void,
    setModalContent: (value: "edit" | "delete" | null) => void,
    setSelectedSeminar: (value: ISeminar | null) => void
) => {
    return () => {
        setVisibleModal(false);
        setModalContent(null);
        setSelectedSeminar(null);
    };
};
