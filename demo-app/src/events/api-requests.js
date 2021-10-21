import { apiClient } from '../apiClient';

export function fetchEvent(id) {
  return apiClient.get(`/events/${id}`);
}

export function fetchEvents() {
  return apiClient.get('/events');
}
