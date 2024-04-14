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
  swiperItems.scrollLeft += 400;
});

teamSwipetLeftBtn.addEventListener("click", () => {
  swiperItems.style.scrollBehavior = "smooth";
  swiperItems.scrollLeft -= 400;
});

// team swiper item json data

const teamGetTodos = (callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState == 4 && request.status == 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState == 4) {
      callback("Ma'lumot olinmadi", undefined);
    }
  });

  request.open("GET", "./json/team-items.json");
  request.send();
};

teamGetTodos((err, data) => {
  if (data) {
    data.forEach((product) => {
      swiperItems.innerHTML += `
      <div>
              <div class="item" style="background-color: ${product.itemBgColor}">
                <h2 class="title">${product.itemTitle}</h2>

                <p class="text">${product.itemText}</p>

                <button class="swiper-item-btn">
                  <img src="./img/right_icon.svg" alt="ut" />
                </button>
              </div>
            </div>
      `;
    });
  } else if (err) {
    console.log(err);
  }
});

// SLIDE BLOC SWIPERINI YASAYMIZ

const slideSwiper = document.querySelector(".slide-gallery");
const slide_next = document.getElementById("slide-btn-right");
const slide_back = document.getElementById("slide-btn-left");

slideSwiper.addEventListener("wheel", (e) => {
  e.preventDefault();
  slideSwiper.scrollLeft += e.deltaY;
  slideSwiper.style.scrollBehavior = "auto";
});

slide_next.addEventListener("click", () => {
  slideSwiper.style.scrollBehavior = "smooth";
  slideSwiper.scrollLeft += 1100;
});

slide_back.addEventListener("click", () => {
  slideSwiper.style.scrollBehavior = "smooth";
  slideSwiper.scrollLeft -= 1100;
});
