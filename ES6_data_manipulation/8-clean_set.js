function cleanSet(set, startString) {
  if (typeof startString !== 'string') {
    return '';
  }

  const filterSet = [...set].filter((value) => (typeof value === 'string') && value.startsWith(startString));

  const mapSet = filterSet.map((value) => value.slice(startString.length));

  return mapSet.join('-');
}

export default cleanSet;
