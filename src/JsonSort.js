
export const SortOrderEnum = {
  none: 0,
  asc: 1,
  desc: 2,
  fromString: (keyword) => {
    if (keyword === undefined) { return SortOrderEnum.none; }
    const order = keyword.toLowerCase();
    return order === 'asc' ? SortOrderEnum.asc :
      order === 'desc' ? SortOrderEnum.desc : SortOrderEnum.none;
  }
}

export function makeAscMethodAtJsonList(key) {
  return (a, b) => {
    if (a[key] < b[key]) {
      return -1;
    }
    return a[key] > b[key] ? 1 : 0;
  };
}

export function makeDescMethodAtJsonList(key) {
  return (a, b) => {
    if (a[key] > b[key]) {
      return -1;
    }
    return a[key] < b[key] ? 1 : 0;
  };
}

export function sortJsonArray(jsonArray, key, sortOrder) {
  if (sortOrder === SortOrderEnum.none) { return jsonArray; }

  const sortMethod = sortOrder === SortOrderEnum.asc 
    ? makeAscMethodAtJsonList(key)
    : makeDescMethodAtJsonList(key);

  return jsonArray.slice().sort(sortMethod);
}
