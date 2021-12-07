function funWithArr(array) {
    this.myArray = array;
}

funWithArr.prototype.printArr = function () {
    console.log(this.myArray);
}
funWithArr.prototype.filter = function () {
    let even = this.myArray.filter(x => {
        return x % 2 === 0;
    })
    return even;
}
funWithArr.prototype.find = function () {
    let even = this.myArray.find(x => {
        return x > 20;
    })
    return even;
}

funWithArr.prototype.reduce = function () {
    return this.myArray.reduce((total, amount) => {
        return total + amount
    })

}


let FilterFind = [1, 2, 3, 4, 5, 6, 7, 10, -3, -20, 22, 35, -3]

let printArr = new funWithArr(FilterFind)
console.log(printArr.printArr());

let filterArr = new funWithArr(FilterFind)
console.log(filterArr.filter())

let age = new funWithArr(FilterFind)
console.log(age.find());

let sum = new funWithArr(filterArr);
console.log(sum.reduce());