function cleanSet(set, startString) {
  const filterSet = [...set].filter((value) => value.startsWith(startString));

  const mapSet = filterSet.map((value) => value.slice(startString.length));

  return mapSet.join('-');
}

export default cleanSet;
