import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainPageComponent from "../../components/MainPageComponent/MainPageComponent";
import { hoveredUser, unHoveredUser } from "../../redux/UserSlice/UserSlice";
import { fetchUsers } from "../../redux/UsersSlice/UsersSlice";

const MainPageContainer = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);
  const status = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);
  const pages = useSelector((state) => state.users.pages);

  const [currentPage, setCurrentpage] = useState(0);

  const handleHoverMouseOnUser = (user) => {
    dispatch(hoveredUser(user));
  };

  const handleHoverOutUser = () => {
    dispatch(unHoveredUser());
  };

  useEffect(() => {
    dispatch(fetchUsers(0));
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }
  console.log(pages);
  return (
    <MainPageComponent
      users={users}
      handleHoverMouseOnUser={handleHoverMouseOnUser}
      handleHoverOutUser={handleHoverOutUser}
    />
  );
};

export default MainPageContainer;
