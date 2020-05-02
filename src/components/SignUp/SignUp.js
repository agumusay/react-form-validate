import React from "react";
import "./SignUp.scss";
import eye from "./eye1.gif";
import validate from "../../helpers/validate";

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

  signupClickHandler = (e) => {
    e.preventDefault();
    this.error = validate(this.state.username, this.state.password);
    let user = this.state.username.split("@")[0];
    let userUpperCase = user.charAt(0).toUpperCase() + user.slice(1);
    this.setState(
      {
        errorMsg: this.error,
        isValidForm: !this.error && true,
      },
      () => {
        if (this.props.validForm) {
          this.props.validForm(this.state.isValidForm, userUpperCase);
        }
      }
    );
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
