import cl from "./SCard.module.css";
import Button from "../../UI/button/Button";
import calendarIcon from "../../../assets/calendar_month_24dp_666666_FILL0_wght400_GRAD0_opsz24.svg";
import timeIcon from "../../../assets/schedule_24dp_666666_FILL0_wght400_GRAD0_opsz24.svg";
import { useModal } from "../../../provider/ModalProvider";
import { ISeminar, useSeminar } from "../../../provider/SeminarProvider";

interface IPropSCard {
    seminar: ISeminar;
}

function SCard({ seminar }: IPropSCard) {
    const { setVisibleModal, setModalContent } = useModal();
    const { setSelectedSeminar } = useSeminar();

    function handleDelete(sem: ISeminar) {
        setVisibleModal(true);
        setModalContent("delete");
        setSelectedSeminar(sem);
    }
    function handleEdit(sem: ISeminar) {
        setVisibleModal(true);
        setModalContent("edit");
        setSelectedSeminar(sem);
    }

    return (
        <section className={cl.card}>
            <div className={cl.img_lazy}>
                <img
                    src={seminar.photo}
                    alt={seminar.title}
                    className={cl.card_preview}
                    loading="lazy"
                />
            </div>
            <div className={cl.info}>
                <div className={cl.shedule}>
                    <div className={cl.date}>
                        <img src={calendarIcon} alt="calendar" />
                        <p>{seminar.date}</p>
                    </div>
                    <div className={cl.time}>
                        <img src={timeIcon} alt="time" />
                        <p>{seminar.time}</p>
                    </div>
                </div>
                <h2 className={cl.title}>{seminar.title}</h2>
                <p className={cl.description}>{seminar.description}</p>
                <div className={cl.btn_bar}>
                    <div className={cl.btns}>
                        <Button onClick={() => handleDelete(seminar)}>
                            Удалить
                        </Button>
                        <Button onClick={() => handleEdit(seminar)}>
                            Редактировать
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SCard;
