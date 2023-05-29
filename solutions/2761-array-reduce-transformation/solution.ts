type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let acc: number = init;

    for(const current of nums) {
        acc = fn(acc, current);
    }

    return acc;
};
