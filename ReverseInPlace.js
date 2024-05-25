function place(arr) {
    for (let i = 0; i < parseInt(arr.length / 2); i++) {
        let firstElement = arr[i];
        let lastElement = arr[arr.length - 1 - i];
        arr[i] = lastElement;
        arr[arr.length - 1 - i] = firstElement;
    }
    console.log(arr.join(' '));
}
place(['a', 'b', 'c', 'd', 'e']);
place(['abc', 'def', 'hig', 'klm', 'nop']);
place(['33', '123', '0', 'dd']);