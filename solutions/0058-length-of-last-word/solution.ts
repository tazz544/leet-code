function lengthOfLastWord(s: string): number {
    const temp = s.trim().split(' ');
    const lastWord = temp[temp.length - 1];
    
    return lastWord.length;
};
