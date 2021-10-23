import { useParams } from 'react-router';
import Loading from '../app/Loading';
import { useGetEvent } from './redux-hooks';
import EventDetails from './EventDetails';

export default function EventDetailsContainer() {
  const { id } = useParams();
  const eventData = useGetEvent(Number(id));

  return !eventData?.loading ? (
    <EventDetails event={eventData.event} />
  ) : (
    <Loading />
  );
}
