document.addEventListener("DOMContentLoaded", () => {
  // 로그인 한적이 있을까? 물어보기...
  document.getElementById("signup").addEventListener("click", (e) => {
    e.preventDefault();
    signup();
  });
});

async function signup() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  try {
    const response = await fetch("/api/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.status == 200) {
      alert("회원가입에 성공했습니다!");
      window.history.back();
    } else {
      // 회원가입 실패
      //   console.log('회원가입 실패', response);
    }
  } catch (error) {
    console.error("로그인 요청 중 에러 발생:", error);
  }
}
