// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let num1 = 0;
  for (let i = 0; i < array1.length; i++){
    let times = 10 ** (array1.length - i - 1);
    num1 += (array1[i] * times);
  }

  let num2 = 0;
  for (let i = 0; i < array2.length; i++){
    let times = 10 ** (array2.length - i - 1);
    num2 += (array2[i] * times);
  }

  return num1 + num2
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const value_str = String(value)
  let l = 0;
  let r = value_str.length - 1;
  while (l < r){
    if (value_str[l] !== value_str[r]){
      return false
    }
    l += 1;
    r -= 1;
  }
  return true
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === undefined || input === null || input === '') {
    return 'Required field'
  } else if (!Number(input)){
    return 'Must be a number besides 0'
  }
  return ''
}
