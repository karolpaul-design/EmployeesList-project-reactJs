import React from "react";
import UserBirthday from "../user-birthday/user-birthday.component";
import uniqid from "uniqid";
import { useSelector } from "react-redux";

function Month() {
  const monthsList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const months = {
    January: [],
    February: [],
    March: [],
    April: [],
    May: [],
    June: [],
    July: [],
    August: [],
    September: [],
    October: [],
    November: [],
    December: [],
  };

  const activeUsers = useSelector((state) => {
    const { activeUsers } = state;
    return activeUsers.activeUsers;
  });

  return (
    <div>
      {Object.entries(months).map((monthObj) => {
        let month = monthObj[0];
        let actives = [];
        activeUsers.forEach((userObj) => {
          if (
            month === monthsList[new Date(Date.parse(userObj.dob)).getMonth()]
          ) {
            actives.push(userObj);
          }

          months[month] = actives;
        });

        if (months[month].length > 0) {
          return (
            <div key={uniqid()}>
              <h3>{month}</h3>
              <ul>
                {months[month].map((userObj) => (
                  <UserBirthday key={userObj.id} userObj={userObj} />
                ))}
              </ul>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default Month;
