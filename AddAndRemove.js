function add(arr) {
    let num = 1;
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "add") {
            arr1.push(num);
            num++;
        } else {
            arr1.pop(arr[i]);
            num++
        }
    }
    if (arr1.length !== 0) {
        console.log(arr1.join(" "));
    } else {
        console.log("Empty");
    }
}
add(['add', 'add', 'add', 'add']);
add(['add', 'add', 'remove', 'add', 'add']);
add(['remove', 'remove', 'remove']);