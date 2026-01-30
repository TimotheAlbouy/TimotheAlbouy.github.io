import { isHuffmanTree } from "./util.js";
export function importModel(modelObject) {
    return {
        delimiter: modelObject.delimiter,
        matrix: importMatrix(modelObject.matrix)
    };
}
function importMatrix(matrixObject) {
    let matrix = new Map();
    for (let char in matrixObject) {
        let item = matrixObject[char];
        if (isHuffmanTree(item))
            matrix.set(char, item);
        else
            matrix.set(char, importMatrix(item));
    }
    return matrix;
}
export function exportModel(model) {
    return {
        delimiter: model["delimiter"],
        matrix: exportMatrixObject(model["matrix"])
    };
}
function exportMatrixObject(matrix) {
    let matrixObject = {};
    matrix.forEach((item, char) => {
        if (isHuffmanTree(item))
            matrixObject[char] = item;
        else
            matrixObject[char] = exportMatrixObject(item);
    });
    return matrixObject;
}
//# sourceMappingURL=projectImportExport.js.map