document.addEventListener('DOMContentLoaded', async() => {
    const response = await fetch('/api/memo', (err) => {method: 'GET'});
    const cardlist = await response.json();
    showCard(cardlist);
    const submitBtn = document.querySelector('#save');
    submitBtn.addEventListener('click', async(e) => {
        const data = await submit();
        if(data) {
            enrollCard(selectCard);
        }
    });
});
function showCard(data) {
    const carddivs = document.querySelectorAll('#card-list > .col-md-4');
    if(data && carddivs.length>0) {
        // 받은 list 값이 있다면 뿌려주기\
        data.forEach((one, index) => {
            if (carddivs[index]) {
                carddivs[index].innerHTML = `
                <div class="card-body">
                        <h5 class="card-title"><span id="hidden">${one.id}</span>${one.title}</h5>
                        <p class="card-text">${one.contents}</p>
                        <button type="button" id="updateBtn" class="btn btn-warning">수정</button>
                        <button type="button" id="deleteBtn" class="btn btn-success">삭제</button>
                    </div>
                `
            }
            document.getElementById('hidden').style.display="none";
        });
    }
}

async function submit() {
    const inputTitle = document.querySelector('#input-title.form-control');
    const title = inputTitle.value;
    const inputContents = document.querySelector('#input-text.form-control');
    const contents = inputContents.value;
    
    console.log(title, contents);
    
    const response = await fetch('/memo', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'title': title, 'contents': contents})
    });
    const data = await response.json();
    return data;
}

function enrollCard(contents) {
    const cards = document.querySelectorAll('#card-list.col-md-4');
    // cards.innerHTML(`
    // <div class="card-body">
    //     <h5 class="card-title"><span id="hidden">${contents.id}</span>${contents.title}</h5>
    //     <p class="card-text">${contents.contents}</p>
    //     <button type="button" id="updateBtn" class="btn btn-warning">수정</button>
    //     <button type="button" id="deleteBtn" class="btn btn-success">삭제</button>
    // </div>
    //`);
}

