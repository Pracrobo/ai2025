const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const res = await fetch('/api/login', {
        method: "POST",
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({email, password})
    });
    //TODO 응답값 확인

    if(res.ok) { //res.status_code === 200 or res.ok  >> true/false
        const data = await res.json();
        showFlash(data.message, "success");
        setTimeout(() => {
            window.location.href="/index.html"
        }, 1000);

    }else{
        const data = await res.json();
        showFlash(data.error, "danger");
        setTimeout(() => {
            window.location.href="/login.html"
        }, 1000);
    }

});


