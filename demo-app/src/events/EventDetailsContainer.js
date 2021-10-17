import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { apiClient } from '../apiClient';
import Loading from '../app/Loading';
import EventDetails from './EventDetails';

export default function EventDetailsContainer() {
  const [event, setEvent] = useState();
  const { id } = useParams();

  useEffect(() => {
    apiClient.get(`/events/${id}`).then(({ data }) => setEvent(data));
  }, [id]);

  return event ? <EventDetails event={event} /> : <Loading />;
}
