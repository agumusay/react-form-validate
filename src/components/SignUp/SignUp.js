import React from 'react';
import './SignUp.scss';
import eye from './eye1.gif';
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
    this.error = validate(this.state.email, this.state.password);
    this.username = getUserNameFromEmail(this.state.email);
    this.setState(
      {
        errorMsg: this.error,
        isValidForm: !this.error && true,
      },
      () => {
        this.props.childCallback(this.state.isValidForm, this.username);
      },
    );
  };

  showPassword = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <form action="" className="signup">
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
          <img src={eye} alt="" className="signup-eye" onClick={this.showPassword} />
        </label>
        {this.state.errorMsg ? <p className="signup-error">{this.state.errorMsg}</p> : ''}
        <button className="signup-button" onClick={this.onClickHandler}>
          SIGN UP
        </button>
      </form>
    );
  }
}

export default SignUp;
