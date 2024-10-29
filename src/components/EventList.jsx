// src/components/EventList.jsx
import React from 'react';
import calendarIcon from '../assets/calendar-icon.svg'; // Ensure you have an icon

const EventList = ({ events }) => {
    return (
        <ul className="event-list">
            {events.map((event, index) => (
                <li key={index} className="event-item">
                    <img src={calendarIcon} alt="Event" style={{ width: '20px', marginRight: '10px' }} />
                    <strong>{event.name}</strong> on {event.date} at {event.time}
                </li>
            ))}
        </ul>
    );
};

export default EventList;
