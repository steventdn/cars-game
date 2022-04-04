import React, { Component } from 'react';
import BoardView from './components/BoardView.jsx';
//Draws BoardView passing cars as one of the props
class App extends Component
{

  constructor(props)
  {
    super(props);
    this.state = {counter: 0};
    this.onBoardUpdate = this.onBoardUpdate.bind(this);
    props.cars.setRedrawCallback(this.onBoardUpdate);
  }

  onBoardUpdate(counter)
  {
    this.setState({counter: counter});
  }

  render()
    {
 return ( <BoardView cars={this.props.cars} counter={this.state.counter}/>);
    }
}
export default App;