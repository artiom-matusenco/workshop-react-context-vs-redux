import { Link } from 'react-router-dom';
import { formatDateTime } from '../utils/dateFormatter';

export default function EventListItem({ event }) {
  const eventPath = `/events/${event.id}`;
  return (
    <div className="mt-5">
      <Link className="text-lg no-underline hover:underline" to={eventPath}>
        {event.title}
      </Link>
      <div className="text-sm text-gray-400">
        {formatDateTime(event.datetime_local)}
      </div>
    </div>
  );
}
