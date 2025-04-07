function showhide () {
    let mydiv = document.getElementById("hidendiv");
    // 미션 1, 이 요소를 숨기기 (버튼 누르면 다시 보이기)
    if (mydiv.style.display === "none") {
        mydiv.style.display = "block";
    }else{
        mydiv.style.display = "none";
    }
}