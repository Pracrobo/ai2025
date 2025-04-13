// Write JavaScript here
document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('userName');
    const pwInput = document.getElementById('password');
    const nameiconSpan  = document.getElementById('nameValidationIcon');
    const pwiconSpan  = document.getElementById('pwValidationIcon');
    const noticeA = document.querySelector('#noticename');
    const noticeB = document.querySelector('#noticepw');

    function nameCheck() {
        const value = nameInput.value;
        const regex = /^[a-zA-Z0-9]{3,10}$/
        if (regex.test(value)) {
            nameiconSpan.classList.add("d-none");
            noticeA.classList.add("d-none");
            nameInput.classList.remove("is-invalid");
            nameInput.classList.remove("border-danger-subtle");
            nameInput.classList.add("border", "border-primary-subtle");
        } else {
            noticeA.classList.remove("d-none");
            nameiconSpan.classList.remove("d-none");
            nameInput.classList.remove("border-primary-subtle");
            nameInput.classList.add("border", "border-danger-subtle");
            nameInput.classList.add("is-invalid");
        }
    }

    function pwCheck() {
        const value = pwInput.value;
        const regex = /^[a-zA-Z0-9!@#$%^]{8}$/
        if (regex.test(value)) {
            pwiconSpan.classList.add("d-none");
            noticeB.classList.add("d-none");
            pwInput.classList.remove("is-invalid");
            pwInput.classList.remove("border-danger-subtle");
            pwInput.classList.add("border", "border-primary-subtle");
        } else {
            noticeB.classList.remove("d-none");
            pwiconSpan.classList.remove("d-none");
            pwInput.classList.remove("border-primary-subtle");
            pwInput.classList.add("border", "border-danger-subtle");
            pwInput.classList.add("is-invalid");
        }
    }
    nameInput.addEventListener('focus', nameCheck);
    nameInput.addEventListener('blur', nameCheck);
    nameInput.addEventListener('input', nameCheck);

    pwInput.addEventListener('focus', pwCheck);
    pwInput.addEventListener('blur', pwCheck);
    pwInput.addEventListener('input', pwCheck);
});