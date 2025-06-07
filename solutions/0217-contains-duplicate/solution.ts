function containsDuplicate(nums: number[]): boolean {
    const uniqueNumsArr = [...new Set(nums)];
    
    return nums.length !== uniqueNumsArr.length;
};
