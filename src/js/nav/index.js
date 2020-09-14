const hamburger = document.querySelector(".hamburger-icon");
const links = document.querySelector(".links");
hamburger.addEventListener("click", (e) => {
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
});
