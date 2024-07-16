// mobile navigation menu logics
const sideBarToggleBtn = document.querySelector(".fa-bars");
const closeSideBar = document.querySelector(".fa-xmark");
const sideBar = document.querySelector(".side-bar-main");
const aside = document.querySelector(".side-bar-main");
sideBarToggleBtn.addEventListener("click", function () {
  sideBar.classList.toggle("show-sidebar");
});

closeSideBar.addEventListener("click", function () {
  sideBar.classList.remove("show-sidebar");
});

aside.addEventListener("click", function () {
  sideBar.classList.remove("show-sidebar");
});

// FAQs logic
const questions = document.querySelectorAll(".faqs");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-container");

  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-answer");
      }
    });

    question.classList.toggle("show-answer");
  });
});

// fixed nav bar
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
  const scrollHeight = window.scrollY;

  // set up back to top
  if (scrollHeight > 500) {
    console.log("helo");
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});
