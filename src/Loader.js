import React, { Component } from 'react';
import preloader from './preloader.gif'

class Loader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div id="overlay">
        <img src={preloader} alt="Preloader icon" />
    </div> );
    }
}
 
export default Loader;