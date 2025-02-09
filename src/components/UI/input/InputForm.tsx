import cl from "./InputForm.module.css";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
}
function InputForm({ label, id, value, onChange, ...props }: InputProps) {
    return (
        <>
            <div className={cl.group}>
                {label && <label htmlFor={id}>{label}</label>}
                <input
                    id={id}
                    className={cl.input}
                    value={value}
                    onChange={onChange}
                    {...props}
                />
            </div>
        </>
    );
}

export default InputForm;
