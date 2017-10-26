import React, { Component } from 'react';
import './App.css';

class ListGenerator extends Component{
    constructor(props){
        super(props);
        this.loadMoviedetail=this.loadMoviedetail.bind(this);
        }
   loadMoviedetail(movieId){
       let loadMovieDetail=this.props.loadMovie;
       let clearList=this.props.clearMovieResult;
       loadMovieDetail(movieId);
       clearList();
   }
     render(){
         let movieResult=this.props.movielist?this.props.movielist:[];
         let loadMovieDetail=this.props.loadMovie;
         let clearList=this.props.clearMovieResult;
         let listmovie=movieResult.map((movieData,index)=><li key={index} onClick={()=>this.loadMoviedetail(movieData.id)}>{movieData.title}</li>);
        let classList=listmovie.length>0?"search-result-wrap":"search-result-wrap hide";
        return (
            <div className={classList}>
             <ul>
               {listmovie}
             </ul>
            </div>
        );
    }
}

export default ListGenerator;