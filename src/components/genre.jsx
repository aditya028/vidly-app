import React from "react";

const Genre = props => {
    const {handleGenre , currentGenre , genre} = props ; 
  return (
    <div className="list-group">
      <a
        href="#"
        onClick={() => handleGenre("All Genre")}
        className={
          currentGenre === "All Genre"
            ? "list-group-item list-group-item-action active"
            : "list-group-item list-group-item-action"
        }
      >
        All Genre
      </a>
      {genre.map((g) => (
        <a
          key = {g._id}
          href="#"
          onClick={() => handleGenre(g.name)}
          className={
            currentGenre === g.name
              ? "list-group-item list-group-item-action active"
              : "list-group-item list-group-item-action"
          }
        >
          {g.name}
        </a>
      ))}
    </div>
  );
};

export default Genre;
