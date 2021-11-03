import React from "react";
import Like from "./like";

const TableBody = props => {
    const { movieSliced, onToggle, onDelete } = props;

    return ( <tbody> 
        {movieSliced.map((movie) => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like liked={movie.liked} onToggle={() => onToggle(movie)} />
            </td>
            <td>
              <button
                onClick={() => onDelete(movie._id)}
                className="btn btn-outline-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody> );
}
 
export default TableBody;

