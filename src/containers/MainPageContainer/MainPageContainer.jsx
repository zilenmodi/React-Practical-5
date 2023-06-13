import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainPageComponent from "../../components/MainPageComponent/MainPageComponent";
import { hoveredUser, unHoveredUser } from "../../redux/UserSlice/UserSlice";
import { fetchUsers, setIntialState } from "../../redux/UsersSlice/UsersSlice";
import PaginateContainer from "../PaginateContainer/PaginateContainer";

const MainPageContainer = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);
  const status = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);
  const pages = useSelector((state) => state.users.pages);

  const [currentPage, setCurrentPage] = useState(1);

  const handleHoverMouseOnUser = (user) => {
    dispatch(hoveredUser(user));
  };

  const handleHoverOutUser = () => {
    dispatch(unHoveredUser());
  };

  useEffect(() => {
    dispatch(setIntialState());
    dispatch(fetchUsers(currentPage));
  }, [dispatch, currentPage]);

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="main-page-container">
        <MainPageComponent
          users={users}
          handleHoverMouseOnUser={handleHoverMouseOnUser}
          handleHoverOutUser={handleHoverOutUser}
          status={status}
        />
        <PaginateContainer
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          maxPages={pages}
        />
      </div>
    </>
  );
};

export default MainPageContainer;
