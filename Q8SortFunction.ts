//Q.8.Write a function (getEvenAndSort) that can be called on any array, and it returns the subarray of only
// the even numbers, but sorted.[12,3,2,1,7,6].getEvenAndSort()


let i,j,temp: number;
let getEvenAndSort = (numbers: number[]): number[] => {
  const arrayLength = numbers.length;
  let array: number[] = numbers.filter((x) => x % 2 === 0);

  for (i = 0; i < arrayLength; ++i) {
    for (j = i + 1; j < arrayLength; ++j) {
      if (array[i] > array[j]) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
};
console.log(getEvenAndSort([10,21,30,24,7,42]));