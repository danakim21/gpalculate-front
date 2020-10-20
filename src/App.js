import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import GpaPage from './pages/GpaPage/GpaPage';
import GradePage from './pages/GradePage/GradePage';
import AboutPage from './pages/AboutPage/AboutPage';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/gpaCalculator" component={GpaPage} />
          <Route path="/gradeCalculator" component={GradePage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
