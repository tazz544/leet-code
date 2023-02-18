function singleNumber(nums: number[]): number {
    return nums.find((x) => nums.filter((y) => x === y).length === 1);
};
