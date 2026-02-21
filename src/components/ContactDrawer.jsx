    import { useEffect, useRef } from "react";

    export default function ContactDrawer({ isOpen, onClose }) {
    const drawerRef = useRef(null);

    // Close on outside click
    useEffect(() => {
        const handleClick = (e) => {
        if (drawerRef.current && !drawerRef.current.contains(e.target)) {
            onClose();
        }
        };
        if (isOpen) document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [isOpen, onClose]);

    return (
        <div
        ref={drawerRef}
        className={`contact-drawer ${isOpen ? "contact-drawer--open" : ""}`}
        >
        <button className="contact-drawer__close" onClick={onClose}>✕</button>
        <div className="contact-drawer__content">
            <a href="tel:+4917687008490">
            <span className="contact-drawer__label">Phone</span>
            <span className="contact-drawer__value">+49 176 87008490</span>
            </a>
            <a href="mailto:karen.natharen@gmail.com">
            <span className="contact-drawer__label">Email</span>
            <span className="contact-drawer__value">karen.natharen@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/karen-natharen/" target="_blank" rel="noreferrer">
            <span className="contact-drawer__label">LinkedIn</span>
            <span className="contact-drawer__value">/in/karen-natharen</span>
            </a>
        </div>
        </div>
    );
    }