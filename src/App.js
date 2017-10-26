import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBox from './SearchBox';
import MovieHtml from './generateMovie';
import UpComingMovie from './generateCarousal';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            movieID:"472123",
            movieDetail:"",
            upcomingMovies:""
        }
        this.fetchMovieDetail=this.fetchMovieDetail.bind(this);
        this.fetchUpComingMovie=this.fetchUpComingMovie.bind(this);
    }
    fetchUpComingMovie(){
       var url="https://api.themoviedb.org/3/movie/upcoming?&api_key=cfe422613b250f702980a3bbf9e90716";
        fetch(url).then((res) => res.json()).then((data) => {
             this.setState({
                 upcomingMovies:data.results
             });
        });
    }
    fetchMovieDetail(movieId){        
        var url=`https://api.themoviedb.org/3/movie/${movieId}?&api_key=cfe422613b250f702980a3bbf9e90716`;
        fetch(url).then((res) => res.json()).then((data) => {
            let movieRes={
                movieID: data.id,
                original_title: data.original_title,
                tagline: data.tagline,
                overview: data.overview,
                homepage: data.homepage,
                poster: data.poster_path,
                production: data.production_companies,
                production_countries: data.production_countries,
                genre: data.genres,
                release: data.release_date,
                vote: data.vote_average,
                runtime: data.runtime,
                revenue: data.revenue,
                backdrop: data.backdrop_path
            }
            this.setState({
                movieID:movieRes.movieID,
                movieDetail:movieRes
            });
        })
    }
    componentDidMount(){
               this.fetchUpComingMovie();
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="main-wrapper">
        <SearchBox loadMovie={this.fetchMovieDetail}/>
        {this.state.movieDetail!=""?<MovieHtml data={this.state.movieDetail}></MovieHtml>:""}
        <div className="row upcoming-movie-list">Upcoming movies</div>
        {this.state.upcomingMovies!=""?<UpComingMovie data={this.state.upcomingMovies}></UpComingMovie>:""}
        </div>
      </div>
    );
  }
}

export default App;
