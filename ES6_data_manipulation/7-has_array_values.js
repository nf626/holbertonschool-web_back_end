function hasValuesFromArray(set, array) {
  const check = array.every((value) => set.has(value));
  return check;
}

export default hasValuesFromArray;
