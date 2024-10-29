// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import Notification from './components/Notification';
import './styles.css';
import Footer from './components/Footer'; // Import the Footer component



const App = () => {
    const [events, setEvents] = useState([]);
    const [notification, setNotification] = useState('');

    const addEvent = (event) => {
        const newEvent = {
            ...event,
            id: Date.now(),
            notifyTime: new Date(`${event.date}T${event.time}`)
        };
        setEvents([...events, newEvent]);
    };

    useEffect(() => {
        const checkNotifications = () => {
            const now = new Date();
            events.forEach((event) => {
                if (event.notifyTime <= now) {
                    setNotification(`Reminder: ${event.name} is starting now!`);
                    setEvents((prevEvents) => prevEvents.filter(e => e.id !== event.id));
                }
            });
        };

        const interval = setInterval(checkNotifications, 60000); // Check every minute
        return () => clearInterval(interval);
    }, [events]);

    return (
        <div className="app">
            <Header />
            <EventForm addEvent={addEvent} />
            <EventList events={events} />
            <Notification message={notification} />
            
            <Footer />       
        </div>
    );
};

export default App;

