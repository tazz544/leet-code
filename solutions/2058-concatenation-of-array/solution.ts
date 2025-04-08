function getConcatenation(nums: number[]): number[] {
    const newArr = [];
    let k = nums.length;

    for (let i = 0; i < nums.length; i++) {
        newArr[i] = nums[i];
        newArr[k] = nums[i];
        k++;
    }

    return newArr;  
};
