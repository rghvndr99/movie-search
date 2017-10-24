import React, { Component } from 'react';
import './App.css';
import ImageSec from './imageSection';
import InfoSec from './infoSection';

class Tile extends Component{
    constructor(props){
        super(props);
    }
   render(){
       return(
              <div className="row info-section-wrapper">
                  <ImageSec data={this.props.data}/>
                  <InfoSec data={this.props.data}/>
              </div>
       );
   }
}

export default Tile;