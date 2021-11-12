import checkIP from "./ip";
import checkMac from "./mac";
import checkVisa from "./visa";

const checker = {
  rules: {
    checkIP,
    checkMac,
    checkVisa,
  },
  validate(str, type) {
    if (type === "visa") {
      return this.rules.checkVisa(str);
    } else if (type === "mac") {
      return this.rules.checkMac(str);
    } else if (type === "ip") {
      return this.rules.checkIP(str);
    }
  },
};

export default checker;
