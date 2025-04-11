const ROWS = 5; //총 출력할 줄 수 
function leftTraingle() { 
    let currentRow = 1;
    while(currentRow <= ROWS) { //hits, while이든  for 이든 상관없음
        let starts = "";
        let startCount = 1;
        while(startCount <= currentRow) {
            starts += "*";
            startCount++;
        }
        console.log(starts);
        currentRow++;
    }
}


leftTraingle(); 