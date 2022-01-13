import { useState } from "react";
import RadioButton from "../radioButton/radioButton.component";

function User(props) {
  const [colored, setColored] = useState(false);

  const styles = {
    color: colored ? "blue" : "black",
  };

  return (
    <p>
      <span style={styles}>{`${props.userArr[0]} ${props.userArr[1]}`}</span>

      <RadioButton
        setColored={setColored}
        user={props.userArr}
        activeUsers={props.activeUsers}
        colored={colored}
        setStateOfParent={props.setStateOfParent}
      ></RadioButton>
    </p>
  );
}

export default User;
