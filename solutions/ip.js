const ipValidator = /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b/;

const checkIP = (ip) => {
  return ip.match(ipValidator) ? true : false;
};

export default checkIP;
