import React, { Component } from 'react';
import './App.css';
import Tile from './tileInfo';

class InfoSec extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let data=this.props.data;
        let newsHeading=data.original_title,
            release_date=data.release,
            revenue=data.revenue>0?data.revenue:"NA",
            vote_average=data.vote>0?data.vote:"NA",
            runtime=data.runtime>0?data.runtime:"NA",
            overview=data.overview;
        return(
              <div className="float-left padding-zero infoSection col-md-8 col-sm-12 col-xs-12">
               <h1 className="heading">{newsHeading}</h1>
                <hr/>
                <p className="intro">
                   {overview}
               </p>
                <div className="other-info">
                  <Tile title="Release" val={release_date} />
                  <Tile title="Running Time" val={runtime} />
                  <Tile title="Box Office" val={revenue} />
                  <Tile title="Vote" val={vote_average} />
                </div>
               </div>
              );
    }
}
export default InfoSec;