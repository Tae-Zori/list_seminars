import { useEffect, useState } from "react";
import { animationTime } from "../../components/UI/modal/LayoutModal";

export const useAnimationMount = (visible: boolean) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (visible && !mounted) {
            setMounted(true);
        } else if (!visible && mounted) {
            setTimeout(() => {
                setMounted(false);
            }, animationTime);
        }
    }, [visible]);

    return {
        mounted,
    };
};
