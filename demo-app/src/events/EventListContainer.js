import Loading from '../app/Loading';
import EventList from './EventList';
import { useFetchEvents } from './hooks';

export default function EventListContainer() {
  const events = useFetchEvents();

  return !events?.loading ? <EventList eventsData={events} /> : <Loading />;
}
