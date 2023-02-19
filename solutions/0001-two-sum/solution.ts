function twoSum(nums: number[], target: number): number[] {
    const result = nums.reduce((acc, xValue, xIndex) => {
        const numbersPair = [];

        nums.forEach((yValue, yIndex) => {
            if (xIndex === yIndex || numbersPair.length) {
                return;
            }

            if (xValue + yValue === target) {
                numbersPair[0] = xIndex;
                numbersPair[1] = yIndex;
            }
        });

        return numbersPair.length ? acc = numbersPair : acc;
    }, []).sort((a, b) => a - b);

    return result;
};
