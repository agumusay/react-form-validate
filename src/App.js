import React from "react";
import "./App.scss";
import SignUp from "./components/SignUp/SignUp";
import Message from "./components/message/message";

class App extends React.Component {
  state = { success: false, username: "" };
  isFormValid = (valid, userFromChild) => {
    this.setState({
      success: valid,
      username: userFromChild,
    });
  };
  render() {
    return (
      <div className="App">
        {!this.state.success ? (
          <SignUp validForm={this.isFormValid} />
        ) : (
          <Message user={this.state.username} />
        )}
      </div>
    );
  }
}

export default App;
