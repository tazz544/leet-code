function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    if (!nums1.length && !nums2.length) {
        return 0;
    }

    const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
    const isLengthOdd = Boolean(mergedArray.length % 2);

    const mathCenter = mergedArray.length / 2;
    const midIndex = Math.ceil(mathCenter);

    const minValue = mergedArray[midIndex - 1];
    const maxValue = mergedArray[midIndex];

    console.log({
        mergedArray,
        mathCenter,
        midIndex,
        minValue,
        maxValue
    });

    return isLengthOdd ? minValue : (maxValue + minValue) / 2;
};
