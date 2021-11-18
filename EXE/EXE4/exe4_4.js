const sevenBoom = function (n) {
    for (let i = 0; i < n; i++) {
        let isSeven = String(i).includes('7');
        if (isSeven && i % 7 == 0) {
            console.log('BOOM BOOM');
        }
        else if (i % 7 == 0) {
            console.log('BOOM');
        }
        else {
            console.log(i);
        }
    }
};

console.log(sevenBoom(100));

 