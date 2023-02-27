const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("You need to fill all the fields!");
  }

  const objectInput = `Email: ${email.value}, Password: ${password.value}`;
  event.currentTarget.reset();
}
