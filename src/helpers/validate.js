const validate = (username, password) => {
  let errorMessage = '';

  //set errorMessage to depending on criteria from last to first
  if (password.includes(username.split('@')[0])) errorMessage = 'Cannot contain the username';
  if (password.length < 8) errorMessage = 'Password must be at least 8 characters long';
  if (!/[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]+/.test(password))
    errorMessage = 'Must contain at least 1 special Character';
  if (!/[0-9]+/.test(password)) errorMessage = 'Must contain at least 1 digit';
  if (!/[A-Z]+/.test(password)) errorMessage = 'Must contain at least 1 capital letter';
  if (!password) errorMessage = 'Password is required';
  if (!username.includes('@') && !username.indexOf('@') >= 0)
    errorMessage = 'Username must be a valid email';
  if (!username) errorMessage = 'Username is required';

  //this.state.errorMsg becomes errorMessage
  //isValidForm is true only when errorMessage is empty
  //After we set the state Send the value to the parent via props inside setState.
  return errorMessage;
};

export default validate;
