export function leftShiftChars(prevChars, char) {
    for (let i = 0; i < prevChars.length - 1; i++)
        prevChars[i] = prevChars[i + 1];
    prevChars[prevChars.length - 1] = char;
}
export function isHuffmanTree(item) {
    if (Array.isArray(item) || typeof item === 'string' || item instanceof String)
        return true;
    return false;
}
export function isHuffmanLeaf(huffmanTree) {
    if (typeof huffmanTree === 'string' || huffmanTree instanceof String)
        return true;
    return false;
}
//# sourceMappingURL=util.js.map