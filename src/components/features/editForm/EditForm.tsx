import InputForm from "../../UI/input/InputForm";
import Button from "../../UI/button/Button";
import cl from "./EditForm.module.css";
import { useModal } from "../../../provider/ModalProvider";
import { ISeminar, useSeminar } from "../../../provider/SeminarProvider";
import { useEffect, useState } from "react";
import { handleCancelAction } from "../../../utils/modalUtils";
import { saveSeminar } from "../../../service/seminarService";

function EditForm() {
    const [newObject, setNewObject] = useState<ISeminar>({
        id: "",
        title: "",
        description: "",
        date: "",
        time: "",
        photo: "",
    });

    const { setVisibleModal, setModalContent } = useModal();
    const { setSeminars, selectedSeminar, setSelectedSeminar } = useSeminar();

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;

        setNewObject((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const formatDate = (date: string) => {
        const [day, month, year] = date.split(".");
        return `${year}-${month}-${day}`;
    };

    useEffect(() => {
        if (selectedSeminar) {
            setNewObject({
                id: selectedSeminar.id,
                title: selectedSeminar.title,
                description: selectedSeminar.description,
                date: selectedSeminar.date
                    ? formatDate(selectedSeminar.date)
                    : "",
                time: selectedSeminar.time,
                photo: selectedSeminar.photo,
            });
        }
    }, [selectedSeminar]);

    const handleSave = (event: React.FormEvent) => {
        event.preventDefault();
        saveSeminar(
            newObject,
            setSeminars,
            setVisibleModal,
            setModalContent,
            setSelectedSeminar
        );
    };

    return (
        <form className={cl.form} onSubmit={handleSave}>
            <div className={cl.inputs}>
                <InputForm
                    required
                    label="Заголовок:"
                    id="title"
                    type="text"
                    placeholder="Заголовок"
                    value={newObject.title}
                    onChange={handleChange}
                />

                <div className={cl.cont_description}>
                    <label htmlFor="description">Описание:</label>
                    <textarea
                        id="description"
                        className={cl.txtArea}
                        placeholder="Описание"
                        required
                        value={newObject.description}
                        onChange={handleChange}
                    />
                </div>
                <div className={cl.schedule}>
                    <InputForm
                        required
                        label="Дата:"
                        id="date"
                        type="date"
                        placeholder="Дата"
                        value={newObject.date}
                        onChange={handleChange}
                    />

                    <InputForm
                        required
                        label="Время:"
                        id="time"
                        type="time"
                        value={newObject.time}
                        onChange={handleChange}
                    />
                </div>

                <InputForm
                    required
                    label="Фото:"
                    id="photo"
                    type="text"
                    placeholder="Укажите URL фото"
                    value={newObject.photo}
                    onChange={handleChange}
                />
            </div>
            <div className={cl.btns_bar}>
                <Button type="submit">Сохранить</Button>
                <Button
                    onClick={handleCancelAction(
                        setVisibleModal,
                        setModalContent,
                        setSelectedSeminar
                    )}
                >
                    Отмена
                </Button>
            </div>
        </form>
    );
}

export default EditForm;
