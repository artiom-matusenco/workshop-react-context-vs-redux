import Header from '../app/Header';
import EventListItem from './EventListItem';

export default function EventList({ eventsData }) {
  return (
    <div>
      <Header title="Events" />
      <div className="pl-10">
        <ul>
          {eventsData.events.map((event) => (
            <li key={event.id}>
              <EventListItem event={event} />
            </li>
          ))}
        </ul>
        <h3 className="text-lg mt-10 text-gray-500">
          <span className="font-bold">Total:</span> {eventsData.meta.total}
        </h3>
      </div>
    </div>
  );
}
