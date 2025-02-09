import { ISeminar } from "../provider/SeminarProvider";
import { showErrorToast, showSuccessToast } from "../utils/toastUtils";

const formatDateToDDMMYYYY = (date: string): string => {
    const [year, month, day] = date.split("-");
    return `${day}.${month}.${year}`;
};

export const deleteSeminar = async (
    id: string,
    setSeminars: React.Dispatch<React.SetStateAction<ISeminar[]>>,
    setVisibleModal: (value: boolean) => void,
    setModalContent: (value: "edit" | "delete" | null) => void
) => {
    try {
        const response = await fetch(`http://localhost:5000/seminars/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error("Ошибка при удалении семинара");
        }

        setSeminars((prev) => prev.filter((seminar) => seminar.id !== id));
        showSuccessToast("Семинар успешно удален!");
    } catch (error) {
        showErrorToast(
            "Произошла ошибка при удалении семинара. Попробуйте позже."
        );
        console.error("Ошибка:", error);
    } finally {
        setVisibleModal(false);
        setModalContent(null);
    }
};

export const saveSeminar = async (
    newObject: ISeminar,
    setSeminars: React.Dispatch<React.SetStateAction<ISeminar[]>>,
    setVisibleModal: (value: boolean) => void,
    setModalContent: (value: "edit" | "delete" | null) => void,
    setSelectedSeminar: (value: ISeminar | null) => void
) => {
    try {
        const formattedSeminar = {
            ...newObject,
            date: formatDateToDDMMYYYY(newObject.date),
        };
        const response = await fetch(
            `http://localhost:5000/seminars/${newObject.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formattedSeminar),
            }
        );

        if (!response.ok) {
            throw new Error("Ошибка при сохранении данных");
        }

        setSeminars((prev) =>
            prev.map((seminar) =>
                seminar.id === formattedSeminar.id
                    ? { ...seminar, ...formattedSeminar }
                    : seminar
            )
        );

        showSuccessToast("Семинар успешно обновлен!");

        setVisibleModal(false);
        setModalContent(null);
        setSelectedSeminar(null);
    } catch (error) {
        showErrorToast("Ошибка при сохранении семинара. Попробуйте позже.");
        console.error("Ошибка при сохранении семинара:", error);
    }
};
