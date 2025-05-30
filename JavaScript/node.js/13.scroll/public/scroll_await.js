const NUM_OF_ITEMS_PER_PAGES = 20;
let start = 0;
let end = start + NUM_OF_ITEMS_PER_PAGES;
const contents = document.getElementById('contents');


async function loading() {
    // 미션1. 백엔드 요청해서 데이터를 받아와서 화면에 렌더링한다.
    //1-1 백엔드에 요청한다 fetch
    //1-2 데이터를 받아온다. res
    //1-3 화면에 렌더링 .. dom
    const res = await fetch(`/get-items?start=${start}&end=${end}`);
    const data = await res.json();
    //
    //data.forEach((repeatData) => {
     //   const items = document.createElement('div');
     //   items.textContent = repeatData;
     //   items.classList.add('item');
      //  contents.appendChild(items);
    //})
    for (start; start <= NUM_OF_ITEMS_PER_PAGES; start++) {
        const items = document.createElement('div');
        items.textContent = data[start];
        items.classList.add('item');
        contents.appendChild(items);
        // 삭제 함수 실행
        
    }
    const itemsClassName = document.getElementsByClassName('item');
    let itemsCount = itemsClassName.length;
    //다음 로딩 
    start = end;
    end += NUM_OF_ITEMS_PER_PAGES;
    for(let count = 1; itemsCount > NUM_OF_ITEMS_PER_PAGES; count++) {
        await deleting(itemsClassName, NUM_OF_ITEMS_PER_PAGES, count);
        count++;
    }
};


async function deleting(items, NUM_OF_ITEMS_PER_PAGES, count) {
    console.log(`개수는 ${items.length}, 실행횟수 : ${count}`);
    // // 미션: 오래된 DOM을 지우고 스크롤 탐지해서 위로 올라가면 다시 부르기
    // 9-1. 하단 스크롤시 데이터가 있는곳 까지만 가져오기 (200개의 데이터로 출발해보고, 그 이후에, 400, 600, 800, 1000 도 해보고, 205, 265 등의 중간 숫자도 해보기)				
    // 9-2. 한 페이지에 고정되는 갯수 정하기 (예, 100개, 그럼 100개일 경우에는, 한 화면에 언제나 100개의 데이터만 있어야 함... 상하단 다 합쳐서... 그래서, 오래된 DOM을 위에서부터 지워야함...)				
    // 9-3. 상단 스크롤시 다시 삭제한 위의 데이터 불러오기. (이때 스크롤바의 위치를 잘 확인해보기)				
    
    // 위에 있는 로딩된 숫자를 가져와서 start, end가 불러오려는 갯수 *2배라면 지운다
    // (items.length)
    for (let i = 0; i <= NUM_OF_ITEMS_PER_PAGES; i++){
        if(items.firstChild) {
            await items.removeChild(items.firstChild);
        }
        console.log(`갯수 ${i}개 지우기 성공`);
    }

}
    
document.addEventListener('DOMContentLoaded',() => {
    loading();
});

window.addEventListener('scroll', () => {
    console.log('스크롤 위치: ', window.pageYOffset);
    console.log('스크롤 위치: ', document.documentElement.scrollTop);
    console.log('윈도우 창 높이: ', window.innerHeight);
    console.log('스크롤 위치: ', window.scrollY);

    const endOfScroll = (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight);
    console.log('화면 끝?: ', endOfScroll);
    if(endOfScroll) {
        loading();
    }
});