import cl from "./Button.module.css";

interface ButtonProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: any;
    children: React.ReactNode;
}

function Button({ onClick, type, children }: ButtonProps) {
    return (
        <button onClick={onClick} type={type} className={cl.btn}>
            {children}
        </button>
    );
}

export default Button;
