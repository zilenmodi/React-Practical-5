import React from "react";
import PaginateComponent from "../../components/PaginateComponent/PaginateComponent";
import { useDispatch, useSelector } from "react-redux";

const PaginateContainer = ({ currentPage, setCurrentPage, maxPages }) => {
  return (
    <PaginateComponent
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      maxPages={maxPages}
    />
  );
};

export default PaginateContainer;
