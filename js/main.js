//dark mode code
const body = document.getElementById("body");
const change = document.getElementById("change-color");

change.addEventListener("click", (eo) => {
  body.classList.toggle("dark-mode")
});

//whin hover on change color this code will active
const hiddenul = document.getElementById("hiddenUl");
const hover = document.getElementById("hover");

hover.addEventListener("mousemove", (eo) => {
  hiddenul.classList.add("active");
});

hover.addEventListener("mouseout", (eo) => {
  hiddenul.classList.remove("active");
});


//after hover on change color these code will active
const headerbg = document.getElementById("headerbg");
const titlebg = document.getElementById("titlebg");
const titlecolor = document.getElementById("titlecolor");
const sectionbg = document.getElementById("sectionbg");


//whin click on header BG
const header = document.getElementById("headerr");

headerbg.addEventListener("click", (eo) => {
  const num = Math.round(Math.random() * 360);
  const wnum = Math.round(Math.random() * 100);
  header.style.backgroundColor = `hsl( ${num}, 45%, 70%)`;
  // ضروري تستخدم `` ويكون بداخلها ${} عشان تقدر تشتغل
  const changeMode = document.querySelector("#change-color");
  changeMode.style.backgroundColor = `hsl( ${wnum}, 45%, 70%)`
});


//whin click on title Bg
titlebg.addEventListener("click", (eo) => {
const myh1 = document.querySelectorAll("h1:not(#headerr > h1)");
const num = Math.round(Math.random() * 360);

myh1.forEach(item => {
  item.style.backgroundColor = `hsl( ${num}, 45%, 70%)`;
});
});

const ChangeColor = () => {
  return Math.round(Math.random() * 360);
}


//whin click on title color
titlecolor.addEventListener("click", (eo) => {
  const myh1 = document.querySelectorAll("h1:not(#headerr > h1)");
  const num = Math.round(Math.random() * 360);
  
  myh1.forEach(item => {
    item.style.color = `hsl( ${num}, 45%, 70%)`;
  });
});

sectionbg.addEventListener("click", (eo) => {
  const allscetion = document.querySelectorAll("section");
  const random = Math.random().toString(16).slice(2, 8);
  // slice() بتاخذ قطعة من السترينغ بتبدا تعد من الصفر 
  //while باستخدام
  let i = 0;
  while (i < allscetion.length) {
    const item = allscetion[i];
    
    item.style.backgroundColor = `#${random}`;
    i++
  }

});


// make h1 in header auto writing
const firstH1 = document.getElementById("firstH1");
let i = 1;

const testfun = () => {
  const text = innerHTML = `hello i'm taha`;
  firstH1.innerText = text.slice(0, i);
  i++

  if (i > text.length) {
    // i = 0; auto writing
    clearInterval(stopfun);
  }
}

const stopfun = setInterval(testfun, 300);


// whin click on random video button these code will active
const randomVideo = document.getElementById("randomVideo");
const iframe = document.getElementById("containeriframe");
let x = 0;

randomVideo.addEventListener("click", (eo) => {
const videoarr = [
`<iframe id="video" src="https://www.youtube.com/embed/uheOkfZgUf0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
`<iframe id="video" src="https://www.youtube.com/embed/txAK36ygpYs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
`<iframe id="video" src="https://www.youtube.com/embed/MSTHbT8ZuCs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
]

iframe.innerHTML = videoarr[x];
x++

if (x > (videoarr.length -1)) {
  x = 0;
}
});

// whin click on random quote button these code will active
const quotes = document.getElementById("containerquote");
const randomQoute = document.getElementById("randomquote");

randomQoute.addEventListener("click", (eo) => {
  const myqoutes = [
    `<blockquote class="sidekick">مثال لكلام عشوائي بيطلع لما بضغط<br><cite>طه</cite></blockquote>`,
    `<blockquote class="sidekick">كلام عشوائي ماله داعي فقط للمثال<br><cite>طه</cite></blockquote>`,
    `<blockquote class="sidekick">رح اتوظف باذن الله<br><cite>طه</cite></blockquote>`
  ]

  quotes.innerHTML = myqoutes[x];
  x++

  if (x > (myqoutes.length -1)) {
    x = 0;
  }
});


// whin click on congratulations button these code will active
const imojebutton = document.getElementById("randomimoje");
const containeremoje = document.querySelector(".containeremoje");

imojebutton.addEventListener("click", (eo) => {
  // هذا الديف وظيفته يكون وعاء للنجوم المضافة وبينحذف بعد 4 ثواني
  // بيتم انشائه اول مابضغط الزر طبعا محطوط برا السيت انترفال مشان يشتغل
  const newcontainer = document.createElement("div");
  containeremoje.append(newcontainer);

  const imojeanimation = setInterval(() => {
    // بهذا الديف رح يتم انشاء النجوم ووضعها تلقائيا على الصفحة
    const star = document.createElement("div");
    star.classList.add("star");
    star.innerHTML = `&#11088;`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDuration = `${(Math.random() + 0.5) * 2}s`;

    newcontainer.append(star);

    const one100 = document.createElement("div");
    one100.innerHTML = `&#128175;`;
    one100.classList.add("star");
    one100.style.left = `${Math.random() * 100}%`;
    one100.style.animationDuration = `${(Math.random() + 0.5) * 2}s`;

    newcontainer.append(one100);
  }, 50);

  setTimeout(() => {
    clearInterval(imojeanimation, 2000);
  }, 3000);

  setTimeout(() => {
    newcontainer.remove();
  }, 6000);

  // دائما اذا بدك تستخدم الشي باكثر من مكان حطه بفنكشن خارجية
});


// whin click on plus (+) these code will active and answer will appear
const plus = document.querySelectorAll(".plus");

plus.forEach(item => {
  item.addEventListener("click", (eo) => {
    const content = eo.target.parentElement.parentElement.getElementsByClassName("answer")[0];
    content.classList.toggle("animation");
    
    // content height
    // الشرط عبارة عن اذا كان الايتم يحتوي على الكلاس هذا فنفذ هذه الاكواد
    if (content.classList.contains("animation")) {
                          // ماخليتها اوتو عشان الانميشن يشتغل
      content.style.height = `${content.scrollHeight + 20}px`;
    } else {
      content.style.height = `0`;
    }

    //  + & - 
    item.classList.toggle("hide-plus");
    // contains = يحتوي
    // الشرط عبارة عن اذا كان الايتم يحتوي على الكلاس هذا فنفذ هذه الاكواد
    if (item.classList.contains("hide-plus")) {
      item.innerHTML = `-`;
    } else {
      item.innerHTML = `+`;
    }
  });
});

// clock section
const clockContainer = document.getElementById("clockContainer");
const digtalClock = () => {
  const now = new Date();

  let sec = now.getSeconds();
  let min = now.getMinutes();
  let huors = now.getHours();
  let date = now.toDateString();
  let pmam = "am";

  if (huors > 12) {
    huors = huors - 12;
    pmam = "pm";
  }

  if (sec < 10) {
    sec = `0${sec}`;
  }

  if (min < 10) {
    min = `0${min}`;
  }

  if (huors < 10) {
    huors = `0${huors}`;
  }

  if (huors == 0) {
    huors = `12`;
  }

  const clock = `
    <div class="date">${date}</div>
    <div class="time">${huors} : ${min} : ${sec} ${pmam}</div>
  `;
  clockContainer.innerHTML = clock;
}

setInterval(digtalClock, 1000);