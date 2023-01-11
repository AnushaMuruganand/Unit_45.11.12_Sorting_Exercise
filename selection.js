function selectionSort(arr) {
    let newMin;
    for (let i = 0; i < arr.length; i++){
        let min = i;
        for (let j = i + 1; j < arr.length; j++){

            // finding the smallest number in the array and assign that index to be "min"
            if (arr[min] > arr[j]) {
                min = j;
            }
        }

        // If the index "i" and "min" are not same then swap the two indices values
        if (i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    
    return arr;
}

module.exports = selectionSort;