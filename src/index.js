// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (typeof matrix === "undefined") return [];
    let res = [];

    for (let index = 0; index < matrix.length; index++) {
        if (index % 2 !== 0) {
            res = [...res, ...matrix[index].sort((a, b) => b - a)];
        } else {
            res = [...res, ...matrix[index].sort((a, b) => a - b)];
        }
    }

    return res;
};
