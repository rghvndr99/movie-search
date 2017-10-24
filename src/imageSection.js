import React, { Component } from 'react';
import './App.css';

class ImgSec extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let imgUrl="https://image.tmdb.org/t/p/w500"+this.props.data.poster;
        return(
              <div className="float-left padding-zero height-100 col-md-4 col-sm-12 col-xs-12">
                   <img src={imgUrl} className="img-rounded main-img height-100" />
               </div>
              );
    }
}

ImgSec.defaultProps={
    poster:''
}
export default ImgSec;