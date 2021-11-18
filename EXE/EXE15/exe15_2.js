function findSmallest(a, b, c) {
  if (a > c && b > c) {
      return c;
  } else if (a > b && c > b) {
      return b;
  } else {
      return a;
  }
}
console.log(findSmallest(52, 66, 2));

// line 10, and problem with the if statment
//  the name of dunction is not the same , and the condiotion it worng
// vs code debugger
//