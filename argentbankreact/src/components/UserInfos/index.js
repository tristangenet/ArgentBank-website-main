import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";

const UserInfos = ({ userName }) => {
  const user = useSelector((state) => state.user.value);
  return (
    <table className="userInfosTable">
      <thead>
        <tr>
          <th colSpan="2" className="tableTitle">
            Edit user info
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>User Name :</td>
          <td>
            <input defaultValue={userName} minLength="4"></input>
          </td>
        </tr>
        <tr>
          <td>First Name :</td>
          <td>
            <input value={user.firstName} disabled></input>
          </td>
        </tr>
        <tr>
          <td>Last Name :</td>
          <td>
            <input value={user.lastName} disabled></input>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserInfos;
