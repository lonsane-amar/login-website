const container = document.getElementById('container');

const registerBtn = document.getElementById('register');

const loginBtn = document.getElementById('login');


registerBtn.addEventListener('click',() =>{

    container.classList.add("active");
});

loginBtn.addEventListener('click',() =>{

    container.classList.remove("active");
});
document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", e => e.preventDefault());
});
const signupForm = document.querySelector(".sign-up form");

signupForm.addEventListener("submit", () => {
    const inputs = signupForm.querySelectorAll("input");
    if ([...inputs].some(input => input.value === "")) {
        alert("Please fill all fields");
    }
});
