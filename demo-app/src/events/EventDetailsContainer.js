import { useParams } from 'react-router';
import Loading from '../app/Loading';
import { useFetchEvent } from './hooks';
import EventDetails from './EventDetails';

export default function EventDetailsContainer() {
  const { id } = useParams();
  const eventData = useFetchEvent(Number(id));

  return !eventData?.loading ? (
    <EventDetails event={eventData.event} />
  ) : (
    <Loading />
  );
}
