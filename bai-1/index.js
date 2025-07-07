// Bài 1: Tính tổng các số trong mảng

const array = [1, 2, 3, 4];

const sumArray = array.reduce((total, current) => total + current, 0);

console.log(sumArray);

// Bài 2: Tìm số lớn nhất trong mảng

const array2 = [10, 20, 30, 5];

const findMax = Math.max(...array2);

console.log(findMax);

// Bài 3: Lọc số chẵn Viết một hàm để trả về một mảng mới chỉ chứa các số chẵn từ mảng

const array3 = [1, 2, 3, 4, 5, 6];

const filterEvenNumbers = array3.filter((item) => item % 2 == 0);

console.log(filterEvenNumbers);

// Bài 4: Đếm số lần xuất hiện của một phần tử

function countOccurrences(arr, value) {
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) cnt++;
  }
  return cnt;
}

console.log(countOccurrences([1, 2, 3, 2, 1, 2], 2));

// Bài 5: Đảo ngược mảng

const array5 = [1, 2, 3, 4];

const reverseArray = array5.reverse();

console.log(reverseArray);

// Bài 6: Loại bỏ phần tử trùng lặp

const array6 = [1, 2, 2, 3, 4, 4, 5];

const removeDuplicates = [...new Set(array6)];

console.log(removeDuplicates);

// Bài 7: Sắp xếp mảng tăng dần

const array7 = [5, 2, 9, 1];

const sortArrayAscending = array7.sort((a, b) => a - b);

console.log(sortArrayAscending);

// Bài 8: Tìm phần tử xuất hiện nhiều nhất

function findMostFrequent(arr) {
  const sortArray8 = arr.sort();
  let maxCnt = 0;
  let cnt = 1;
  let phanTu = sortArray8[0];
  for (let i = 1; i < sortArray8.length; i++) {
    if (sortArray8[i] == sortArray8[i - 1]) {
      cnt++;
    } else {
      cnt = 1;
    }
    if (cnt > maxCnt) {
      maxCnt = cnt;
      phanTu = sortArray8[i];
    }
  }
  return phanTu;
}

console.log(findMostFrequent([1, 2, 3, 2, 1, 2]));

// Bài 9: Gộp hai mảng và loại bỏ trùng lặp

function mergeAndRemoveDuplicates(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

console.log(mergeAndRemoveDuplicates([1, 2, 3], [2, 3, 4]));

// Bài 10: Kiểm tra mảng đối xứng

function isSymmetricArray(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] != arr[arr.length - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isSymmetricArray([2, 3, 8, 3, 2]));
