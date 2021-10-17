import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../home/Home';
import Navigation from './Navigation';
import EventListContainer from '../events/EventListContainer';
import EventDetailsContainer from '../events/EventDetailsContainer';

export default function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/events">
            <EventListContainer />
          </Route>
          <Route path="/events/:id">
            <EventDetailsContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
