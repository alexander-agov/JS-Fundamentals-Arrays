function sequence(arr) {
    let count = 0;
    let bestCount = 0;
    let str = "";
    for (let i = arr.length - 1; i >= 0; i--) {
        count = 1;
        for (let j = i - 1; j >= 0; j--) {
            if (arr[i] == arr[j]) {
                count++;
                if (bestCount <= count) {
                    bestCount = count;
                    str = arr[i];
                }
            } else {
                break;
            }
        }
    }
    console.log(`${str} `.repeat(`${bestCount}`));
}
sequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
sequence([1, 1, 1, 2, 3, 1, 3, 3]);
sequence([4, 4, 4, 4]);
sequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);