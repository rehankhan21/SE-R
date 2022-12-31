import './App.css';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link
} from "react-router-dom"
import Home from './components/Home'
import Hooks from './components/Hooks'
import ItemList from './components/Class'

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hooks" element={<Hooks />} />
        <Route path="/ItemList" element={<ItemList />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
