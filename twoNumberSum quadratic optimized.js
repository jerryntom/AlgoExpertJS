function twoNumberSum(array, targetSum) {
    let correctPair = [];
    let missingNumber;

    for (let i = 0; i < array.length; i++) {
        missingNumber = targetSum - array[i];

        if (array.includes(missingNumber)) {
            correctPair.push([array[i], missingNumber])
        }
    }

    for (let i = 0; i < correctPair.length; i++) {
        if (correctPair[i][0] !== correctPair[i][1]) return correctPair[i];
    }

    return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
