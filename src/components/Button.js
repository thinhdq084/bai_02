import React, { Component } from 'react';
import './Button.css'

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <button type = "button" className = "btn btn-success">{this.props.text}</button>
        );
    }
}
 
export default Button;