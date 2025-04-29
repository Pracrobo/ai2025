/**
 * 객체의 깊은 복사는 복사본의 속성이 복사본이 만들어진 원본 객체와 같은 참조(메모리 내의 같은 값을 가리킴)를 공유하지 않는 복사입니다. 
 * 따라서 원본이나 복사본을 변경할 때, 다른 객체가 변경되지 않는 것을 보장할 수 있습니다. 이러한 동작은 원본이나 복사본의 중첩된 속성을 변경하면 다른 객체도 변경될 수 있는 얕은 복사의 동작과 대조적입니다. 
 * 두 객체 o1과 o2는 관찰된 동작이 같다면 구조적으로 동일합니다. 이러한 동작에는 다음이 포함됩니다.

 * o1과 o2의 속성은 같은 이름과 순서입니다.
 *두 객체의 속성 값은 구조적으로 동일합니다.
 *두 객체의 프로토타입 체인은 구조적으로 동일합니다 (구조적으로 동일하다는 것은 이러한 객체는 보통 일반 객체이므로 둘 다 Object.prototype에서 상속된다는 것을 의미합니다).
 */

// const json = {'a': true, 'b' : 3};
// const obj = JSON.parse(json);
// console.log(obj.count);

const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
const ingredientsListDeepCopy = JSON.parse(JSON.stringify(ingredientsList));// ingredientsListDeepCopy의 'list' 속성 값을 변경합니다.
ingredientsListDeepCopy[1].list = ["rice flour", "water"];
console.log(ingredientsList[1].list);
// Array(3) [ "eggs", "flour", "water" ]
