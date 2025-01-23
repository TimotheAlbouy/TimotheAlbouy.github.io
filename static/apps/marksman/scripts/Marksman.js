import { leftShiftChars, isHuffmanTree, isHuffmanLeaf } from "./util.js";
export default class Marksman {
    constructor(model) {
        this.matrix = model.matrix;
        this.delimiterChar = model.delimiter;
        this.ngramVal = this.getNgramVal();
    }
    lookup(name, idSize = 128) {
        let idBits = [];
        let prevChars = Array(this.ngramVal - 1).fill(this.delimiterChar);
        for (let i = 0; i < name.length; i++) {
            let char = name.charAt(i);
            let huffmanTree = this.getHuffmanTree(prevChars);
            idBits = idBits.concat(this.getBitsOfChar(huffmanTree, char));
            leftShiftChars(prevChars, char);
            if (char == this.delimiterChar)
                prevChars = Array(this.ngramVal - 1).fill(this.delimiterChar);
        }
        idBits = idBits.slice(0, idSize);
        return idBits;
    }
    reverseLookup(idBits) {
        let name = "";
        let prevChars = Array(this.ngramVal - 1).fill(this.delimiterChar);
        let huffmanTree = this.getHuffmanTree(prevChars);
        let i = 0;
        while (i < idBits.length) {
            if (isHuffmanLeaf(huffmanTree)) {
                let char = huffmanTree;
                name += char;
                if (char == this.delimiterChar)
                    prevChars = Array(this.ngramVal - 1).fill(this.delimiterChar);
                else
                    leftShiftChars(prevChars, char);
                huffmanTree = this.getHuffmanTree(prevChars);
            }
            else {
                let bit = idBits[i];
                huffmanTree = huffmanTree[bit];
                if (i == idBits.length - 1) {
                    while (!isHuffmanLeaf(huffmanTree))
                        huffmanTree = huffmanTree[0];
                    let char = huffmanTree;
                    name += char;
                }
                i += 1;
            }
        }
        return name;
    }
    getHuffmanTree(prevChars) {
        let item = this.matrix;
        for (let char of prevChars) {
            if (!item || isHuffmanTree(item))
                return "";
            item = item.get(char);
        }
        if (isHuffmanTree(item))
            return item;
        return "";
    }
    getNgramVal() {
        let ngramVal = 1;
        let item = this.matrix;
        do {
            ngramVal += 1;
            item = item.get(this.delimiterChar);
            if (!item)
                return -1;
        } while (!isHuffmanTree(item));
        return ngramVal;
    }
    getBitsOfChar(huffmanTree, char) {
        if (isHuffmanLeaf(huffmanTree)) {
            if (huffmanTree == char)
                return [];
            return null;
        }
        let bits = this.getBitsOfChar(huffmanTree[0], char);
        if (bits != null) {
            bits.splice(0, 0, 0);
            return bits;
        }
        bits = this.getBitsOfChar(huffmanTree[1], char);
        if (bits != null) {
            bits.splice(0, 0, 1);
            return bits;
        }
        return null;
    }
}
//# sourceMappingURL=Marksman.js.map