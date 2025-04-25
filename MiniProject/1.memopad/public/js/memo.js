document.addEventListener('DOMContentLoaded', async() => {
    const response = await fetch('/api/memo', (err) => {method: 'GET'});
    const cardlist = await response.json();
    showCard(cardlist);
    const submitBtn = document.querySelector('#save');
    
    submitBtn.addEventListener('click', async(e) => {
        e.preventDefault(); // form submit 방지
        const data = await submit();
        if(data) {
            showCard(data);
        }
    });
});


    
function showCard(data) {
    const fragment = document.createDocumentFragment();
    const carddivs = document.querySelector('#card-list');
    if (Array.isArray(data)) {
        // 받은 list 값이 있다면 뿌려주기\
        Object.entries(data).forEach(([key, value]) => {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('col-md-3');
            cardDiv.innerHTML = `
            <div class="card-body">
            <span class="hidden">${value.id}</span>
            <h5 class="card-title"> ${value.title}</h5>
            <p class="card-text">${value.contents}</p>
            <button type="button" class="btn btn-warning updateBtn data-id='${value.id}'">수정</button>
            <button type="button" class="btn btn-success deleteBtn data-id='${value.id}'">삭제</button>
            </div>            `
            fragment.appendChild(cardDiv);
            deleteFuc(key, value.id);
        });  
        carddivs.appendChild(fragment); // 한 번에 삽입
    }else{
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col-md-3');
        cardDiv.innerHTML = `
        <div class="card-body">
        <span class="hidden"  data-id="${data.id}">${data.id}</span>
        <h5 class="card-title">${data.title}</h5>
        <p class="card-text">${data.contents}</p>
        <button type="button" class="btn btn-warning updateBtn" data-id='${data.id}'">수정</button>
        <button type="button" class="btn btn-success deleteBtn" data-id='${data.id}'">삭제</button>
        </div>
        `;
        carddivs.appendChild(cardDiv);
    }
    // span 숨기기
    const spans = document.querySelectorAll('.hidden');
    spans.forEach(span => span.style.display = 'none');
    const cardOnes = document.querySelectorAll('.card-body');
    cardOnes.forEach(cardOne => cardOne.style.margin = '10px');
}


function updateFuc(idx, id) {
    // console.log(idx, id);
        
}

function deleteFuc(idx, id) {
    console.log(idx, id);
    for(let i = 0; i < buttons.length; i++) {
        const buttons = document.getElementsByClassName('deleteBtn').item(i);
        console.log(buttons);
    }
    //.forEach((idx) => {
    //    console.log(idx);

//    });
    // .addEventListener('click', () => {
    //     console.log('성공');
    // });
    // buttons.addEventListener('click', async() => {
    //     console.log('여', id);
    // });
        
}

async function submit() {
    const inputTitle = document.querySelector('#input-title.form-control');
    const inputContents = document.querySelector('#input-text.form-control');
    const title = inputTitle.value;
    const contents = inputContents.value;
    const response = await fetch('/memo', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title: title , contents: contents})
    });
    const data = response.json();
    return data;
}
