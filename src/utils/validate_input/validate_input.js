export const validate_input = (email, password, confirm_password) => {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (!reg.test(email)) {
    return "INVALID Email";
  } else if (password.length < 8) {
    return "Password length should be greater than 7";
  } else if (password !== confirm_password) {
    return "PASSWORD AND CONFIRM PASSWORD DOES NOT MATCH";
  }

  return "OK";
};
