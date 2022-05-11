function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;

  while(low <= high) {
      let mid = Math.floor((low + high) / 2);
      console.log('guessing', mid);
      const guess = list[mid];
      if (guess === item) {
        console.log('found in position ', mid);
        return mid;
      }
      if (guess > item) high = mid - 1;
      else low = mid + 1
  }
  return null;
}

// should take a max of 4 guesses
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const result = binarySearch(list, 3);
