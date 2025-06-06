function strStr(haystack: string, needle: string): number {
    const haystackArr = [...haystack];
    const needleArr = [...needle];

    const expandToRight = (start: number): number => {
        let result = start;
        let i = start;
        let j = 0;

        while (j <= needleArr.length - 1 && i <= haystackArr.length - 1) {
            const haystackChar = haystackArr[i];
            const needleChar = needleArr[j];

            if (haystackChar !== needleChar) {
                return -1;
            }
            if (j === needleArr.length - 1 && result >= 0) {
                return result;
            }
            if (haystackChar === needleChar) {
                result = start;
                j++;
                i++;
            }
        }
    }

    for (let i = 0; i <= haystackArr.length - 1; i++) {
        const result = expandToRight(i);

        if (result >= 0) {
            return result;
        }
    }

    return -1;
};
