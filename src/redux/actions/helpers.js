export const arrayToObjectWithIndex = array => {
  return array.reduce((prevObj, currValue) => {
    return { ...prevObj, [currValue.id]: currValue };
  }, {});
};
