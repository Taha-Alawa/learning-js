// these code for open sign up form and close it
const openForm = document.getElementById("header-sign");
const closeForm = document.getElementById("close");
const signContianer = document.querySelector(".sign-contianer");
const formContianer = document.querySelector(".sign-form");

openForm.addEventListener("click", (eo) => {
  signContianer.style.display = "flex";

  // setTimeOut for the animation
  setTimeout(() => {
    formContianer.classList.add("transform");
  }, 50);
});

closeForm.addEventListener("click", (eo) => {
  formContianer.classList.remove("transform");
  // setTimeOut for the animation
  setTimeout(() => {
    signContianer.style.display = "none";
  }, 610);
});

// whin all input has success class these code will active
const signButton = document.getElementById("signupbtn");

const activeSign = () => {
  if (userName.classList.contains("success") && email.classList.contains("success") && password.classList.contains("success") && repeatPassWord.classList.contains("success")) {
    signButton.removeAttribute("disabled");
  } else {
    signButton.setAttribute("disabled", "");
  }
}

// whin you type on user name input these code will active
const userName = document.getElementById("user-name");
const userMessage = document.getElementById("userMessage");

userName.addEventListener("keyup", (eo) => {
  userName.classList.add("error");
  userMessage.style.display = "block";

  if (userName.value.length > 3) {
    userName.classList.add("success");
    userMessage.style.display = "none";
    // هذا الكود الطويل بيجيب لك الالمنت اللي بعد الاي دي بالضبط
    userName.nextElementSibling.style.opacity = "1";
  } else {
    userName.classList.remove("success");
    userName.nextElementSibling.style.opacity = "0";
  }

  if (userName.value.length == 0) {
    userName.classList.remove("error");
    userMessage.style.display = "none";
  }

  activeSign()
});

// whin you type on email input these code will active
const email = document.getElementById("email");
const emailMessage = document.getElementById("emailMessage");

email.addEventListener("keyup", (eo) => {
  email.classList.add("error");
  emailMessage.style.display = "block";

  // هذا الكود جدا مهم عشان تسوي شرط صحة الايميل
  const regEmail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // اقرا الشرط ضروري عشان تفهمه
  if (regEmail.test(email.value)) {
    email.classList.add("success");
    emailMessage.style.display = "none";
    // هذا الكود الطويل بيجيب لك الالمنت اللي بعد الاي دي بالضبط
    email.nextElementSibling.style.opacity = "1";
  } else {
    email.classList.remove("success");
    email.nextElementSibling.style.opacity = "0";
  }

  if (email.value.length == 0) {
    email.classList.remove("error");
    emailMessage.style.display = "none";
  }

  activeSign()
});

// whin you type on password input these code will active
const password = document.getElementById("psw");
const pswMessage = document.getElementById("pswMessage");

password.addEventListener("keyup", (eo) => {
  password.classList.add("error");
  pswMessage.style.display = "block";

  // هذا الكود جدا مهم عشان تسوي شرط صحة الايميل
  const regPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  // اقرا الشرط ضروري عشان تفهمه
  if (regPassword.test(password.value)) {
    password.classList.add("success");
    pswMessage.style.display = "none";
    // هذا الكود الطويل بيجيب لك الالمنت اللي بعد الاي دي بالضبط
    password.nextElementSibling.style.opacity = "1";
  } else {
    password.classList.remove("success");
    password.nextElementSibling.style.opacity = "0";
  }

  if (password.value.length == 0) {
    password.classList.remove("error");
    pswMessage.style.display = "none";
  }

  activeSign()
});

// whin you type on repeat-password input these code will active
const repeatPassWord = document.getElementById("psw-repeat");
const rePswMessage = document.getElementById("repeatPswMessage");

repeatPassWord.addEventListener("keyup", (eo) => {
  repeatPassWord.classList.add("error");
  rePswMessage.style.display = "block";

  // اقرا الشرط ضروري عشان تفهمه
  if (repeatPassWord.value == password.value) {
    repeatPassWord.classList.add("success");
    rePswMessage.style.display = "none";
    // هذا الكود الطويل بيجيب لك الالمنت اللي بعد الاي دي بالضبط
    repeatPassWord.nextElementSibling.style.opacity = "1";
  } else {
    repeatPassWord.classList.remove("success");
    repeatPassWord.nextElementSibling.style.opacity = "0";
  }

  if (repeatPassWord.value.length == 0) {
    repeatPassWord.classList.remove("success");
    repeatPassWord.nextElementSibling.style.opacity = "0";

    repeatPassWord.classList.remove("error");
    rePswMessage.style.display = "none";
  }

  activeSign()
});
