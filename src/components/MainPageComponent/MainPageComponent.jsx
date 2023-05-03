import React from "react";
import "./MainPageComponent.css";
import LockIcon from "../../assets/lock.svg";
import TrashIcon from "../../assets/trash.svg";
import HoverCardContainer from "../../containers/HoverCardContainer/HoverCardContainer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const temp = [1, 2, 3, 4, 5, 6, 7, 8];
const MainPageComponent = ({
  users,
  handleHoverMouseOnUser,
  handleHoverOutUser,
  status,
}) => {
  return (
    <>
      <div className="main-page">
        <div className="users-list-area">
          <table className="users-list-tabel">
            <thead>
              <tr>
                <th className="table-heading-text table-heading-text-name">
                  Name
                </th>
                <th className="table-heading-text table-heading-text-status">
                  Status
                </th>
                <th className="table-heading-text table-heading-text-access">
                  Access
                </th>
                <th className="table-heading-text table-heading-text-icon"></th>
              </tr>
            </thead>
            <tbody>
              {users.length ? (
                <>
                  {users.map((user, index) => {
                    return (
                      <tr key={index}>
                        <td className="mb-2">
                          <div
                            className="user-details"
                            onMouseEnter={() => handleHoverMouseOnUser(user)}
                            onMouseLeave={handleHoverOutUser}
                          >
                            <div className="user-avatar">
                              <img src={user.avatar} />
                            </div>
                            <div className="user-detail">
                              <div className="user-name">
                                <p className="user-name-text">
                                  {user.first_name} {user.last_name}
                                </p>
                              </div>
                              <div className="user-email">
                                <p className="user-email-text">{user.email}</p>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="mb-2">
                          {!index ? (
                            <>
                              <p className="status-active-text">Active</p>
                            </>
                          ) : (
                            <>
                              <select className="status-dropdown">
                                <option>Inactive</option>
                                <option>Active</option>
                              </select>
                            </>
                          )}
                        </td>
                        <td className="mb-2">
                          {!index ? (
                            <>
                              <p className="access-owner-text">Owner</p>
                            </>
                          ) : (
                            <>
                              <select className="status-dropdown">
                                <option>{user.role}</option>
                              </select>
                            </>
                          )}
                        </td>
                        <td className="mb-2">
                          <div className="user-access-icon">
                            <img src={!index ? LockIcon : TrashIcon} />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </>
              ) : (
                <>
                  {temp.map((index) => {
                    return (
                      <tr key={index}>
                        <td className="user-details mb-2">
                          <Skeleton circle={true} width={40} height={40} />
                          <div>
                            <Skeleton width={150} />
                            <Skeleton width={100} height={10} />
                          </div>
                        </td>
                        <td className="mb-2">
                          <Skeleton borderRadius={20} width={70} />
                        </td>
                        <td className="mb-2">
                          <Skeleton borderRadius={20} width={70} />
                        </td>
                        <td className="mb-2">
                          <div className="user-access-icon">
                            <Skeleton circle={true} width={40} height={40} />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </>
              )}
            </tbody>
          </table>
        </div>
        <div className="user-card-area">
          <HoverCardContainer />
        </div>
      </div>
    </>
  );
};

export default MainPageComponent;
