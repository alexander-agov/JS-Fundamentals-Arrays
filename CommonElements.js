function common(arr1, arr2) {
    // for(let i = 0; i < arr1.length; i++){
    //     for(let j = 0; j < arr2.length; j++){
    //         if (arr1[i] === arr2[j]){
    //             console.log(arr1[i]);
    //         }
    //     }
    // }
    for (let str of arr1) {
        if (arr2.includes(str)) {
            console.log(str);
        }
    }
}
common(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);
common(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']
);