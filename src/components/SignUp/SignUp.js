import React from "react";
import "./SignUp.scss";
import eye from "./eye1.gif";

class SignUp extends React.Component {
  state = {};

  onChangeHandler = (e) => {
    this.setState({});
  };

  addWord = (e) => {
    e.preventDefault();
    this.setState({});
  };

  showMessage = (e) => {
    e.preventDefault();
    this.setState({});
  };

  render() {
    return (
      <form action="" className="signup">
        <p className="signup-title">Sign up</p>
        <label htmlFor="username" className="signup-label">
          Username
          <input type="text" name="username" id="username" className="signup-input" />
        </label>
        <label htmlFor="password" className="signup-label">
          Password
          <input type="password" name="password" id="password" className="signup-input" />
          <img src={eye} alt="" className="signup-eye" />
        </label>
        {<p className="signup-error">Error Wil Come here</p>}
        <button className="signup-button" onClick={this.showMessage}>
          SIGN UP
        </button>
      </form>
    );
  }
}

export default SignUp;
