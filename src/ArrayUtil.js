export function arrayMoveSelf(array, from, to) {
  const insertPosition = to < 0 ? array.length + to : to;
  array.splice(insertPosition, 0, array.splice(from, 1)[0]);
}

export function arrayMove(array, from, to) {
  const copied = array.slice();
  arrayMoveSelf(copied, from, to);
  return copied;
}

export function arrayRemoveSelf(array, index) {
  array.splice(index, 1);
}

export function arrayRemove(array, index) {
  const copied = array.slice();
  arrayRemoveSelf(copied, index);
  return copied;
}