import React from 'react';
import PageWrapper from './components/PageWrapper.js';
import Home from'./components/Pages/Home';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import Portfolio from './components/Common/Portfolio.js';
import Services from './components/Common/Services.js';
import Team from './components/Common/Team'
function App() {
  return (
    <Router>
      <PageWrapper>
        <Route
          exact={true}
          path="/"
          component={Home}
        />
        <Route 
          path="/about"
          component={About}
        
        />
        <Route 
          path="/contact"
          component={Contact}
        
        />
        <Route
          path="/portfolio"
          component={Portfolio}

        />
        <Route
          path="/services"
          component={Services}
        />
        <Route
          path="/team"
          component={Team}
        />
        
      </PageWrapper>
    </Router>

    
  );
}

export default App;
