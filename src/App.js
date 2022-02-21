import "./App.css";
import React from "react";
import EmployeesList from "./components/employees-list/employeesList.component";
import EmployeesBirthday from "./components/employees-birthday-list/employeesBirthdayList.component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActiveUsers } from "./redux/activeUsers/activeUsers.action";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("activeUsers") !== null) {
      let usersStore = localStorage.getItem("activeUsers")
        ? localStorage.getItem("activeUsers")
        : [];
      let data = JSON.parse(usersStore);
      console.log(data);
      dispatch(setActiveUsers(data));
    }
  });

  return (
    <div className="app">
      <EmployeesList />
      <hr className="vertical-hr"></hr>
      <EmployeesBirthday />
    </div>
  );
};

export default App;
