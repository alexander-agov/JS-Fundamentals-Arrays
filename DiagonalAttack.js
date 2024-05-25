function diagonal(matrixStrings) {
    const matrix = matrixStrings.map(row => row.split(' ').map(Number));
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        mainDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][n - 1 - i];
    }
    if (mainDiagonalSum !== secondaryDiagonalSum) {
        for (let row of matrixStrings) {
            console.log(row);
        }
        return;
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i !== j && i !== n - 1 - j) {
                matrix[i][j] = mainDiagonalSum;
            }
        }
    }
    for (let row of matrix) {
        console.log(row.join(' '));
    }
}
diagonal(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);
diagonal(['1 1 1',
    '1 1 1',
    '1 1 0']
);
