const helloButton = document.getElementById("helloButton");
const message = document.getElementById("message");

helloButton.addEventListener("click", () => {
  message.textContent = "It works! Your JavaScript is running. 🎉";
});
