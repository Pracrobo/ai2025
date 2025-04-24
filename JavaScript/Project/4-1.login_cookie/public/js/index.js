document.addEventListener('DOMContentLoaded', () => {
    checkLoginStatus();
});


async function checkLoginStatus() {
    const response = await fetch('/api/check-login');
    if(response.status == 200) {
        const data = await response.json();
        const contents = document.getElementById("userhistory");
        contents.textContent = data.message
    }else{
        const data = await response.json();
        console.log(data);
    }
}

