function getAmountIntRec(int, counter) {
  if (typeof int !== 'number') {
    throw new Error('Enter int');
  }

  counter = counter || 0;
  if (int < 0) {
    int = int * -1;
  }

  if (int === 0) {
    return counter;
  }
  int = parseInt(int / 10);
  return getAmountIntRec(int, ++counter)
}
