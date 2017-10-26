import React, { Component } from 'react';
import {Carousel} from 'react-responsive-carousel';
import './App.css';
import '../node_modules/react-responsive-carousel/lib/styles/carousel.min.css'

class LatestMovie extends Component{
    constructor(props){
        super(props);
    }
   render(){
       let latestMovieDetials=this.props.data?this.props.data:[];
       let actualMovie=[],
           imgUrl="https://image.tmdb.org/t/p/w500";
       actualMovie=latestMovieDetials.map((movie,index)=>
                                                <div key={index}>
                                                    <div className="img-wrp">
                                                    <img src={imgUrl+movie.poster_path} className="img-rounded" alt="Chania"/> 
                                                     </div>
                                                     <div className="desription">
                                                      <h1 className="movie-name">{movie.title}</h1>
                                                        <hr/>
                                                      <div className="legend">{movie.overview}
                                                        <br/><br/>
                                                         <div className="tile-info-sec">
                                                            <div className="info-text">Release</div>
                                                            <div className="info-val">{movie.release_date}</div>
                                                          </div>
                                                      </div>
                                                     </div>                 
                                                  </div>
                                        );                                                   
       return(
              <div className="row carousal-wrapper">           
               <Carousel showArrows={true} selectedItem ={3} infiniteLoop={true} autoPlay={false}>
                    {actualMovie}
                </Carousel>                    
            </div>
           );
   }
}

export default LatestMovie;