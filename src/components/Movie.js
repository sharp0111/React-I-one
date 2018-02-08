import React from 'react';

function Movie(props) {
  // const providedStyles = props.style;
  console.log('movie style', props.style);

  let getStyles = (textColor = 'silver', bgColor = '#ddd') => {
    return {
      ...props.style,
      color: textColor,
      backgroundColor: bgColor,
    };
  };
  return (
    <li className="movie-item" style={getStyles(props.textColor, 'yellow')}>
      <button
        onClick={() => {
          props.deleteMovie(props.movie.id);
        }}
      >
        Delete
      </button>{' '}
      {props.editing ? (
        <input type="text" value={props.movie.title} />
      ) : (
        <span>{props.movie.title}</span>
      )}
    </li>
  );
}

export default Movie;
