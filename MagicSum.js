function magic(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == num) {
                console.log(`${arr[i]} ${arr[j]}`);
            }
        }
    }
}
magic([1, 7, 6, 2, 19, 23],
    8
);
magic([14, 20, 60, 13, 7, 19, 8],
    27
);
magic([1, 2, 3, 4, 5, 6],
    6
);