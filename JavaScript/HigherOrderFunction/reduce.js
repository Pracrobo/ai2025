//reduce(callback, initialValue)
const maxCallback = (acc, cur) => Math.max(acc.x, cur.x);
const maxCallback2 = (max, cur) => Math.max(max, cur);

// initialValue 없이 reduce()
[{ x: 22 }, { x: 42 }].reduce(maxCallback); // 42
[{ x: 22 }].reduce(maxCallback); // { x: 22 }
[].reduce(maxCallback); // TypeError

// map/reduce로 개선 - 비었거나 더 큰 배열에서도 동작함
[{ x: 22 }, { x: 42 }].map((el) => el.x).reduce(maxCallback2, -Infinity);


[0, 1, 2, 3, 4].reduce(function (
    accumulator,
    currentValue,
    currentIndex,
    array,
  ) {
    return accumulator + currentValue;
  }, 10);
// output : 20


[0, 1, 2, 3, 4].reduce((prev, curr) => prev + curr);


//
const result = arr.reduce((accumulator, currentValue) => {
  return 새로운_acc값;
}, 초기값);
