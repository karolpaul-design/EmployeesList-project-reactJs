import { useState } from "react";
import RadioButton from "../radioButton/radioButton.component";

function User({ userObj }) {
  const [colored, setColored] = useState(false);

  const styles = {
    color: colored ? "#fb00ff" : "#0ccac4",
  };

  return (
    <p>
      <span style={styles}>{`${userObj.lastName} ${userObj.firstName}`}</span>
      <RadioButton
        setColored={setColored}
        user={userObj}
        colored={colored}
      ></RadioButton>
    </p>
  );
}

export default User;
