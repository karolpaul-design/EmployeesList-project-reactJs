import React from "react";
import UserBirthday from "../user/user-birthday.component";

function Month(props) {
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
    October: [],
    November: [],
    December: [],
  };

  return (
    <div>
      {Object.entries(months).map((monthObj) => {
        {
          /* debugger; */
        }
        let month = monthObj[0];
        let actives = [];
        props.activeUsers.forEach((userArr) => {
          if (
            month === monthsList[new Date(Date.parse(userArr[3])).getMonth()]
          ) {
            actives.push(userArr);
          }

          months[month] = actives;
        });

        if (months[month].length > 0) {
          return (
            <div>
              <h3>{month}</h3>
              <ul>
                {months[month].map((userArr) => (
                  <li>
                    <UserBirthday userArr={userArr} />
                  </li>
                ))}
              </ul>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Month;
