// src/components/EventForm.jsx
import React, { useState } from 'react';

const EventForm = ({ addEvent }) => {
    const [event, setEvent] = useState({ name: '', date: '', time: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent({ ...event, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (event.name && event.date && event.time) {
            addEvent(event);
            setEvent({ name: '', date: '', time: '' });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="event-form">
            <input
                type="text"
                name="name"
                value={event.name}
                onChange={handleChange}
                placeholder="Event Name"
                required
            />
            <input
                type="date"
                name="date"
                value={event.date}
                onChange={handleChange}
                required
            />
            <input
                type="time"
                name="time"
                value={event.time}
                onChange={handleChange}
                required
            />
            <button type="submit">Add Event</button>
        </form>
    );
};

export default EventForm;
