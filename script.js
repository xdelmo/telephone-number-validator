function telephoneCheck(str) {
  let regExp = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;

  return regExp.test(str);
}
