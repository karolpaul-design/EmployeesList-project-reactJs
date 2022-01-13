import React from "react";

import User from "../user/user.component";
import "./employeesList.styles.css";
const alphabet = [...Array(26)]
  .map((_, y) => String.fromCharCode(y + 65))
  .join("")
  .split("");

function EmployeesList(props) {
  const sortUsersByLetter = (letter) => {
    let userNamesArr = [];
    props.users.forEach((userInfo) => {
      if (userInfo.lastName[0].toUpperCase() === letter) {
        userNamesArr.push(
          `${userInfo.lastName} ${userInfo.firstName} ${userInfo.id} ${userInfo.dob}`.split(
            " "
          )
        );
      }
    });

    return userNamesArr.length !== 0 ? userNamesArr : ["-"];
  };

  return (
    <div>
      <h1 className="title">Empoyees</h1>
      <hr />

      <div className="list__wrapper">
        {alphabet.map((letter) => (
          <div>
            <h2>{letter}</h2>
            <div>
              {sortUsersByLetter(letter).map((userArr) => {
                if (userArr[0] !== "-") {
                  return (
                    <User
                      userArr={userArr}
                      activeUsers={props.activeUsers}
                      setStateOfParent={props.setStateOfParent}
                    />
                  );
                } else {
                  return <p>-----</p>;
                }
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeesList;
