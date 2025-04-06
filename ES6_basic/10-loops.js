export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  for (const value of array) {
    const a = array;
    a[idx] = appendString + value;
    idx += 1;
  }

  return array;
}
