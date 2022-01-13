function RadioButton(props) {
  const handleOnclick = (isActive) => {
    if (props.colored) {
      props.setColored(false);
      let filteredActiveUsers = props.activeUsers.filter(
        (user) => user[2] !== props.user[2]
      );
      props.setStateOfParent(filteredActiveUsers);
    } else {
      props.setColored(true);
      props.activeUsers.push(props.user);
      props.setStateOfParent(props.activeUsers);
    }
  };

  return (
    <div>
      <input
        onClick={handleOnclick}
        type="radio"
        id={props.user[2]}
        name={props.user[2]}
        value="notActive"
        defaultChecked
      >
        {}
      </input>

      <label for={""}>not active</label>

      <br></br>

      <input
        onClick={handleOnclick}
        type="radio"
        id={props.user[2]}
        name={props.user[2]}
        value="active"
      ></input>

      <label for={""}>active</label>
    </div>
  );
}

export default RadioButton;
