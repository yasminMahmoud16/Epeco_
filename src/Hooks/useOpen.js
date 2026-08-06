import { useEffect } from "react";

export default function useOpen(ref, isOpen, onClose) {
    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, isOpen, onClose]);
}