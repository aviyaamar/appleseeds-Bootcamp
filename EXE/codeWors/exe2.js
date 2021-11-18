function opposite(number) {
    let result;
    // if (!isNaN(Math.sign(number))) {
      result = number * (-1);
    //}
    return result;
  }
  console.log(opposite(200));

  function opposite1(number) {
    return(-number);
  }
  console.log(opposite1(-200));