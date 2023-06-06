const formInput = document.querySelector("#validation-input");

formInput.addEventListener("blur", (a) => {
  if (a.currentTarget.value.length === Number(formInput.dataset.length)) {
    formInput.classList.add("valid");
    formInput.classList.remove("invalid");
  } else {
    formInput.classList.add("invalid");
    formInput.classList.remove("valid");
  }
});
