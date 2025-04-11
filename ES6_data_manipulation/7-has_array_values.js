function hasValuesFromArray(set, array) {
  const arraySet = new Set(array);
  return set.isSupersetOf(arraySet);
}

export default hasValuesFromArray;
