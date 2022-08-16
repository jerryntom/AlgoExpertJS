function twoNumberSum(array, targetSum) {
    let arrayPairs = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i !== j) arrayPairs.push([array[i], array[j]]);
        }
    }

    for (let i = 0; i < arrayPairs.length; i++) {
        let arrayPairSum = arrayPairs[i][0] + arrayPairs[i][1];

        if (arrayPairSum === targetSum) {
            return arrayPairs[i];
        }
    }

    return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
