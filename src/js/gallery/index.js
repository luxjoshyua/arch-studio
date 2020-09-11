const projectOne = document.querySelector(".project-one");
const projectTwo = document.querySelector(".project-two");
const projectThree = document.querySelector(".project-three");
const projectFour = document.querySelector(".project-four");

const projects = document.querySelectorAll(".hero .project");
const navBtns = document.querySelectorAll(".hero .nav-btn");

if (projects[0]) {
  projects[0].classList.add("project-active");
}
if (navBtns[0]) {
  navBtns[0].classList.add("active");
}

navBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let target = e.target.innerHTML;
    // console.log(e);
    projects.forEach((project) => {
      project.classList.remove("project-active");
      //   project.classList.add("project-inactive");

      if (target === "01") {
        if (project.classList.contains("project-one")) {
          project.classList.add("project-active");
          project.classList.remove("project-inactive");
        }
        document.getElementById("btn1").classList.add("active");
        document.getElementById("btn2").classList.remove("active");
        document.getElementById("btn3").classList.remove("active");
        document.getElementById("btn4").classList.remove("active");
      }

      if (target === "02") {
        if (project.classList.contains("project-two")) {
          project.classList.add("project-active");
          project.classList.remove("project-inactive");
        }

        document.getElementById("btn2").classList.add("active");
        document.getElementById("btn1").classList.remove("active");
        document.getElementById("btn3").classList.remove("active");
        document.getElementById("btn4").classList.remove("active");
      }

      if (target === "03") {
        if (project.classList.contains("project-three")) {
          project.classList.add("project-active");
          project.classList.remove("project-inactive");
        }
        document.getElementById("btn3").classList.add("active");
        document.getElementById("btn1").classList.remove("active");
        document.getElementById("btn2").classList.remove("active");
        document.getElementById("btn4").classList.remove("active");
      }

      if (target === "04") {
        if (project.classList.contains("project-four")) {
          project.classList.add("project-active");
          project.classList.remove("project-inactive");
        }
        document.getElementById("btn4").classList.add("active");
        document.getElementById("btn1").classList.remove("active");
        document.getElementById("btn3").classList.remove("active");
        document.getElementById("btn2").classList.remove("active");
      }
    });
  });
});
