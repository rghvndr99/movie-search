import React, { Component } from 'react';
import './App.css';

class Tile extends Component{
    constructor(props){
        super(props);
    }
   render(){
       return(
              <div className="float-left tile-info-sec">
                <div className="info-text">{this.props.title}:</div>
                <div className="info-val">{this.props.val}</div>
              </div>
       );
   }
}
Tile.defaultProps={
    infoText:"standard dummy ",
    infoVal:"$2000"
}
export default Tile;