import Loading from '../app/Loading';
import EventDetails from './EventDetails';
import { useFetchEvent } from './EventList.hooks';

export default function EventDetailsContainer() {
  const event = useFetchEvent();

  return !event?.loading ? <EventDetails event={event} /> : <Loading />;
}
