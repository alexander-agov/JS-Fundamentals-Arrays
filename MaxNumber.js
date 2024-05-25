function max(arr) {
    let isTop = true;
    let newArr = "";
    for (let i = 0; i < arr.length; i++) {
        isTop = true;
        for (let j = i + 1; j <= arr.length; j++) {
            if (arr[i] <= arr[j]) {
                isTop = false;
                break;
            }
        }
        if (isTop) {
            newArr += arr[i] + " "
        }
    }
    console.log(newArr.trim());
}
max([1, 4, 3, 2]);
max([14, 24, 3, 19, 15, 17]);
max([41, 41, 34, 20]);
max([27, 19, 42, 2, 13, 45, 48]);