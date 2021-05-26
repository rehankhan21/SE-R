import './App.css';
import ReduxCom from './ReduxClass';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        {/*NavBar component for all the componeents */}
        <Switch>
          <Route path="/" exact component={ReduxCom}/>
           {/* <Redux /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
