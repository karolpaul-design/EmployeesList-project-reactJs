import React from "react";

import Month from "../month/month.component";

function EmployeesBirthday(props) {
  return (
    <div className="employees-birthday__wrapper">
      <h1 className="title">Empoyees birthday</h1>
      <hr />
      <Month activeUsers={props.activeUsers} />
    </div>
  );
}

export default EmployeesBirthday;
