import React from "react";
import getmovies from "../services/fakeMovieService";
import MovieTable from "./movieTable";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import Genre from "./genre";
import _ from "lodash";

class Movies extends React.Component {
  state = {
    movie: getmovies(),
    genre: getGenres(),
    pageSize: 4,
    sortColumn : {path : 'title' , order : 'asc'} , 
    currentPage: 1,
    currentGenre: "All Genre",
  };
  render() {
    // get the required movies from paginate method
    let movies = this.state.movie;

    if (this.state.currentGenre !== "All Genre")
      movies = this.state.movie.filter(
        (m) => this.state.currentGenre === m.genre.name
      );

    const sorted = _.orderBy(movies , [this.state.sortColumn.path] , [this.state.sortColumn.order]) ; 
    const movieSliced = paginate(
      sorted,
      this.state.currentPage,
      this.state.pageSize
    );
    if (movieSliced.length === 0 && this.state.currentPage !== 1)
      this.handlePage(this.state.currentPage - 1);
    // if there are no movies in the database then this messages is shown
    if (this.state.movie.length === 0)
      return <h1>No Movies in the Database</h1>;
    return (
      <div className="container">
        <div className="row">
          <div className="col-2">
            <Genre
              handleGenre={this.handleGenre}
              currentGenre={this.state.currentGenre}
              genre={this.state.genre}
            />
          </div>
          <div className="col">
            {movies.length === 0 ? (
              <h3>No movies of selected genre</h3>
            ) : (
              <React.Fragment>
                <h3>Showing {movies.length} movies</h3>
                <MovieTable
                  sortColumn = {this.state.sortColumn}
                  movieSliced={movieSliced}
                  onToggle={this.handleToggle}
                  onDelete={this.handleDelete}
                  onSorting={this.handleSort}
                />
              </React.Fragment>
            )}
            <Pagination
              numOfMovies={movies.length}
              pageSize={this.state.pageSize}
              onPageChange={this.handlePage}
              currentPage={this.state.currentPage}
            />
          </div>
        </div>
      </div>
    );
  }
  handleSort = sortColumn => {
    this.setState({sortColumn});
  };
  handleGenre = (genreName) => {
    this.setState({ currentGenre: genreName });
  };
  handlePage = (pageNum) => {
    this.setState({ currentPage: pageNum });
  };
  handleToggle = (movie) => {
    let movies = [...this.state.movie];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movie: movies });
  };
  handleDelete = (m_id) => {
    const movie = this.state.movie.filter((m) => m._id !== m_id);
    this.setState({ movie });
  };
}

export default Movies;
