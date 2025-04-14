// 이름, 인사할줄안다.
class Person{
    name="";
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`안녕하세요. 저는 ${this.name} 입니다.`);
    }
}
module.exports = Person;