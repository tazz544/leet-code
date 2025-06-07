function twoSum(numbers: number[], target: number): number[] {
    let leftIndex = 0;
    let rightIndex = numbers.length - 1;

    while (leftIndex < rightIndex) {
        const leftNumber = numbers[leftIndex];
        const rightNumber = numbers[rightIndex];
        const sum = leftNumber + rightNumber;

        console.log({
            leftNumber,
            rightNumber, sum
        });
        
        if (sum === target) {
            console.log('FOUND!');
            console.log({
                leftIndex, rightIndex
            });
            return [leftIndex + 1, rightIndex + 1];
        }

        if (sum <= target) {
            leftIndex++;
        } else {
            rightIndex--;
        }
    }

    return [];
};
