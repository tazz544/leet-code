function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const temp = new Map<string, number>();
    for (let i = 0; i < t.length; i++) {
        const tChar = t[i];

        if (temp.has(tChar)) {
            const charCount = temp.get(tChar);
            temp.set(tChar, charCount + 1);
        } else {
            temp.set(tChar, 1);
        }
    }

    for (let i = 0; i < s.length; i++) {
        const iChar = s[i];

        if (!temp.get(iChar)) {
            return false;
        }

        const charCounter = temp.get(iChar);
        const newCharCounter = charCounter - 1;

        if (newCharCounter < 0) {
            return false;
        }

        temp.set(iChar, newCharCounter);
    }

    return true;
};
