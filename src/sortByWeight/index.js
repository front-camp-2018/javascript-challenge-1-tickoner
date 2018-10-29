/* eslint-disable-next-line */
export const sortByWeight = arr => {
  const stringToSum = elem => {
    return elem.split('').map(elem => +elem).reduce((sum, current) => sum + current);
  };

  return arr.sort((a, b) => {
    return stringToSum(a) - stringToSum(b);
  });
};
