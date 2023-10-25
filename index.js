export const arrayRemove = (arr, item) => {
  const i = arr.indexOf(item);
  if (i === -1) {
    return arr;
  }
  const result = arr.slice();
  result.splice(i, 1);
  return result;
};

export const hasDuplicateValues = (array, key) => {
  const nameSet = new Set();

  for (const obj of array) {
    if (nameSet.has(obj[key])) {
      return true; // Found a duplicate name
    }
    nameSet.add(obj[key]);
  }

  return false; // No duplicate names found
};
