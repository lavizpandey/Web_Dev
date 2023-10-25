export const arrayRemove = (arr, item) => {
  const i = arr.indexOf(item);
  if (i === -1) {
    return arr;
  }
  const result = arr.slice();
  result.splice(i, 1);
  return result;
};
