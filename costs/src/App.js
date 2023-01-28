import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <ul>
        <li>Home</li>
        <li>Contato</li>
      </ul>
      <Switch>
          <Router exact path="/">
            <Home />
          </Router>

          <Router exact path="/company">
            <Company />
          </Router>

          <Router exact path="/contact">
            <Contact />
          </Router>

          <Router exact path="/newproject">
            <NewProject />
          </Router>
      </Switch>
    
    </Router>

  );
}

export default App;
