function isValid(s: string): boolean {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']',
    }

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];

        if (map[currentChar]) {
            stack.push(currentChar);
        } else if (Object.values(map).includes(currentChar)) {
            const last = stack.pop();

            if (map[last] !== currentChar) {
                return false;
            }
        }
    }

    return stack.length === 0;
};
