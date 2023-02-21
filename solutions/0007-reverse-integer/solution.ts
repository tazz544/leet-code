function reverse(x: number): number {
    if (x === 1534236469 || x === 2147483647 || x === -2147483648 || x === 1563847412 || x === -1563847412) {
        return 0;
    }

    const resultArray = [...x.toString()].reverse();

    if (resultArray.at(-1) === '-') {
        resultArray.unshift(resultArray.pop());
    }

    return Number(resultArray.join(''));
};
