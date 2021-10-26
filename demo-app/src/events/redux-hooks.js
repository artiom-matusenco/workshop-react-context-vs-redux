import { useEffect } from 'react';
import { fetchEvent, fetchEvents } from './api-requests';
import { useSelector, useDispatch } from 'react-redux';
import { setEvent, setEvents, setFetchingEvents } from '../redux/appSlice';

export function useGetEvents() {
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();

  useEffect(() => {
    if (events.events.length <= 1) {
      dispatch(setFetchingEvents());
      fetchEvents().then(({ data }) => dispatch(setEvents(data)));
    }
  }, []);

  return events;
}

export function useGetEvent(id) {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.events.loading);
  const event = useSelector((state) => {
    return state.events.events.find((i) => i.id === id);
  });

  useEffect(() => {
    if (!event) {
      dispatch(setFetchingEvents());
      fetchEvent(id).then(({ data }) => dispatch(setEvent(data)));
    }
  }, []);

  return { event, loading };
}
