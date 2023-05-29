function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
    const newArray = [];

    for (const [i, n] of arr.entries()) {
        if (fn(n, i)) {
            newArray.push(n);
        }
    }

    return newArray;
};
