import { useState } from "react";
import ReactDOM from "react-dom";

interface IPropsPortal {
    children: React.ReactNode;
}

const Portal = ({ children }: IPropsPortal) => {
    const [container] = useState(() => {
        let existingContainer = document.getElementById("modal-root");
        if (!existingContainer) {
            existingContainer = document.createElement("div");
            existingContainer.id = "modal-root";
            document.body.appendChild(existingContainer);
        }
        return existingContainer;
    });

    return ReactDOM.createPortal(children, container);
};

export default Portal;
