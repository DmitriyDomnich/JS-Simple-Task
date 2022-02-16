export function differenceBetweenMaxAndMin(arr) {
  if (arr.length > 1) {
    return Math.max(...arr) - Math.min(...arr);
  }
  return 0;
}

export function getWordsByLength(str, length) {
  return str.split(' ').filter(word => word.length > length);
}

export function getMissingElement(arr) {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].find(num => !arr.includes(num));
}

export function solution(str, endingStr) {
  return str.endsWith(endingStr);
}

export function averages(arr) {
  return arr.reduce((resultArray, curr, index, array) => {
    if (index < array.length - 1)
      resultArray.push((curr + array[index + 1]) / 2);
    return resultArray;
  }, []);
}

export function highestValue(num) {
  if (num < 0) throw new Error('Enter a value >= 0');

  return +num.toString().split('').sort((a, b) => b - a).join('');
}

export function nameScore(name) {
  const scores = {
    A: 100,
    B: 14,
    C: 9,
    D: 28,
    E: 145,
    F: 12,
    G: 3,
    H: 10,
    I: 200,
    J: 100,
    K: 114,
    L: 100,
    M: 25,
    N: 450,
    O: 80,
    P: 2,
    Q: 12,
    R: 400,
    S: 113,
    T: 405,
    U: 11,
    V: 10,
    W: 10,
    X: 3,
    Y: 210,
    Z: 23
  };
  const nameScore = name.split('').reduce((score, curr) => score + scores[curr], 0);
  return nameScore <= 60
    ? 'NOT TOO GOOD'
      : nameScore >= 61 && nameScore <= 300
      ? 'PRETTY GOOD'
        : nameScore >= 301 && nameScore <= 599
        ? 'VERY GOOD'
          : 'THE BEST';
}

export function countVowels(str) {
  const vowels = ['a', 'e', 'y', 'u', 'i', 'o'];

  return str.toLowerCase().split('').reduce((count, curr) => count + vowels.includes(curr), 0);
}

export function removeABC(str) {

  const abc = ['a', 'b', 'c'];

  const checkABC = str => str.includes('a') || str.includes('b') || str.includes('c');
  
  if (!checkABC(str)) {
    return null;
  }
  return abc.reduce((resultStr, curr) => resultStr.replaceAll(curr, ''), str);
}

export function difference(arr1, arr2) {
  return [...new Set(arr1.concat(arr2).sort((a, b) => a - b).map(num => num.toString()))];
}

export function changeKeysValues(obj) {
  return Object.entries(obj).reduce((resultObj, [key, value]) => {
    resultObj[value] = key;
    return resultObj;
  }, {
    toString() {
      return Object.entries(this).reduce((str, [key, value]) => key !== 'toString' ?  str + `\t\t\t${key}: ${value},\n\n` : '\n', '');
    }
  });
}

export function calculateDifference(obj, num) {
  const values = Object.values(obj);
  const sum = values.reduce((sum, curr) => sum + curr, 0);

  if (sum < num) throw new Error('Сумма предметов всегда должна быть больше страховки.');

  return sum - num;
}

export function rotateArray(str, direction) {
  
  const directionLower = direction.toLowerCase();

  if (direction !== '' && directionLower !== 'right') {
    return new Error('Wrong direction');
  }

  return str.split('')
    [`reduce${directionLower === 'right' ? 'Right' : ''}`]((resultArr, _, currentIndex) => { // calling reduce or reduceRight depending on provided direction
      
    resultArr.push(str.slice(currentIndex).concat(str.slice(0, currentIndex)));
    
    return resultArr;
  }, []);
}

export function doesBrickFit(brickHeight, brickWidth, brickLength, holeWidth, holeHeight) {
  return (brickLength <= holeWidth || brickWidth <= holeWidth) && brickHeight <= holeHeight;
}