function updateUniqueItems(myMap) {
  myMap.forEach((value, key) => {
    if (value === 1) {
      myMap.set(key, 100);
    }
  });
}

export default updateUniqueItems;
