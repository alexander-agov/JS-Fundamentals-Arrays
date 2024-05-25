function sum(arr) {
    for (i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    let sum = 0;
    for (let num of arr) {
        if (num % 2 == 0) {
            sum += num
        }
    }
    console.log(sum);
}
sum(['1', '2', '3', '4', '5', '6']);
sum(['3', '5', '7', '9']);
sum(['2', '4', '6', '8', '10']);