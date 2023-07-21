const arr = [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1];

let count = 0;
let found_zero = false;

for (let i = 0; i < arr.length; i++) {
  if (found_zero) {
    if (count > 0 && arr[i] == 0) {
      break;
    }
    if (arr[i] == 1) {
      count++;
    }
  }
  if (arr[i] == 0) {
    found_zero = true;
  }
}
console.log(count);