function twoSum(nums: number[], target: number): number[] {
    const numsMap = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const rest = target - num;

        if (numsMap.has(rest)) {
            return [i, numsMap.get(rest)];
        }

        numsMap.set(num, i);
    }

    return [];
};
