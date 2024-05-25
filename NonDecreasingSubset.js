function non(arr) {
    //let arr1 = [];
    let current = Number.NEGATIVE_INFINITY;

    const arr1 = arr.filter(element => {
        if (element >= current) {
            current = element;
            return true;
        }
        return false;
    });


    // for(let i=0; i<arr.length; i++){
    //     if(arr[i]>=current){
    // arr1.push(arr[i]);
    // current = arr[i];
    // }}
    console.log(arr1.join(" "));
}
non([1, 3, 8, 4, 10, 12, 3, 2, 24]);
non([1, 2, 3, 4]);
non([20, 3, 2, 15, 6, 1]);
