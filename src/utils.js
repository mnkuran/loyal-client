function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  var re = /^[0-9]*$/;
  return re.test(String(phone).toLowerCase());
}

export { validateEmail, validatePhone };
