    import { useEffect, useRef } from "react";
    import { Link } from "react-router-dom";

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
            <Link to={`/`}>
                <span className="contact-drawer__value">Home</span>
            </Link>
            <Link to={`/about`}>
                <span className="contact-drawer__value">About</span>
            </Link>
            <Link to={`/contact`}>
                <span className="contact-drawer__value">Contact</span>
            </Link>
        </div>
        </div>
    );
    }