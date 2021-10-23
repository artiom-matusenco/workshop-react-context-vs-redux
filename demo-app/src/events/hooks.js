import { useEffect, useState } from 'react';
import { fetchEvent, fetchEvents } from './api-requests';

export function useFetchEvents() {
  const [eventsData, setEventsData] = useState({ loading: true });

  useEffect(() => {
    fetchEvents().then(({ data }) =>
      setEventsData({ ...data, loading: false })
    );
  }, []);

  return eventsData;
}

export function useFetchEvent(id) {
  const [eventData, setEventData] = useState({ loading: true });

  useEffect(() => {
    fetchEvent(id).then(({ data }) =>
      setEventData({ event: data, loading: false })
    );
  }, [id]);

  return eventData;
}
