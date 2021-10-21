import Loading from '../app/Loading';
import EventList from './EventList';
import { useGetEvents } from './context-hooks';

export default function EventListContainer() {
  const events = useGetEvents();

  return !events?.loading ? <EventList eventsData={events} /> : <Loading />;
}
