import cl from "./Skeleton.module.css";

function Skeleton() {
    return (
        <div className={cl.skeleton}>
            <div className={cl.wrapper}>
                <div className={cl.preview}></div>
                <div className={cl.info}>
                    <div className={cl.line_1}></div>
                    <div className={cl.line_2}></div>
                    <div className={cl.line_3}></div>
                    <div className={cl.line_4}></div>
                </div>
            </div>
        </div>
    );
}

export default Skeleton;
