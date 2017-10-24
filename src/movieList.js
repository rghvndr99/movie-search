import React, { Component } from 'react';
import './App.css';

class ListGenerator extends Component{
    constructor(props){
        super(props);
        }

     render(){
         let movieResult=this.props.movielist?this.props.movielist:[];
         let loadMovieDetail=this.props.loadMovie;
         let listmovie=movieResult.map(movieData=><li onClick={()=>loadMovieDetail(movieData.id)}>{movieData.title}</li>);
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