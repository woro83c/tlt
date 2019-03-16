function padArray(array, length, fill) {
    if (length > array.length) {
        return array.concat(Array(length - array.length).fill(fill));
    }
    return array;
}

export default padArray;
