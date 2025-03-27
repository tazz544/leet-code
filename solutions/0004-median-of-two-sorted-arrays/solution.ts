function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const joined = [...nums1, ...nums2].sort((a, b) => a - b);
    const centerIndex = (joined.length - 1) / 2;
    const isCenterIndexWhole = Number.isInteger(centerIndex); 

    if (isCenterIndexWhole) {
        return joined[centerIndex];
    } else {
        const prev = joined[Math.floor(centerIndex)];
        const next = joined[Math.ceil(centerIndex)];

        return (prev + next) / 2;
    }
};
