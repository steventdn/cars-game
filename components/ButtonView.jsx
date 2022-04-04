//// src/components/ButtonView.jsx
import React, {Component} from 'react';
class ButtonView extends Component
{
    render()
    {
       // Return button that takes in name and onclick function
        return ( 
            <div>
                <button type="button" onClick={this.props.onClick}>{this.props.name}</button>
            </div>
        );
    }
};
export default ButtonView;