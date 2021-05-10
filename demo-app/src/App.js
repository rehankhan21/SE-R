import './App.css';
import Count from './Count'
import Greet from "./greet";
import WishList from "./wish";
import NabBar from "./NavBar";
import Description from "./Description"
import HelloWorld from "./HelloWorld"

import Player from "./Player";
import Board from "./Board";
import Square from "./Square"

import Hooks from "./Hooks"

import Toggle from "./ToggleOn"

function App() {

  return (
    <div>
      {/* <h1>Tic Tac Toe React</h1>
      <Player whichPlayer="X" score="2" />
      <Player whichPlayer="O" score="3" />
      <Board /> */}
      {/* <Count  />
      <Hooks /> */}

      <Toggle />

    </div>
  );
}

export default App;
