console.log('로딩완료');
document.addEventListener('DOMContentLoaded', () => {
    // 미션1. 백엔드 요청해서 데이터를 받아와서 화면에 렌더링한다.
    //1-1 백엔드에 요청한다 fetch
    //1-2 데이터를 받아온다. res
    //1-3 화면에 렌더링 .. dom
    const contents = document.querySelector('#contents');
    fetch(`/get-items/:${count}`, (req, res) => {
        method: "GET"
    }).then(res => res.json())
    .then((data) => {console.log(data);
    }).catch(error => {
        alert('error 입니다.', error.message);
    });
    contents.innerHTML= `<span>${data}</span>`;
});
