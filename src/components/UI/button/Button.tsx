import cl from "./Button.module.css";

function Button({ children }: any) {
    return <button className={cl.btn}>{children}</button>;
}

export default Button;
