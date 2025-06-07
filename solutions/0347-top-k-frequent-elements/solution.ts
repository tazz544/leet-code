function topKFrequent(nums: number[], k: number): number[] {
    const counterMap = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i];

        if (counterMap.has(currentNumber)) {
            const numberCounter = counterMap.get(currentNumber);
            counterMap.set(currentNumber, numberCounter + 1);
        } else {
            counterMap.set(currentNumber, 1);
        }
    }

    const sorted = Array.from(counterMap).sort(([_aKey, aValue], [_bKey, bValue]) => bValue - aValue);
    const result = [];

    for (let i = 0; i < k; i++) {
        const [key, _value] = sorted[i];
        result.push(key);
    }

    return result;
};
