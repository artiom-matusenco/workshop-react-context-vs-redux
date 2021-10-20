import { appActions } from './appActions';

function setFetchingEvents(state) {
  return {
    ...state,
    events: {
      ...state.events,
      loading: true,
    },
  };
}

function setEvents(state, payload) {
  return {
    ...state,
    events: {
      ...payload,
      loading: false,
    },
  };
}

function setEvent(state, payload) {
  return {
    ...state,
    events: {
      ...state.events,
      events: [...state.events.events, payload],
      loading: false,
    },
  };
}

export default function appReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case appActions.FETCHING_EVENTS_START:
      return setFetchingEvents(state);
    case appActions.FETCHING_EVENTS_SUCCESS:
      return setEvents(state, payload);
    case appActions.FETCHING_EVENT_START:
      return setFetchingEvents(state);
    case appActions.FETCHING_EVENT_SUCCESS:
      return setEvent(state, payload);
    default:
      throw new Error(`Unknown action dispatched: ${action.type}`);
  }
}
