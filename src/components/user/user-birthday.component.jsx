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
  const date = new Date(Date.parse(props.userArr[3])).getDate();
  const month = months[new Date(Date.parse(props.userArr[3])).getMonth()];
  const year = new Date(Date.parse(props.userArr[3])).getFullYear();

  return (
    <li>
      {props.userArr[0]} {props.userArr[1]} - {date} {month}, {year} year
    </li>
  );
}

export default UserBirthday;
