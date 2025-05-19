const form =document.getElementById('codeForm')
form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const code = document.getElementById('code').value;
    console.log("보낸 코드", code)
    try {
        const response = await fetch('/api/check', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code: code })
        });
        console.log("응답", response)

        const result = await response.json();
        console.log("코드: ", result)
        document.getElementById('result').textContent = result;

    }catch(error) {
        console.error("에러:", error);
        document.getElementById("result").textContent="에러가 발생했습니다."
    }
});