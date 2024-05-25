function rotation(arr, rot) {
    for (let i = 0; i < rot; i++) {
        let firstElement = arr[0];
        for (let j = 0; j < arr.length; j++) {
            arr[j] = arr[j + 1];
        }
        arr[arr.length - 1] = firstElement;
    }
    console.log(arr.join(" "));
}
rotation([51, 47, 32, 61, 21], 2);
//rotation([32, 21, 61, 1], 4);
//rotation([2, 4, 15, 31], 5);