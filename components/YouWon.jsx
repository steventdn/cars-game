// src/components/YouWon.jsx
import React, {Component} from 'react';

class YouWon extends Component
{
    render()
    {
        // The style to use for the You Won prompt
        const myStyle =
        {
            display: 'flex', 
            justifyContent:'center',
            alignItems:'center',
            top: this.props.cy/1.17,
            left: this.props.cx/1.45,
            fontSize: 18,
               width: 100,
               height: 50,
               background: '#FFEB3B',
               borderWidth: 1,
               borderColor: '#555555',
               borderStyle: 'solid',
               position: 'absolute'
        };
        return ( <div style={myStyle}> You Won! </div>)
    }
};
export default YouWon;