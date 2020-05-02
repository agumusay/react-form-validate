import React from "react";
import "./SignUp.scss";
import eye from "./eye1.gif";

class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
    isValidForm: false,
    errorMsg: "",
    show: "false",
  };

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validateForm = (username, password) => {
    // error is empty string
    let errorString = "";
    let user = this.state.username.split("@")[0];
    let userFinal = user.charAt(0).toUpperCase() + user.slice(1);

    //set error depending on criteria from last to first
    if (password.includes(username.split("@")[0])) errorString = "Cannot contain the username";
    if (password.length < 8) errorString = "Password must be at least 8 characters long";
    if (!/(?=[^!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]*[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~])/.test(password))
      errorString = "Must contain at least 1 special Character";
    if (!/([0-9]+)/g.test(password)) errorString = "Must contain at least 1 digit";
    if (!/([A-Z]+)/g.test(password)) errorString = "Must contain at least 1 capital letter";
    if (!password) errorString = "Password is required";
    if (!username.includes("@") && !username.indexOf("@") >= 0)
      errorString = "Username must be a valid email";
    if (!username) errorString = "Username is required";

    //this.state.errorMsg becomes errorString
    //isValidForm is true only when errorString is not empty
    //After we set the state Send the value to the parent via props .
    this.setState(
      {
        errorMsg: errorString,
        isValidForm: !errorString && true,
      },
      () => {
        if (this.props.validate) {
          this.props.validate(this.state.isValidForm, userFinal);
        }
      }
    );
  };

  signupClickHandler = (e) => {
    e.preventDefault();
    this.validateForm(this.state.username, this.state.password);
  };

  showClickHandler = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    return (
      <form action="" className="signup">
        <p className="signup-title">Sign up</p>
        <label htmlFor="username" className="signup-label">
          Username
          <input
            type="text"
            name="username"
            id="username"
            className="signup-input"
            onChange={this.onChangeHandler}
          />
        </label>
        <label htmlFor="password" className="signup-label">
          Password
          <input
            type={!this.state.show ? "text" : "password"}
            name="password"
            id="password"
            className="signup-input"
            onChange={this.onChangeHandler}
          />
          <img src={eye} alt="" className="signup-eye" onClick={this.showClickHandler} />
        </label>
        {this.state.errorMsg ? <p className="signup-error">{this.state.errorMsg}</p> : ""}
        <button className="signup-button" onClick={this.signupClickHandler}>
          SIGN UP
        </button>
      </form>
    );
  }
}

export default SignUp;
