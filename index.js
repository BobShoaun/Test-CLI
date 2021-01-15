test = [1, 5, 69, 4, 49, 8, -1, -5, 4234, 44, 100];

function bubbleSort(array) {
	let sorted = false;

	while (!sorted) {
		sorted = true;

		for (let i = 1; i < array.length; i++) {
			if (array[i - 1] > array[i]) {
				// swap test[i] and test[i+]
				let temp = array[i - 1];
				array[i - 1] = array[i];
				array[i] = temp;

				sorted = false;
			}
		}
	}
	return array;
}

function selectionSort(array) {
	let sortedArray = [];

	while (array.length > 0) {
		let mIndex = minIndex(array);
		sortedArray.push(array[mIndex]);
        array.splice(mIndex, 1);
	}

	return sortedArray;
}

function minIndex(array) {
	let index = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[index] > array[i]) index = i;
	}
	return index;
}

console.log(bubbleSort(test));
