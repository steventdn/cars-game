// src/components/BoardView.jsx
import React, {Component} from 'react';
import {WID, HGT, GRID, WALL} from '../utils/constants.js';
import Square from './Square.jsx';
import CarView from './CarView.jsx';
import YouWon from './YouWon.jsx';
import ButtonView from './ButtonView.jsx';
import Border from './Border.jsx';
import ExitWay from './ExitWay.jsx';
class BoardView extends Component
{
  //Constructor for handleReset and handleNext (This is kind of similar to the way we did CarView)
  constructor(props)
  {
    super(props)
    this.handleReset = this.handleReset.bind(this)
    this.handleNext = this.handleNext.bind(this)
  }
  //Link it to the function from carsGame.js
  handleReset(event)
  {
    this.props.cars.resetPuzzle()
  }
  //Link it to the function from carsGame.js
  handleNext(event)
  {
    this.props.cars.nextPuzzle()
  }
  
  render()
  {
  // Width and height of the board area, then the style
  const bWid = WID * GRID;
  const bHgt = HGT * GRID;
  const bStyle =
  {
    top: WALL,
    left: WALL,
    width: bWid,
    height: bHgt,
    position: 'absolute'
  };
  // Make a list of things to fill the board:
  let list = [];
  // Add the border and the exit for the cars game first
  list.push(<Border/>)
  list.push(<ExitWay/>)
  let key = 1;
  for (let x = 0; x < WID; x++)
  {
    let cx = x * GRID;
    for (let y = 0; y < HGT; y++)
    {
      let cy = y * GRID;
      list.push(<Square key={key++} x={cx} y={cy} />);
    }
  }
  const cars = this.props.cars;
  const num = cars.getNumCars();
  for (let i = 0; i < num; i++)
    {
        const { id, x, y, ncols, nrows, color } = cars.getCar(i);
        list.push(
          <CarView 
              key={key++} 
              x={x*GRID} 
              y={y*GRID} 
              wid={ncols*GRID} 
              hgt={nrows*GRID} 
              color={color}
              idNum={id} 
              cars={this.props.cars}
          />);  
    }
// Styling for the Level value
const levelMiddleStyle = {
    position: 'absolute',
    top: HGT*GRID,
    left: 128,
    padding: 21,
}

// Styling for the next button
const nextStyle = {
  position: 'relative',
  top: HGT*GRID-8,
  left: -15,
  padding: 19,
}

// Styling for the reset button
const resetStyle = {
  position: 'relative',
  top: HGT*GRID-8,
  left: -30,
  padding: 19,
}

// Styling for the goal value
const goalStyle = {
  position: 'relative',
  top: HGT*GRID,
  left: 25,
  padding: 19,
}

// Styling for the moves value
const moveStyle = {
  position: 'relative',
  top: HGT*GRID,
  left: 10,
  padding: 19,
}

// Push the table in to hold the button and the game values
// Make the next and reset buttons and add respecting function to its onClick
// Print Level, Goal, and Moves, and use this.props.cars.get______(). (see value name in carsGame.js constuctor)
list.push(
    <div>
        <table>
            <tr>
                <td style={nextStyle}><ButtonView name={"Next"} onClick = {this.handleNext}/></td>
                <td style={resetStyle}><ButtonView name={"Reset"} onClick = {this.handleReset}/></td>
                <td style={levelMiddleStyle}>Level: {this.props.cars.getPuzzleNumber()}</td>
                <td style={goalStyle}> Goal: {this.props.cars.getBestNumMoves()}</td>
                <td style={moveStyle}> Moves: {this.props.cars.getNumMoves()}</td>
            </tr>
        </table>
    </div>
)

// Check if the car has won, if so push in the You won! prompt
if (cars.hasWon())
{
list.push(<YouWon cx={WID*GRID/2} cy={HGT*GRID/2} />);
}

  return (
  
      <div style={bStyle}>
        {list}
      </div>
  
        )
    };
}
export default BoardView;