import { useEffect, useState } from 'react';
import { fetchEvent, fetchEvents } from './api-requests';

export function useFetchEvents() {
  const [events, setEvents] = useState({ loading: true });

  useEffect(() => {
    fetchEvents().then(({ data }) => setEvents({ ...data, loading: false }));
  }, []);

  return events;
}

export function useFetchEvent(id) {
  const [event, setEvent] = useState({ loading: true });

  useEffect(() => {
    fetchEvent(id).then(({ data }) => setEvent({ ...data, loading: false }));
  }, [id]);

  return event;
}
