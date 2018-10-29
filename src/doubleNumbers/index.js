/* eslint-disable-next-line */
export const doubleNum = num => {
  const numToStr = num.toString();

  const stringToParts = string => {
    return [ string.substring(0, string.length / 2 | 0), string.substring( string.length / 2 | 0) ];
  };

  if (Number(stringToParts(numToStr)[0]) === Number(stringToParts(numToStr)[1])) {
    return num;
  } else {
    return num * 2;
  }
};
