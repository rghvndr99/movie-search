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
                                                <div>
                                                    <img src={imgUrl+movie.poster_path} alt="Chania"/>                                              <p className="legend">{movie.overview}</p>
                                                                      
                                                  </div>
                                        );                                                   
       return(
              <div className="carousal-wrapper">           
               <Carousel showArrows={true} selectedItem ={3} infiniteLoop={true} autoPlay={true}>
                    {actualMovie}
                </Carousel>                    
            </div>
           );
   }
}

export default LatestMovie;