// src/components/Border.jsx
import React, {Component} from 'react';

class Border extends Component
{
    render()
    {
        // The style to use for the border
        const boStyle =
        {
            zindex:-2,
            top: -7.5,
            left: -8,
               width: 350,
               height: 349,
               borderWidth: 8,
               borderHeight: 8,
               borderColor: '#FF0000',
               borderStyle: 'solid',
              
               position: 'absolute'
        };     
        return ( <div style={boStyle} /> );
    }
};
export default Border;