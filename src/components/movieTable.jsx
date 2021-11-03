import React, { Component } from "react";
import TableBody from "./common/tableBody";
import TableHeader from "./common/tableHeader";

class MovieTable extends React.Component {
  state = {
    column: [
      { label: "Title", path: "title" , icon : true},
      { label: "Genre", path: "genre.name" , icon : true},
      { label: "Stock", path: "numberInStock" , icon : true},
      { label: "Rate", path: "dailyRentalRate" , icon : true},
      { key: "like" },
      { key: "delete" },
    ],
  };
  render() {
    const { movieSliced, onToggle, onDelete, onSorting, sortColumn } =
      this.props;
    return (
      <table className="table">
        <TableHeader
          onSorting={onSorting}
          sortColumn={sortColumn}
          column={this.state.column}
        />
        <TableBody
          movieSliced={movieSliced}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      </table>
    );
  }
}

export default MovieTable;
