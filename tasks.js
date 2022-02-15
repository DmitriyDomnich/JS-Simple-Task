import { 
  averages,
  calculateDifference,
  changeKeysValues,
  countVowels,
  difference, 
  differenceBetweenMaxAndMin,
  doesBrickFit,
  getMissingElement,
  getWordsByLength,
  highestValue,
  nameScore,
  removeABC,
  rotateArray,
  solution
} from "./tasks-functions.js";


export const tasks = [
  {
    functionName: differenceBetweenMaxAndMin.name,
    cases: [
      {
        input: '[1, 2, 3, -4]',
        output: differenceBetweenMaxAndMin([1, 2, 3, -4])
      },
      {
        input: '[16]',
        output: differenceBetweenMaxAndMin([16])
      }
    ]
  },
  {
    functionName: getWordsByLength.name,
    cases: [
      {
        input: '"Hello my world lol", 3',
        output: getWordsByLength('Hello my world lol', 3)
      }
    ]
  },
  {
    functionName: getMissingElement.name,
    cases: [
      {
        input: '[0,5,1,3,2,9,7,6,4]',
        output: getMissingElement([0,5,1,3,2,9,7,6,4])
      },
      {
        input: '[9,2,4,5,7,0,8,6,1]',
        output: getMissingElement([9,2,4,5,7,0,8,6,1])
      }
    ]
  },
  {
    functionName: solution.name,
    cases: [
      {
        input: '"abc", "bc"',
        output: solution('abc', 'bc')
      },
      {
        input: '"abc", "d"',
        output: solution('abc', 'd')
      }
    ]
  },
  {
    functionName: averages.name,
    cases: [
      {
        input: '[2, -2, 2, -2, 2]',
        output: averages([2, -2, 2, -2, 2])
      },
      {
        input: '[1, 3, 5, 1, -10]',
        output: averages([1, 3, 5, 1, -10])
      }
    ]
  },
  {
    functionName: highestValue.name,
    cases: [
      {
        input: '123456789',
        output: highestValue(123456789)
      },
      {
        input: '42145',
        output: highestValue(42145)
      }
    ]
  },
  {
    functionName: nameScore.name,
    cases: [
      {
        input: '"MUBASHIR"',
        output: nameScore('MUBASHIR')
      },
      {
        input: '"YOU"',
        output: nameScore('YOU')
      },
      {
        input: '"MATT"',
        output: nameScore('MATT')
      },
      {
        input: '"PUBG"',
        output: nameScore('PUBG')
      },
    ]
  },
  {
    functionName: countVowels.name,
    cases: [
      {
        input: '"Celebration"',
        output: countVowels('Celebration')
      },
      {
        input: '"Palm"',
        output: countVowels('Palm')
      }
    ]
  },
  {
    functionName: removeABC.name,
    cases: [
      {
        input: '"This might be a bit hard"',
        output: removeABC('This might be a bit hard')
      },
      {
        input: '"hello world"',
        output: removeABC('hello world')
      }
    ]
  },
  {
    functionName: difference.name,
    cases: [
      {
        input: '[1, 2, 3], [100, 2, 1, 10]',
        output: difference([1, 2, 3], [100, 2, 1, 10])
      }
    ]
  },
  {
    functionName: changeKeysValues.name,
    cases: [
      {
        input: '{red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}',
        output: changeKeysValues({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"})
      }
    ]
  },
  {
    functionName: calculateDifference.name,
    cases: [
      {
        input: '{"baseball bat": 20}, 5',
        output: calculateDifference({"baseball bat": 20}, 5)
      },
      {
        input: '{skate: 10, painting: 20}, 19',
        output: calculateDifference({skate: 10, painting: 20}, 19)
      },
      {
        input: '{skate: 200, painting: 200, shoes: 1}, 400',
        output: calculateDifference({skate: 200, painting: 200, shoes: 1}, 400)
      }
    ]
  },
  {
    functionName: rotateArray.name,
    cases: [
      {
        input: '"abcd", "left"',
        output: rotateArray("abcd", "left")
      },
      {
        input: '"abcd", "right"',
        output: rotateArray("abcd", "right")
      }
    ]
  },
  {
    functionName: doesBrickFit.name,
    cases: [
      {
        input: '1, 1, 1, 1, 1',
        output: doesBrickFit(1, 1, 1, 1, 1)
      },
      {
        input: '1, 1, 2, 1, 1',
        output: doesBrickFit(1, 1, 2, 1, 1)
      },
      {
        input: '1, 2, 2, 1, 1',
        output: doesBrickFit(1, 2, 2, 1, 1)
      }
    ]
  },
];