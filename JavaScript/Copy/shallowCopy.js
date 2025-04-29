const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];

const ingredientsListCopy = Array.from(ingredientsList);
console.log(ingredientsListCopy);

// ["noodles",{"list":["eggs","flour","water"]}]

//중첩된 속성 값을 재할당하면 두 객체 모두에서 볼 수 있습니다
ingredientsListCopy[1].list = ["rice flour", "water"];
console.log(ingredientsList[1].list);
// Array [ "rice flour", "water" ]

//
//얕은 복사의 경우, 중첩된 객체의 값이 아닌 최상위 속성만 복사합니다. 그러므로,
//복사본의 최상위 속성을 재할당해도 원본 객체에는 영향을 끼치지 않습니다.
//복사본의 중첩 객체 속성을 재할당하면 원본 객체에 영향을 끼칩니다.
//concat(), slice(), from(), assign(), create()
//최상위 속성 값(인덱스가 0인 경우)을 재할당하면 변경된 객체에서만 볼 수 있습니다.
ingredientsListCopy[0] = "rice noodles";
console.log(ingredientsList[0]); // noodles
console.log(JSON.stringify(ingredientsListCopy));
// ["rice noodles",{"list":["rice flour","water"]}]
console.log(JSON.stringify(ingredientsList));
// ["noodles",{"list":["rice flour","water"]}]
/**
 * 직렬화가 가능하다면 JavaScript 객체의 깊은 복사를 만드는 한 가지 방법은, 
 * JSON.stringify()를 사용하여 객체를 JSON 문자열로 변환한 다음, 
 * JSON.parse()로 문자열을 다시 (완전히 새로운) JavaScript 객체로 변환하는 것입니다.
 * 
 */