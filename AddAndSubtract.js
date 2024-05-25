function add(arr1) {
    let sumArr1 = 0;
    let sumArr2 = 0;
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        sumArr1 += arr1[i];
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] % 2 == 0) {
            arr1[i] += i;
        } else {
            arr1[i] -= i;
        }
        newArr.push(arr1[i]);
    }
    for (let i = 0; i < newArr.length; i++) {
        sumArr2 += newArr[i];
    }
    console.log(newArr);
    console.log(sumArr1);
    console.log(sumArr2);
}
add([5, 15, 23, 56, 35]);
add([-5, 11, 3, 0, 2]);