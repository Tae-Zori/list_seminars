import cl from "./SList.module.css";
import SCard from "../SeminarCard/SCard";
import Skeleton from "../../UI/skeleton/Skeleton";
import { useSeminar } from "../../../provider/SeminarProvider";

function SList() {
    const { seminars, loading, error } = useSeminar();

    return (
        <aside className={cl.list}>
            {error && <h2 className={cl.message}>{error}</h2>}

            {loading &&
                Array.from({ length: 4 }).map((_, index) => (
                    <Skeleton key={index} />
                ))}

            {!loading && !error && seminars.length === 0 && (
                <h2 className={cl.message}>Нет семинаров</h2>
            )}

            {!loading &&
                !error &&
                Array.isArray(seminars) &&
                seminars.map((seminar) => (
                    <SCard seminar={seminar} key={seminar.id} />
                ))}
        </aside>
    );
}

export default SList;
