// pages/EventDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetails = () => {
  const { id } = useParams();

  // Mock event data, ideally fetched from an API
  const event = {
    id,
    title: 'Sample Event',
    description: 'This is a sample event description.',
    date: '2024-11-20',
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{event.title}</h1>
      <p>Date: {event.date}</p>
      <p>{event.description}</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Book Now</button>
    </div>
  );
};

export default EventDetails;
