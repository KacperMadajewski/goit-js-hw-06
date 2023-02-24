const textInput = document.querySelector("#validation-input");
const dataLength = Number(textInput.getAttribute("data-length"));
console.log(dataLength);
textInput.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === dataLength) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});
