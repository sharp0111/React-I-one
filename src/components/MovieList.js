import React from 'react';

import Movie from './Movie';
import StyledList from './StyledList';

class MovieList extends React.Component {
  nextId = 4;
  state = {
    movies: [
      {
        id: 1,
        title: 'The Lord of The Rings',
      },
      {
        id: 2,
        title: 'The Hobbit',
      },
      {
        id: 3,
        title: 'Sta Wars',
      },
    ],
    movieTitle: '',
    editing: false,
  };

  render() {
    return (
      <StyledList>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            value={this.state.movieTitle}
            onChange={this.handleInputChange}
          />
          <button type="submit">Add Movie</button>
        </form>

        <ul>
          {this.state.movies.map(movie => {
            return (
              <Movie
                style={{ padding: '8px 16px' }}
                textColor={'green'}
                key={movie.id}
                movie={movie}
                deleteMovie={this.removeMovie}
              />
            );
          })}
        </ul>
      </StyledList>
    );
  }

  getNextId = () => {
    return this.nextId++;
  };

  handleSubmit = event => {
    event.preventDefault();
    const newMovie = {
      id: this.getNextId(),
      title: this.state.movieTitle,
    };

    // rest/spread operator
    const newMovies = [...this.state.movies, newMovie];

    this.setState({ movies: newMovies, movieTitle: '' });
  };

  handleInputChange = event => {
    this.setState({ movieTitle: event.target.value });
  };

  removeMovie = id => {
    const newMovies = this.state.movies.filter(movie => {
      return movie.id !== id;
    });
    this.setState({ movies: newMovies });
  };
}

export default MovieList;
