function UserBirthday(props) {
  const months = [
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
  const date = new Date(Date.parse(props.userObj.dob)).getDate();
  const month = months[new Date(Date.parse(props.userObj.dob)).getMonth()];
  const year = new Date(Date.parse(props.userObj.dob)).getFullYear();

  return (
    <li>
      {props.userObj.lastName} {props.userObj.firstName} - {date} {month},{" "}
      {year} year
    </li>
  );
}

export default UserBirthday;
