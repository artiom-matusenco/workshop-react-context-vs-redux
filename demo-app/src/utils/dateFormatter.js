export function formatDateTime(dateTime) {
  return new Intl.DateTimeFormat('en', {
    dateStyle: 'full',
    timeStyle: 'medium',
  }).format(new Date(dateTime));
}
