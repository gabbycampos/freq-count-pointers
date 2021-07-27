// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    let obj = {};
    keys.forEach((key, i) => obj[key] = values[i] || null);
    return obj;
}

twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3])