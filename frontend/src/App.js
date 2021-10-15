import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
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
            <Route path={'/'} exact render={() => <Redirect to={`${SEARCH}`} />}/>
            <Route path={`${SEARCH}`} component={SearchPage} />
            <Route path={`${ARTIST_DETAIL}/:artist_name`} component={EventsPage}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
