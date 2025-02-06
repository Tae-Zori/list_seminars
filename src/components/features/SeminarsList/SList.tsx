import { ISeminar } from "../Main/Main";
import cl from "./SList.module.css";
import SCard from "../SeminarCard/SCard";

interface IPropsList {
    seminars: ISeminar[];
}

function SList({ seminars }: IPropsList) {
    return (
        <aside className={cl.list}>
            {seminars.map((seminar) => {
                return <SCard seminar={seminar} key={seminar.id} />;
            })}
        </aside>
    );
}

export default SList;
