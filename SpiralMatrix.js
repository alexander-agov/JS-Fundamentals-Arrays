function spiral(rows, cols) {
    let matrix = new Array(rows).fill().map(() => new Array(cols).fill(0));
    let num = 1;
    let startRow = 0,
        endRow = rows - 1,
        startCol = 0,
        endCol = cols - 1;
    while (startRow <= endRow && startCol <= endCol) {
        for (let i = startCol; i <= endCol; i++) {
            matrix[startRow][i] = num++;
        }
        startRow++;
        for (let i = startRow; i <= endRow; i++) {
            matrix[i][endCol] = num++;
        }
        endCol--;
        if (startRow <= endRow) {
            for (let i = endCol; i >= startCol; i--) {
                matrix[endRow][i] = num++;
            }
            endRow--;
        }
        if (startCol <= endCol) {
            for (let i = endRow; i >= startRow; i--) {
                matrix[i][startCol] = num++;
            }
            startCol++;
        }
    }
    for (let i = 0; i < rows; i++) {
        console.log(matrix[i].join(' '));
    }
}
spiral(5, 5);
spiral(3, 3);