import { ISeminar } from "../Main/Main";
import cl from "./SCard.module.css";
import Button from "../../UI/button/Button";
import calendarIcon from "../../../assets/calendar_month_24dp_666666_FILL0_wght400_GRAD0_opsz24.svg";
import timeIcon from "../../../assets/schedule_24dp_666666_FILL0_wght400_GRAD0_opsz24.svg";

interface IPropSCard {
    seminar: ISeminar;
}

function SCard({ seminar }: IPropSCard) {
    return (
        <section className={cl.card}>
            <img
                src={seminar.photo}
                alt={seminar.title}
                className={cl.card_preview}
            />
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
                        <Button>Удалить</Button>
                        <Button>Редактировать</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SCard;
