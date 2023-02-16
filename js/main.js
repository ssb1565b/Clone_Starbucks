// Main Header

// Search
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
const searchIconEl = searchEl.querySelector("span");

// searchEl.addEventListener("mouseover", function () {
//   searchInputEl.focus();
//   searchInputEl.setAttribute("placeholder", "통합검색");
// });

// // blur시 내용 사라짐 1
// searchInputEl.addEventListener("blur", function (e) {
//   e.target.value = "";
// });

// // blur시 내용 사라짐 2
// searchIcon.addEventListener("click", function () {
//   searchInputEl.toggleAttribute("focus");
//   console.log(searchInputEl.outerHTML.includes("focus"));
//   if (searchInputEl.outerHTML.includes("focus")) {
//     searchInputEl.focus();
//     searchInputEl.setAttribute("placeholder", "통합검색");
//   } else {
//     searchInputEl.setAttribute("placeholder", "");
//   }
// });

let isNotSearchClick = false;

document.addEventListener("click", function (e) {
  if (!e.target.classList.contains("material-symbols-outlined")) {
    isNotSearchClick = true;
  } else {
    isNotSearchClick = false;
  }
});
searchIconEl.addEventListener("mouseover", function () {
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("mouseover", function () {
  searchInputEl.setAttribute("placeholder", "");
});

searchIconEl.addEventListener("click", function () {
  if (!searchEl.classList.contains("active")) {
    searchEl.classList.add("active");
    searchInputEl.focus();
    searchInputEl.setAttribute("placeholder", "통합검색");
  } else if (isNotSearchClick) {
    searchInputEl.focus();
    searchInputEl.setAttribute("placeholder", "통합검색");
    isNotSearchClick = false;
  } else {
    searchEl.classList.remove("active");
  }
});

searchInputEl.addEventListener("blur", function () {
  searchInputEl.setAttribute("placeholder", "");
});

// ================== 나중에 살펴보자...
// SWIPER
// SWIPER NOTICE
const swiperNotice = new Swiper(".notice .notice-line .inner__left .swiper", {
  direction: "vertical",
  loop: true,
  autoplay: true,
});

// SWIPER PROMOTION
const swiperPromotion = new Swiper(".notice .promotion .swiper", {
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 1500,
    // disableOnInteraction: false,
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    type: "bullets",
  },
  navigation: {
    prevEl: ".promotion .swiper-button-prev",
    nextEl: ".promotion .swiper-button-next",
  },
});

// autuPlay 컨트롤
function controlAutoPlay() {
  console.log(swiperPromotion.autoplay.running);

  if (swiperPromotion.autoplay.running === false) {
    swiperPromotion.autoplay.start();
    swiperPromotion.autoplay.delay(100);
  } else {
    swiperPromotion.autoplay.stop();
  }
}

// Toggle Promotion
const promotionSection = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".notice .toggle-promotion");
const Icon = document.querySelector(
  ".bg-right .toggle-promotion .material-symbols-outlined"
);
promotionToggleBtn.addEventListener("click", function () {
  if (promotionSection.classList.contains("hide")) {
    promotionSection.classList.remove("hide");
    Icon.style.transform = "rotate(180deg)";
    // 이 방법도 있지만 css는 css 파일에서 관리하는 방향으로 해보기  === classList.add()로 하기
  } else {
    promotionSection.classList.add("hide");
    Icon.style.transform = "rotate(0deg)";
  }
});

// Visual Animation
window.onload = function () {
  const visualSection = document.querySelector(".visual");
  visualSection.classList.add("animate");
};

// Scroll Animation
// 엘살바도르
const store = this.document.querySelector(".store");
const magazine = this.document.querySelector(".magazine");
const favorite = this.document.querySelector(".favorite");
const ethiopia = this.document.querySelector(".ethiopia");
const elsalvador = this.document.querySelector(".elsalvador");
window.addEventListener("scroll", function () {
  console.log(window.scrollY);

  if (window.scrollY > 2200) {
    store.classList.add("animate");
  } else if (window.scrollY > 2000) {
    magazine.classList.add("animate");
  } else if (window.scrollY > 1500) {
    favorite.classList.add("animate");
  } else if (window.scrollY > 800) {
    ethiopia.classList.add("animate");
  } else if (window.scrollY > 500) {
    elsalvador.classList.add("animate");
  }
});
