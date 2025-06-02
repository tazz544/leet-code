enum TriangleType {
    EQUILATERAL = 'equilateral',
    ISOSCELES = 'isosceles',
    SCALENE = 'scalene',
    NONE = 'none'
}

function triangleType(nums: number[]): string {
    const uniqueSideValues = [...new Set(nums.sort((a, b) => a - b))];
    const isPossibleTriangle = nums[0] + nums[1] > nums[2];
    
    if (!isPossibleTriangle) {
        return TriangleType.NONE;
    }
    if (uniqueSideValues.length === 1) {
        return TriangleType.EQUILATERAL;
    } 
    if (uniqueSideValues.length === 2) {
        return TriangleType.ISOSCELES;
    }

    return TriangleType.SCALENE;
};
