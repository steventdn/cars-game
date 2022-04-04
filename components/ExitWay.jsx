// src/components/ExitWay.jsx
import React, {Component} from 'react';
import {GRID} from '../utils/constants.js';

class ExitWay extends Component
{
    render()
    {
        // The style to use for the exitway
        const boStyle =
        {
            top: 100,
            left: 350,
               width: GRID,
               height: GRID,
               background: '#FFFFFF',
               position: 'absolute'
        };     
        return ( <div style={boStyle} /> );
    }
};
export default ExitWay;