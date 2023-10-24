const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

function romanToInt(s: string): number {
    const sArray = [...s];

    return sArray.reduce((acc, curr, index) => {
        const nextNumber = sArray[index + 1];
        const isNextGreater = nextNumber ? roman[nextNumber] > roman[curr] : false;
        const romanValue = roman[curr];

        if (isNextGreater) {
            return acc -= romanValue;
        }

        return acc += romanValue;
    }, 0);
};
