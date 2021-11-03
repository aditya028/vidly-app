import React from "react";

class TableHeader extends React.Component {
  raiseSort = (path) => { 
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path !== path) sortColumn.path = path;
    sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    this.props.onSorting(sortColumn);
  };
  renderSortIcon = column => {
    if(column.icon === true) return <i className="fas fa-sort"/>
  }
  render() {
    const { column } = this.props;

    return (
      <thead>
        <tr>
          {column.map((h) => (
          <th
            key = {h.label || h.key}
            style={{ cursor: "pointer" }}
            onClick={() => this.raiseSort(h.path)}
          >
            {h.label} {this.renderSortIcon(h)}
          </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
