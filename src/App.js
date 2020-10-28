import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import GpaPage from './pages/GpaPage/GpaPage';
import GradePage from './pages/GradePage/GradePage';
import AboutPage from './pages/AboutPage/AboutPage';
import './styles/App.css';

import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/gpa-calculator" component={GpaPage} />
            <Route path="/grade-calculator" component={GradePage} />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
