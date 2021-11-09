import React from "react";
import _ from "lodash";

class Pagination extends React.Component {
  render() {
    //destructuring props values
    const { numOfMovies, pageSize, onPageChange, currentPage } = this.props;

    // counting the number of pages
    const pageCount = Math.ceil(numOfMovies / pageSize);

    // Rendering pagination if pagecount is more than 1
    if (pageCount === 1) return null;

    // creating a page array with value (1,2..pagecount) with the help of 'loadash range method '
    const page = _.range(1, pageCount + 1);

    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {page.map((page) => (
            <li
              key={page}
              className={
                currentPage === page ? "page-item active " : "page-item "
              }
            >
              <a
                onClick={() => onPageChange(page)}
                className="page-link "
                href="/"
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
