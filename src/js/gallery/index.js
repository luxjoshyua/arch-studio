const galleryItem = document.querySelectorAll(".nav-item span");
const projectOne = document.querySelector(".project-one");
const projectTwo = document.querySelector(".project-two");
const projectThree = document.querySelector(".project-three");
const projectFour = document.querySelector(".project-four");

const projects = document.querySelectorAll(".hero .project");
const navBtns = document.querySelectorAll(".hero .nav-btn");

const btn1 = document.getElementById("btn1");
if (btn1 !== null) {
  btn1.addEventListener("click", (e) => {
    projects.forEach((project) => {
      project.classList.add("project-inactive");
      project.classList.remove("project-active");
    });
    navBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    projectOne.classList.toggle("project-active");
    projectOne.classList.remove("project-inactive");
    btn1.classList.add("active");
  });
}

const btn2 = document.getElementById("btn2");
if (btn2 !== null) {
  btn2.addEventListener("click", (e) => {
    projects.forEach((project) => {
      project.classList.add("project-inactive");
      project.classList.remove("project-active");
    });
    navBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    projectTwo.classList.toggle("project-active");
    projectTwo.classList.remove("project-inactive");
    btn2.classList.add("active");
  });
}

const btn3 = document.getElementById("btn3");
if (btn3 !== null) {
  btn3.addEventListener("click", (e) => {
    projects.forEach((project) => {
      project.classList.add("project-inactive");
      project.classList.remove("project-active");
    });
    navBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    projectThree.classList.toggle("project-active");
    projectThree.classList.remove("project-inactive");
    btn3.classList.add("active");
  });
}

const btn4 = document.getElementById("btn4");

if (btn4 !== null) {
  btn4.addEventListener("click", (e) => {
    projects.forEach((project) => {
      project.classList.add("project-inactive");
      project.classList.remove("project-active");
    });
    navBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    projectFour.classList.toggle("project-active");
    projectFour.classList.remove("project-inactive");
    btn4.classList.add("active");
  });
}
