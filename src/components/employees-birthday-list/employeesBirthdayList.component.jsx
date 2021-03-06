import React from "react";
import "./employeesBirthdayList.styles.css";
import { setActiveUsers } from "../../redux/activeUsers/activeUsers.action";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import Month from "../month/month.component";

function EmployeesBirthday() {
  const [buttonVisibility, setButtonVisibility] = useState(true);

  const activeUsers = useSelector((state) => {
    const { activeUsers } = state;
    return activeUsers.activeUsers;
  });

  const dispatch = useDispatch();

  const handleClick = () => {
    let clearActiveUsers = [];
    localStorage.setItem("activeUsers", JSON.stringify(clearActiveUsers));
    dispatch(setActiveUsers(clearActiveUsers));
  };

  useEffect(() => {
    if (activeUsers.length) {
      setButtonVisibility(false);
    } else {
      setButtonVisibility(true);
    }
  }, [activeUsers]);

  return (
    <div className="employees-birthday__wrapper">
      <h1 className="title">Empoyees birthday</h1>
      <hr />
      <div className="birthday-list__wrapper">
        <Month />
        <button onClick={handleClick} hidden={buttonVisibility}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default EmployeesBirthday;
