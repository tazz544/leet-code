function groupAnagrams(strs: string[]): string[][] {
    const groupMap = {};

    for (let i = 0; i < strs.length; i++) {
        const currentString = strs[i];
        const sorted = [...currentString].sort().join('');

        if (groupMap[sorted]) {
            groupMap[sorted].push(currentString);
        } else {
            groupMap[sorted] = [currentString];
        }
    }

    return Object.values(groupMap);
};
