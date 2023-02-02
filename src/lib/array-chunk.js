function arrayChunk(array, length) {
    const res = [];
    for (let i = 0; i < array.length; i += length) {
        const chunk = array.slice(i, i + length);
        res.push(chunk);
    }
    return res;
}

export default arrayChunk;