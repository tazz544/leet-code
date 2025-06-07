function isPalindrome(s: string): boolean {
    const parsedString = s.replace(/[^a-zA-Z0-9]/g, "").replace(/ /g,'').toLocaleLowerCase();
    let left = 0;
    let right = parsedString.length - 1;

    if (parsedString.length === 1) {
        return true;
    }

    while (left < right) {
        const leftChar = parsedString[left];
        const rightChar = parsedString[right];

        if (leftChar !== rightChar) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};
