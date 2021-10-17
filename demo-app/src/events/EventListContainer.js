import { useEffect, useState } from 'react';

import { apiClient } from '../apiClient';
import Loading from '../app/Loading';
import EventList from './EventList';

export default function EventListContainer() {
  const [eventsData, setEventsData] = useState({
    meta: { total: '-' },
    events: [],
    loading: true,
  });

  useEffect(() => {
    apiClient.get('/events').then(({ data }) => setEventsData(data));
  }, []);

  return eventsData.loading ? (
    <Loading />
  ) : (
    <EventList eventsData={eventsData} />
  );
}
