// array img
const arrimg = [
  `<img src="/img/1.jpg" class="planet-img">`,
  `<img src="/img/2.jpg" class="planet-img">`,
  `<img src="/img/3.jpg" class="planet-img">`,
  `<img src="/img/4.jpg" class="planet-img">`,
  `<img src="/img/5.jpg" class="planet-img">`
];

const sliderContainer = document.getElementById("sliderContainer");
const pre = document.getElementById("pre");
const next = document.getElementById("next");
const numButtons = document.querySelector(".num-buttons");
const btnNum = document.querySelectorAll(".btnNum");


// these code for img and slide #1 of 5
let I = 0;
sliderContainer.innerHTML += arrimg[I];
sliderContainer.innerHTML += `<p class="slide-p">slide #${I+1} of ${arrimg.length}</p>`;
pre.setAttribute("disabled", "");

// whin click on next button these code will active
next.addEventListener("click", (eo) => {

  I++
  sliderContainer.innerHTML += arrimg[I];
  sliderContainer.innerHTML += `<p class="slide-p">slide #${I+1} of ${arrimg.length}</p>`;

  if (I == 1) {
    pre.removeAttribute("disabled");
  }

  if (I == (arrimg.length -1)) {
    next.setAttribute("disabled", "");
  }
  // لما بتضغط زر نيكست بيشيل الاكتف من على الزر ويضيفه على الزر يلي بعده
  numButtons.getElementsByClassName("active-num")[0].classList.remove("active-num");
  numButtons.getElementsByTagName("button")[I].classList.add("active-num");
});

// whin click on pre button these code will active
pre.addEventListener("click", (eo) => {
  I--
  sliderContainer.innerHTML += arrimg[I];
  sliderContainer.innerHTML += `<p class="slide-p">slide #${I+1} of ${arrimg.length}</p>`;

  if (I == 3) {
    next.removeAttribute("disabled");
  }

  if (I == 0) {
    pre.setAttribute("disabled", "");
  }

  // لما بتضغط زر بري بيشيل الاكتف من على الزر ويضيفه على الزر يلي قبله
  numButtons.getElementsByClassName("active-num")[0].classList.remove("active-num");
  numButtons.getElementsByTagName("button")[I].classList.add("active-num");
});

// number buttons 
// ضروري تفهم الاندكس ليش حطيته مع الايتم وبسببه بحسن اضغط على الزر وينقلني للصورة يلي موجوده بالاندكس
btnNum.forEach((item, index) => {
  item.addEventListener("click", (eo) => {
    numButtons.getElementsByClassName("active-num")[0].classList.remove("active-num");

    item.classList.add("active-num");

    // خليت الأي تساوي الاندكس عشان لما بتضغط على الزر حتى الاي بتتغير ومابيخرب الكود
    I = index;
    sliderContainer.innerHTML = arrimg[index];
    sliderContainer.innerHTML += `<p class="slide-p">slide #${index+1} of ${arrimg.length}</p>`;

    // last index
    if (index == (arrimg.length -1)) {
      next.setAttribute("disabled", "");
      pre.removeAttribute("disabled");
    }
    // first index
    else if (index == 0) {
      next.removeAttribute("disabled");
      pre.setAttribute("disabled", "");
    } else {
      pre.removeAttribute("disabled");
      next.removeAttribute("disabled");
    }
  });
});


// toggle tabs section 
const allTabs = document.getElementById("alltabs");
const arrCountry = document.querySelectorAll(".country");
const parentOfFacts = document.getElementById("parent-of-facts");
const arrFacts = document.querySelectorAll(".facts");

// مثل الازرار المرقمة لما بتضغط على ازرتر الدولة بيحذف الاكتف كلاس وبينقله للزر يلي ضفطت عليه
arrCountry.forEach((item, index) => {
  item.addEventListener("click", (eo) => {
    allTabs.getElementsByClassName("active-country")[0].classList.remove("active-country");
    
    item.classList.add("active-country");
    
    // بيحذف كلاس الارتكل وبيحطه على الاندكس تبع ازرار الدولة بس بالفاكتس
    parentOfFacts.getElementsByClassName("active-facts")[0].classList.remove("active-facts");

    arrFacts[index].classList.add("active-facts");
  });
});
