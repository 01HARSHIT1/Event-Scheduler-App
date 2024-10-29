// src/components/Notification.jsx
import React, { useEffect } from 'react';

const Notification = ({ message }) => {
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                alert(message);
            }, 1000); // Demo delay
            return () => clearTimeout(timer);
        }
    }, [message]);

    return null;
};

export default Notification;
