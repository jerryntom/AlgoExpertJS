function twoNumberSum(array, targetSum) {
    let missingNumber;

    for (let i = 0; i < array.length; i++) {
        missingNumber = targetSum - array[i];

        if (array.includes(missingNumber) && missingNumber !== array[i]) {
            return [array[i], missingNumber];
        }
    }

    return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
