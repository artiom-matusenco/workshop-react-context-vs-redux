export function getEvent(events, id) {
  return events.events.find((e) => e.id.toString() === id);
}
