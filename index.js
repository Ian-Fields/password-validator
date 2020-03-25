function validatePassword(valid) {
  if (passwordLength(valid) === true && passwordLowerCase(valid) === true && passwordUpperCase(valid) === true && passwordNumericValue(valid) === true && passwordSpecialCharacter(valid) === true) {
    return true
  }
  else {
    return false
  }
}
function passwordLength(valid) {
  if (valid.length >= 8) {
    return true
  }
  else {
    return false
  }
}
function passwordLowerCase(valid) {
  if (valid.match(/[a-z]/)) {
    return true
  }
  else {
    return false
  }
}
function passwordUpperCase(valid) {
  if (valid.match(/[A-Z]/)) {
    return true
  }
  else {
    return false
  }
}
function passwordNumericValue(valid) {
  if (valid.match(/[0-9]/)) {
    return true
  }
  else {
    return false
  }
}
function passwordSpecialCharacter(valid) {
  if (valid.match(/[!@#$%^&*(),.?"]/)) {
    return true
  }
  else {
    return false
  }
}

module.exports = validatePassword