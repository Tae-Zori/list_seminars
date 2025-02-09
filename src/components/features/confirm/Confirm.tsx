import { toast } from "react-toastify";
import { useModal } from "../../../provider/ModalProvider";
import { useSeminar } from "../../../provider/SeminarProvider";
import Button from "../../UI/button/Button";
import cl from "./Confirm.module.css";
import { handleCancelAction } from "../../../utils/modalUtils";
import { deleteSeminar } from "../../../service/seminarService";

function Confirm() {
    const { setVisibleModal, setModalContent } = useModal();
    const { setSeminars, selectedSeminar, setSelectedSeminar } = useSeminar();
    const semId = selectedSeminar?.id;

    const handleDelete = () => {
        if (semId) {
            deleteSeminar(
                semId.toString(),
                setSeminars,
                setVisibleModal,
                setModalContent
            );
        } else {
            toast.error("Семинар не выбран для удаления.");
        }
    };

    return (
        <div className={cl.confirm}>
            <h2>Вы действительно хотите удалить семинар?</h2>
            <div className={cl.btns_bar}>
                <Button onClick={() => handleDelete()}>Да</Button>
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
        </div>
    );
}

export default Confirm;
