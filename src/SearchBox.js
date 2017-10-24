import React, { Component } from 'react';
import './App.css';
import ListGenerator from './movieList';

class Search extends Component{
    constructor(props){
        super(props);
        this.state={
                searchResult:''
        }
        this.handleChange=this.handleChange.bind(this);
        this.searchMovieList=this.searchMovieList.bind(this);
    }
    handleChange(e){
        this.setState({
            searchTxt:e.target.value
        });
        this.searchMovieList(e.target.value);
    }
    searchMovieList(queryParameter){
        queryParameter=queryParameter.trim();
        if(queryParameter.length<=2 ){
            this.setState({
            searchTxt:""
        });
        } 
        let url=`https://api.themoviedb.org/3/search/movie?query=%${queryParameter}&api_key=cfe422613b250f702980a3bbf9e90716`;
        fetch(url).then((res) => res.json()).then((data) => {
            this.setState({
            searchResult:data.results
            });
        });
    }
     render(){
        return (
            <div className=" row search-wrapper">
                <input type="text" className="form-control" onChange={this.handleChange} placeholder="search by movie name" />
               {this.state.searchResult!=''?<ListGenerator loadMovie={this.props.loadMovie} movielist={this.state.searchResult}></ListGenerator>:<ListGenerator/>}
            </div>
            
        );
    }
}

export default Search;