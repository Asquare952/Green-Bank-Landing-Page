// mobile navigation menu logics
const sideBarToggleBtn = document.querySelector(".menu-bar");
const closeSideBar = document.querySelector(".close-icon");
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
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-answer");
      }
    });

    question.classList.toggle("show-answer");
  });
});
