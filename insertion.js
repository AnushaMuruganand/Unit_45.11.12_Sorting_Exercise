function insertionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let currentValue = arr[i];
    
        for (let j = i - 1; j > -1; j--) {
            if (arr[j] > currentValue) {

                // SWAPPING
                arr[j + 1] = arr[j];
                arr[j] = currentValue;
            }     
        }
    }

    console.log(arr);
    
    return arr;
    
}

module.exports = insertionSort;