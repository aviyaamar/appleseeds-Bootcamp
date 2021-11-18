function getSumOfEven(arr) {
    return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}
console.log(getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// line 2
// chrome dev tool
// it beacome to NaN beacuse the accessing to index this is bring worng index.
//length of the array is 10- and will be access to arr[10], this is NaN therfor all the exspression is NaN
