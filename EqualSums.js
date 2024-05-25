function equal(arr) {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let j = i - 1; j >= 0; j--) {
            leftSum += arr[j];
        }
        for (let j = i + 1; j < arr.length; j++) {
            rightSum += arr[j];
        }
        if (leftSum == rightSum) {
            index = i;
            break;
        }
    }
    if (index != -1) {
        console.log(index);
    } else {
        console.log("no");
    }
}
equal([1, 2, 3, 3]);
equal([1, 2]);
equal([1]);
equal([1, 2, 3]);
equal([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);