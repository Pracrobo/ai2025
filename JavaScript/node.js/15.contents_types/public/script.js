const jsonSendBtn = document.getElementById('jsonSendBtn');
jsonSendBtn.addEventListener('click', async() => {
    const data = document.getElementById('jsonInput').value; //문자열
    console.log(data);
    const res = await fetch('/submit-json', { 
        method: 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : data 
    });
    //stringify : 객체를 문자열로 바꿔주기 위해서 쓰는거라 여기서 필요없음
    //resource 가 없다 >> server에서 정의안해줘
    const reply = await res.text(); //json > JSON.stringify
    const replyObject = JSON.parse(reply);
    console.log(replyObject);
    const output = document.getElementById('output');
    output.innerText = reply; //json 보낸건
    // JSON.stringify(reply) 객체로 보낸것
});

const formSumbit = document.getElementById('formSumbit');
formSumbit.addEventListener('click', async (e) => {
    e.preventDefault();
    const name = document.getElementById('formName').value;
    const age = document.getElementById('formAge').value;

    // const jsonData = {
    //     name: name,
    //     age: age
    // }
    // 1. 형태1
    // const res = await fetch('/submit-form', {
    //     method: 'POST',
    //     headers: {'Content-Type' : 'application/json'},
    //     body: JSON.stringify(jsonData)
    // });

    const params = new URLSearchParams(); //자료구조형태 > >toString으로 바꿔주기
    params.append('name', name);
    params.append('name', age);
    

    const res = await fetch('/submit-form', {
        method: 'POST',
        headers : {'Content-Type': 'application/x-www-form-urlencoded'},
        body: params.toString()
    });
});


const textSendBtn = document.getElementById('textSendBtn');
textSendBtn.addEventListener('click', async() => {
    const text = document.getElementById('textInput').value;
    const res = await fetch('/submit-form', {
        method: 'POST',
        headers : {'Content-Type': 'text/plain'},
        body : text
    });
});
