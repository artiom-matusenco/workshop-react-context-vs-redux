import { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { apiClient } from '../apiClient';
import { appActions } from '../context/appActions';
import { AppContext } from '../context/AppContext';

export function useFetchEvents() {
  const { appState, dispatch } = useContext(AppContext);
  const { events } = appState;

  useEffect(() => {
    dispatch({ type: appActions.FETCHING_EVENTS_START });
    apiClient
      .get('/events')
      .then(({ data }) =>
        dispatch({ type: appActions.FETCHING_EVENTS_SUCCESS, payload: data })
      );
  }, []);

  return events;
}

export function useFetchEvent() {
  const { appState, dispatch } = useContext(AppContext);
  const { events } = appState;
  const { id } = useParams();

  const getEvent = (events, id) =>
    events.events.find((e) => e.id.toString() === id);

  useEffect(() => {
    const event = getEvent(events, id);
    if (event) {
      return;
    }

    dispatch({ type: appActions.FETCHING_EVENT_START });

    apiClient
      .get(`/events/${id}`)
      .then(({ data }) =>
        dispatch({ type: appActions.FETCHING_EVENT_SUCCESS, payload: data })
      );
  }, [id]);

  return {
    ...getEvent(events, id),
    loading: events.loading,
  };
}
