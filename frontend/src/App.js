import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import EventsPage from './pages/EventsPage';
import { ROUTES } from './constants';

const { SEARCH, ARTIST_DETAIL } = ROUTES

class App extends React.Component {

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path={`${SEARCH}`} component={SearchPage} />
              {/* <SearchPage/> */}
            {/* </Route> */}
            <Route path={`${ARTIST_DETAIL}/:artist_name`} component={EventsPage}/>
              {/* <EventsPage/> */}
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
