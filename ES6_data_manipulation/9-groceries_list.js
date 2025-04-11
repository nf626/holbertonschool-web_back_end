function groceriesList() {
  const kv = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  const groceriesMap = new Map(kv);
  return groceriesMap;
}

export default groceriesList;
