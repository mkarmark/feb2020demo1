import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';
import TopTVShows2020 from './TopTVShows2020';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


class App extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/tvShows/" component={TopTVShows2020}/>
        </Switch>
      </div>
      </Router>
    )
  }
}

export default App;
