import React from "react";
import uniqid from "uniqid";
import User from "../user/user.component";
import "./employeesList.styles.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUsers } from "../../redux/users/users.action";
const alphabet = [...Array(26)]
  .map((_, y) => String.fromCharCode(y + 65))
  .join("")
  .split("");

function EmployeesList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => {
    const { users } = state;

    return users.currentUsers;
  });

  useEffect(() => {
    fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users")
      .then((response) => response.json())
      .then((usersNew) => dispatch(setCurrentUsers(usersNew)))
      .catch((error) => console.log("Error happened"));
  }, [dispatch]);

  const sortUsersByLetter = (letter) => {
    let userNamesArr = [];
    users.forEach((userInfo) => {
      if (userInfo.lastName[0].toUpperCase() === letter) {
        userNamesArr.push(userInfo);
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
          <div key={uniqid()}>
            <h2>{letter}</h2>
            <div>
              {sortUsersByLetter(letter).map((userObj) => {
                if (userObj[0] !== "-") {
                  return <User key={userObj.id} userObj={userObj} />;
                } else {
                  return <p key={uniqid()}>-----</p>;
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
