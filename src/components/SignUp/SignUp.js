import React from 'react';
import './SignUp.scss';
import validate from '../../helpers/validate';
import getUserNameFromEmail from '../../helpers/getNameFromEmail';

class SignUp extends React.Component {
  state = {
    email: '',
    password: '',
    isValidForm: false,
    errorMsg: '',
    show: 'false',
  };

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onClickHandler = (e) => {
    e.preventDefault();
    let error = validate(this.state.email, this.state.password);
    let username = getUserNameFromEmail(this.state.email);
    this.setState({
      errorMsg: error,
    });
    if (!error) return this.props.childCallback(username);
  };

  showPassword = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <form action="" className="signup" onSubmit={this.onClickHandler}>
        <p className="signup-title">Sign up</p>
        <label htmlFor="email" className="signup-label">
          Email
          <input
            type="text"
            name="email"
            id="email"
            className="signup-input"
            onChange={this.onChangeHandler}
          />
        </label>
        <label htmlFor="password" className="signup-label">
          Password
          <input
            type={!this.state.show ? 'text' : 'password'}
            name="password"
            id="password"
            className="signup-input"
            onChange={this.onChangeHandler}
          />
          <button type="button" className="signup-eye" onClick={this.showPassword}></button>
        </label>
        {this.state.errorMsg ? <p className="signup-error">{this.state.errorMsg}</p> : ''}
        <button className="signup-button">SIGN UP</button>
      </form>
    );
  }
}

export default SignUp;
