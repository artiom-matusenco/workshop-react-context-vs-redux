import Header from '../app/Header';
import { formatDateTime } from '../utils/dateFormatter';

export default function EventDetails({ event }) {
  return (
    <div>
      <Header title={event.title} />
      <div className="pl-10">
        <h3>Event ID: {event.id}</h3>
        <ul>
          <li>Date: {formatDateTime(event.datetime_local)}</li>
          <li>Type: {event.type}</li>
          <li>Venue: {event.venue.name}</li>
        </ul>
      </div>
    </div>
  );
}
