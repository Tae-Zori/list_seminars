import { useAnimationMount } from "../../../hooks/forAnimation/Mount.ts";
import { useModal } from "../../../provider/ModalProvider.tsx";
import Portal from "../portal/Portal.tsx";
import LayoutModal from "./LayoutModal";
interface IPropsModal {
    children: React.ReactNode;
}

export const Modal = ({ children }: IPropsModal) => {
    const { visibleModal, setVisibleModal } = useModal();
    const { mounted } = useAnimationMount(visibleModal);

    if (!mounted) {
        return null;
    }

    return (
        <Portal>
            <LayoutModal
                onClose={() => setVisibleModal(false)}
                opened={visibleModal}
            >
                {children}
            </LayoutModal>
        </Portal>
    );
};
