const visaValidator = /^4[0-9]{12}(?:[0-9]{3})?$/;

const checkVisa = (cardNum) => {
  return cardNum.match(visaValidator) ? true : false;
};
export default checkVisa;
