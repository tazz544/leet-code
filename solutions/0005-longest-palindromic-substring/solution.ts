function longestPalindrome(s: string): string {
    if (s.length < 1) return "";

    let start = 0;
    let end = 0;

    const expandAroundCenter = (left: number, right: number): void => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        if (right - left - 1 > end - start) {
            start = left + 1;
            end = right - 1;
        }
    };

    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i);       // odd length
        expandAroundCenter(i, i + 1);   // even length
    }

    return s.substring(start, end + 1);
}
