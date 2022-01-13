import "./App.css";
import React from "react";
import EmployeesList from "./components/employees-list/employeesList.component";
import EmployeesBirthday from "./components/employees-birthday-list/employeesBirthdayList.component";

class App extends React.Component {
  constructor() {
    super();
    this.setStateOfParent.bind(this);
    this.state = {
      users: [],
      activeUsers: [],
    };
  }

  componentDidMount() {
    fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users")
      .then((response) => response.json())
      .then((usersNew) => this.setState({ users: usersNew }))
      .catch((error) => console.log("Error happened"));
  }

  setStateOfParent = (newActiveUser) => {
    this.setState({ activeUsers: newActiveUser });
  };

  render() {
    return (
      <div className="app">
        <EmployeesList
          users={this.state.users}
          activeUsers={this.state.activeUsers}
          setStateOfParent={this.setStateOfParent}
        />
        <hr className="vertical-hr"></hr>
        <EmployeesBirthday activeUsers={this.state.activeUsers} />
      </div>
    );
  }
}

export default App;
