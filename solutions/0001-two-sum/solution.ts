function twoSum(nums: number[], target: number): number[] {
    const temp = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const iNum = nums[i];
        const neededNum = target - iNum;

        if (temp.has(neededNum)) {
            return [temp.get(neededNum), i];
        }


        temp.set(iNum, i);
    }

    return [];
};
