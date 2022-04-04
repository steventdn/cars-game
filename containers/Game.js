// src/containers/Game.js
import React, {Component} from 'react';
import App from '../App';
import carsGame from '../utils/carsGame.js';
// Create instance of the game logic and pass cars to App
let theCars = new carsGame();
class Game extends Component
{
    render()
    {
     return ( <App cars={theCars} /> 
);
    }
};
export default Game;