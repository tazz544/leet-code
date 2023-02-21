function runningSum(nums: number[]): number[] {
    return nums.map((num, index) => nums.slice(0, index).reduce((acc, cur) => acc + cur, num));
};
