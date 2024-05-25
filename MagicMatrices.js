function magic(arr) {
    let sum = 0;
    let sumArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j of arr[i]) {
            sum += j;
        }
        sumArr.push(sum);
        sum = 0;
    }
    for (let col = 0; col < arr.length; col++) {
        for (let row = 0; row < arr.length; row++) {
            sum += arr[row][col];
        }
        sumArr.push(sum);
        sum = 0;
    }
    let bool = true;
    for (let k of sumArr) {
        if (k != sumArr[0]) {
            bool = false
        }
    }
    console.log(bool);
}
magic([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
);
magic([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
);
magic([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
);