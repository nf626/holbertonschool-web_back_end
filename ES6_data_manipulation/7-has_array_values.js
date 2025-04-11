function hasValuesFromArray(set, array) {
  const arraySet = new Set(array);
  return arraySet.isSubsetOf(set);
}

export default hasValuesFromArray;
