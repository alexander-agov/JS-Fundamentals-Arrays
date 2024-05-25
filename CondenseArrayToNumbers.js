function condense(arr) {
    let num = [];
    while (arr.length > 1) {
        let result = 0;
        for (let i = 0; i < arr.length - 1; i++) {
            result = arr[i] + arr[i + 1];
            num.push(result);
        }
        arr = num;
        num = [];
    }
    if (arr.length == 1) {
        console.log(arr[0]);
    }
}
condense([2, 10, 3]);
condense([5, 0, 4, 1, 2]);
condense([1]);