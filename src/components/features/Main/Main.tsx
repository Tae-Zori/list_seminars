import SList from "../SeminarsList/SList";
import cl from "./Main.module.css";
import { Modal } from "../../UI/modal/Modal";
import Confirm from "../confirm/Confirm";
import EditForm from "../editForm/EditForm";
import { useModal } from "../../../provider/ModalProvider";
import { ToastContainer } from "react-toastify";

function Main() {
    const { modalContent } = useModal();

    return (
        <main className={cl.main}>
            <SList />
            <Modal>
                {modalContent == "edit" && <EditForm />}
                {modalContent == "delete" && <Confirm />}
            </Modal>
            <ToastContainer
                position="top-right" // Позиция тостов
                autoClose={5000} // Время авто-скрытия
                hideProgressBar={false} // Показывать прогресс-бар
                newestOnTop={true} // Новые тосты отображаются сверху
            />
        </main>
    );
}

export default Main;
