import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import MovieList from './components/MovieList';

ReactDOM.render(
  <MovieList heading="List of Movies" />,
  document.getElementById('root')
);

// JSX expression
// a component can accept props
// reactComponent(optionalData) => return JSX (UI)