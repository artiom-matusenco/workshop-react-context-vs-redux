import { useContext, useEffect } from 'react';
import { appActions } from '../context/appActions';
import { AppContext } from '../context/AppContext';
import { fetchEvent, fetchEvents } from './api-requests';
import { getEvent } from './selector';

export function useGetEvents() {
  const { appState, dispatch } = useContext(AppContext);
  const { events } = appState;

  useEffect(() => {
    if (events.events.length <= 1) {
      dispatch({ type: appActions.FETCHING_EVENTS_START });
      fetchEvents().then(({ data }) =>
        dispatch({ type: appActions.FETCHING_EVENTS_SUCCESS, payload: data })
      );
    }
  }, []);

  return events;
}

export function useGetEvent(id) {
  const { appState, dispatch } = useContext(AppContext);
  const { events } = appState;

  const event = events.events.find((e) => e.id === id);

  useEffect(() => {
    if (!event) {
      dispatch({ type: appActions.FETCHING_EVENT_START });
      fetchEvent(id).then(({ data }) =>
        dispatch({ type: appActions.FETCHING_EVENT_SUCCESS, payload: data })
      );
    }
  }, []);

  return {
    event,
    loading: events.loading,
  };
}
