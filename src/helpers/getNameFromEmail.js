const getNameFromEmail = (email) => {
  let userName = email.split("@")[0];
  let firstLetterToUpperCase = userName.charAt(0).toUpperCase() + userName.slice(1);
  return firstLetterToUpperCase;
};

export default getNameFromEmail;
