
// ===============================================
// Task 1: Generate Random Array (20 numbers 0–100)
// ===============================================

// Function to generate an array of random numbers
function generateRandomArray(size) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    // Math.random() → 0–1, multiply by 100, round to whole number
    arr.push(Math.floor(Math.random() * 101));
  }
  return arr;
}

const numbers = generateRandomArray(20);
console.log("Generated Array:", numbers);


// ===============================================
// Task 2: Find Maximum Element
// ===============================================

// Function to find the maximum value in an array
function findMax(arr) {
  let max = arr[0]; // start with first element

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // update max if a larger value is found
    }
  }

  return max;
}

console.log("Maximum Value:", findMax(numbers));


// ===============================================
// Task 3: Find Position (Index) of Minimum Element
// ===============================================

// Function to find the index of the minimum value
function findMinIndex(arr) {
  let min = arr[0];
  let minIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i; // track the index
    }
  }

  return minIndex;
}

console.log("Index of Minimum Value:", findMinIndex(numbers));


// ===============================================
// Task 4: Sort Array in Descending Order
// ===============================================

// Using sort() with a custom compare function
const sortedDescending = [...numbers].sort((a, b) => b - a);
console.log("Sorted Descending:", sortedDescending);


// ===============================================
// Task 5: Calculate Average of Object Values
// ===============================================

// Object containing student names and grades
const studentGrades = {
  Caleb: 95,
  Sarah: 88,
  John: 76,
  Emily: 92,
  Marcus: 84
};

// Function to compute average grade
function calculateAverage(obj) {
  const values = Object.values(obj); // extract grades
  let sum = 0;

  for (let i = 0; i < values.length; i++) {
    sum += values[i];
  }

  return sum / values.length;
}

console.log("Average Student Grade:", calculateAverage(studentGrades));
