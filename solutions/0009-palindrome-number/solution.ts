function isPalindrome(x: number): boolean {
    const arrayOfChars = [...x.toString()];

    const original = arrayOfChars.join('');
    const reversed = arrayOfChars.reverse().join('');

    return original === reversed;
};
