export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line

export const numberRegex = /^[0-9]*$/;

export const phoneNumberRegex = /^\+?[0-9]*$/;

export const validateRUT = rut => {
  try {
    rut = rut.split('.').join('');
    rut = rut.split('-').join('');

    if (rut.length < 8 || rut.length > 9) return false;

    let s =
      parseInt(rut[rut.length - 2], 10) * 2 +
      parseInt(rut[rut.length - 3], 10) * 3 +
      parseInt(rut[rut.length - 4], 10) * 4 +
      parseInt(rut[rut.length - 5], 10) * 5 +
      parseInt(rut[rut.length - 6], 10) * 6 +
      parseInt(rut[rut.length - 7], 10) * 7 +
      parseInt(rut[rut.length - 8], 10) * 2;

    if (rut.length === 9) s += parseInt(rut[rut.length - 9], 10) * 3;

    const char = 11 - s % 11;

    if (char === 11) {
      return rut[rut.length - 1] === '0';
    } else if (char === 10) {
      return rut[rut.length - 1].toLowerCase() === 'k';
    }
    return rut[rut.length - 1] === char.toString();
  } catch (err) {
    return false;
  }
};

export const required = errorMessage => val =>
  val ? (!val.trim || (val.trim && val.trim().length !== 0) ? undefined : errorMessage) : errorMessage;

export const minLength = (minimumLength, errorMessage) => val =>
  val ? (val.length >= minimumLength ? undefined : errorMessage) : undefined;

export const maxLength = (maximumLength, errorMessage) => val =>
  val ? (val.length <= maximumLength ? undefined : errorMessage) : undefined;

export const pattern = (patternRegex, errorMessage) => val =>
  val ? (patternRegex.test(val) ? undefined : errorMessage) : undefined;

export const email = errorMessage => exports.pattern(emailRegex, errorMessage);

export const number = errorMessage => exports.pattern(numberRegex, errorMessage);

export const phoneNumber = errorMessage => exports.pattern(phoneNumberRegex, errorMessage);

export const rut = errorMessage => val => (val && validateRUT(val) ? undefined : errorMessage);

export const samePassword = errorMessage => (pass, repass) => (pass === repass ? undefined : errorMessage);
