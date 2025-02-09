import cl from "./LayoutModal.module.css";
import { CSSTransition } from "react-transition-group";
import { useCallback, useEffect, useRef } from "react";

interface IPropsLayoutModal {
    children: React.ReactNode;
    opened: boolean;
    onClose: () => void;
}

export const animationTime = 300;

const animations = {
    overlay: {
        enter: cl["modal__overlay--enter"],
        enterActive: cl["modal__overlay--enter-active"],
        exit: cl["modal__overlay--exit"],
        exitActive: cl["modal__overlay--exit-active"],
    },
    content: {
        enter: cl["modal__content--enter"],
        enterActive: cl["modal__content--enter-active"],
        exit: cl["modal__content--exit"],
        exitActive: cl["modal__content--exit-active"],
    },
};

const LayoutModal = ({ children, opened, onClose }: IPropsLayoutModal) => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        },
        [onClose]
    );

    useEffect(() => {
        if (opened) {
            document.addEventListener("keydown", handleKeyDown);
        } else {
            document.removeEventListener("keydown", handleKeyDown);
        }
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [opened, handleKeyDown]);

    return (
        <div className={cl.modal}>
            <CSSTransition
                in={opened}
                timeout={animationTime}
                classNames={animations.overlay}
                nodeRef={overlayRef}
                mountOnEnter
                unmountOnExit
            >
                <div
                    className={cl.modal__overlay}
                    onClick={onClose}
                    ref={overlayRef}
                />
            </CSSTransition>

            <CSSTransition
                in={opened}
                timeout={animationTime}
                classNames={animations.content}
                nodeRef={contentRef}
                mountOnEnter
                unmountOnExit
            >
                <div
                    className={cl.modal__content}
                    onClick={(e) => e.stopPropagation()}
                    ref={contentRef}
                >
                    {children}
                </div>
            </CSSTransition>
        </div>
    );
};

export default LayoutModal;
