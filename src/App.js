import React, {Component} from 'react';
import PageWrapper from './components/PageWrapper';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import About from './components/pages/About';
import Services from './components/common/services';
import Contact from './components/pages/Contact';

class App extends Component {
  render () {
    return (
      <Router>
        <PageWrapper>

          <Route
            exact = {true}
            path = "/"
            component = {Home}
          />

          <Route
            path="/about"  
            component = {About}
          />

          <Route
            path = "/services"
            component = {Services}
          />

          <Route
            path = "/contact"
            component = {Contact}
          />

        </PageWrapper>
      </Router>
    );
  }
}
export default App;
