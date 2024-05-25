function rotate(arr) { //from last to first
    let rotations = Number(arr[arr.length - 1]);
    let newArr = arr.slice(0, arr.length - 1);
    for (let i = 0; i < rotations; i++) {
        let first = newArr.pop();
        newArr.unshift(first);
    }
    console.log(newArr.join(" "));
}
rotate(['1', '2', '3', '4', '2']);
rotate(['Banana', 'Orange', 'Coconut', 'Apple', '15']);

// function rotate(arr) {   // from first to last
//     let rotations = Number(arr[arr.length - 1]);
//     let newArr = arr.slice(0, arr.length - 1);
//     for (let i = 0; i < rotations; i++) {
//         let first = newArr.shift();
//         newArr.push(first);
//     }
//     console.log(newArr.join(" "));
// }
// rotate(['1', '2', '3', '4', '2']);
// rotate(['Banana', 'Orange', 'Coconut', 'Apple', '15']);

