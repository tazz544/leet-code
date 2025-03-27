function lengthOfLongestSubstring(s: string): number {
    let temp = [];
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const existingCharIndex = temp.indexOf(char);

        if (existingCharIndex >= 0) {
            temp = temp.slice(existingCharIndex + 1);
        }

        temp.push(char);
        maxLength = Math.max(maxLength, temp.length);
    }

    return maxLength;
};
