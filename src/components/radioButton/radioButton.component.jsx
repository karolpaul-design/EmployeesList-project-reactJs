import { setActiveUsers } from "../../redux/activeUsers/activeUsers.action";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function RadioButton({ setColored, user, colored }) {
  const activeUsers = useSelector((state) => {
    const { activeUsers } = state;
    return activeUsers.activeUsers;
  });

  const dispatch = useDispatch();

  const handleOnclick = (e) => {
    if (e.target.value === "notActive") {
      setColored(false);
      let filteredActiveUsers = activeUsers.filter(
        (userData) => userData.id !== user.id
      );
      localStorage.setItem("activeUsers", JSON.stringify(filteredActiveUsers));
      dispatch(setActiveUsers(filteredActiveUsers));
    } else if (e.target.value === "active") {
      setColored(true);
      let updatedActiveUsers = [...activeUsers, user];
      localStorage.setItem("activeUsers", JSON.stringify(updatedActiveUsers));
      dispatch(setActiveUsers(updatedActiveUsers));
    }
  };

  const sort = (activeUsers) => {
    activeUsers.forEach((users) => {
      if (users.id === user.id) {
        setColored(true);
        return;
      }
    });
  };

  useEffect(() => {
    if (!activeUsers.length) {
      setColored(false);
    }
    sort(activeUsers);
  });

  return (
    <span>
      <br></br>
      <input
        onChange={handleOnclick}
        type="radio"
        id={user.id}
        name={user.lastName}
        value="notActive"
        checked={!colored}
      ></input>

      <label>not active</label>

      <br></br>

      <input
        onChange={handleOnclick}
        type="radio"
        id={user.id}
        name={user.lastName}
        value="active"
        checked={colored}
      ></input>

      <label>active</label>
    </span>
  );
}

export default RadioButton;
