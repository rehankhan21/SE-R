import './App.css';
import ReduxCom from './ReduxClass';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

import Translate from './Translate'
import Nav from './Nav';

function App() {
  return (
    <Router>
      <div className="App">
        {/*NavBar component for all the componeents */}
        <Nav />
        <Switch>
          <Route path="/" exact component={ReduxCom}/>
           {/* <Redux /> */}
           <Route path="/translate" component={Translate}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
