export function normalizeFieldIndex(index: number, length: number) {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
}

export function moveFieldIndex(current: number, direction: -1 | 1, length: number) {
  return normalizeFieldIndex(current + direction, length);
}
