// // check form has been completed
const form = document.querySelector("form");
if (form !== null) {
  const formInputs = form.elements;
  const submitBtn = document.getElementById("form-submit");

  const checkForm = () => {
    for (let index = 0; index < formInputs.length; index++) {
      const element = formInputs[index];
      if (element.value.length === 0) {
        element.classList.add("form-error");
        if (element.nextElementSibling) {
          element.nextElementSibling.style.display = "block";
        }
        submitBtn.disabled = true;
      }
      if (element.value.length > 0) {
        element.nextElementSibling.style.display = "none";
        element.classList.remove("form-error");
        submitBtn.disabled = true;
      }
    }
  };

  // if keydown on form, run the checkForm function
  form.addEventListener("keydown", (e) => {
    checkForm();
  });
}
