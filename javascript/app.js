// inclusive ichidagi % li aylana qiymatlari

let shape1Qiymati = 60;
let shape2Qiymati = 52;
const shape_1 = document.getElementById("cub-shape-1");
const shape_2 = document.getElementById("cub-shape-2");
const shapeValue = document.getElementById("shape-value");

shapeValue.textContent = shape1Qiymati;

const shape1_style = `conic-gradient(
  #134A45 0%,
  #134A45 ${shape1Qiymati}%,
  #CBD0D5 ${shape1Qiymati}%,
  #CBD0D5 100% 
  );`;

const shape2_style = `conic-gradient(
    #508883 0%,
    #508883 ${shape2Qiymati}%,
    #96c9e9 ${shape2Qiymati}%,
    #96c9e9 100% 
);`;

shape_1.setAttribute("style", `background: ${shape1_style}`);
shape_2.setAttribute("style", `background: ${shape2_style}`);

//           team swiper
const teamSwipetLeftBtn = document.getElementById("t-s-left-btn");
const teamSwipetRightBtn = document.getElementById("t-s-right-btn");
const swiperItems = document.querySelector(".swiper-items");

swiperItems.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  swiperItems.scrollLeft += evt.deltaY;
  swiperItems.style.scrollBehavior = "auto";
});

teamSwipetRightBtn.addEventListener("click", () => {
  swiperItems.style.scrollBehavior = "smooth";
  swiperItems.scrollLeft += 380;
});

teamSwipetLeftBtn.addEventListener("click", () => {
  swiperItems.style.scrollBehavior = "smooth";
  swiperItems.scrollLeft -= 380;
});

// team swiper item json data
const teamsWiperItem = document.querySelectorAll(".swiper-items .item");

const teamGetTodos = (resurse) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.response);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("Ma'lumot olinmadi ?!");
      }
    });
    request.open("GET", resurse);
    request.send();
  });
};


teamGetTodos("./teamItems.json")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
