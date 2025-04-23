document.addEventListener('DOMContentLoaded', () => {
    checkLoginStatus();
    document.getElementById('signin').addEventListener('click', (e) => {
        signin();
    });
    async function checkLoginStatus() {
        const response = await fetch('/api/check-login');
        if(response.status === 200) {
            const data = await response.json();
            console.log(data);
        }else{
            const data = await response.json();
            console.log(data);
        }
    }
    function signin() {
        fetch('/signin', (err) => {
            if(!err) {
                fetch('/signin', {
                    method: 'GET'
                });
            }else{
                console.log('오류발생');
            }
        });
    }
    
});