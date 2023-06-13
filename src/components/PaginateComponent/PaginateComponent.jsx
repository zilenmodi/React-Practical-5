import React from "react";
import "./PaginateComponent.css";

const PaginateComponent = ({ currentPage, setCurrentPage, maxPages }) => {
  const nextPage = () => {
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  let items = [];
  let leftSide = currentPage - 2;
  if (leftSide <= 0) leftSide = 1;
  let rightSide = currentPage + 2;
  if (rightSide > maxPages) rightSide = maxPages;
  for (let number = leftSide; number <= rightSide; number++) {
    items.push(
      <div
        key={number}
        className={
          number === currentPage
            ? "paginate-round-effect active"
            : "paginate-round-effect"
        }
        onClick={() => {
          setCurrentPage(number);
        }}
      >
        {number}
      </div>
    );
  }
  return (
    <>
      <div className="flex-container">
        <div className="paginate-ctn">
          <div className="paginate-round-effect" onClick={prevPage}>
            &lsaquo;
          </div>
          {items}
          <div className="paginate-round-effect" onClick={nextPage}>
            &rsaquo;
          </div>
        </div>
      </div>
    </>
  );
};

export default PaginateComponent;
