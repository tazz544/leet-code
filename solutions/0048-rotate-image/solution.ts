function rotate(matrix: number[][]): void {
    const newMatrix = Array.from(Array(matrix.length)).map(() => []);

    matrix.reverse().forEach((row) => {
        row.forEach((value, valueIndex) => newMatrix[valueIndex].push(value));
    });
    matrix.forEach((row, rowIndex) => matrix[rowIndex] = newMatrix[rowIndex]);
};
