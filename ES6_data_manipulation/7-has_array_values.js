function hasValuesFromArray(set, array) {
  const arraySet = new Set(array);
  console.log(arraySet);
  console.log(arraySet.isSubsetOf(set));
  return arraySet.isSubsetOf(set);
}

export default hasValuesFromArray;
