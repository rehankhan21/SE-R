import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
import Nav from './Nav';
import Home from './Home';
import About from './About'
import Contact from './Contact'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
