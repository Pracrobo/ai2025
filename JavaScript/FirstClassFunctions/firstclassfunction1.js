function sayHello() {
    return "Hello, ";
}

function greeting(helloMessage, name) {
    console.log(helloMessage() + name);
}

greeting(sayHello, "JavaScript");

//Hello, JavaScript
//undefined