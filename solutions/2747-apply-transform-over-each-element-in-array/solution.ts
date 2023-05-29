function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const newArr = [];

    for (const [i, n] of arr.entries()) {
        newArr.push(fn(n, i));
    }

    return newArr;
};
