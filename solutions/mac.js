const macValidator = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;

const checkMac = (mac) => {
  return mac.match(macValidator) ? true : false;
};

export default checkMac;
