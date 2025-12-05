const button = document.getElementById("toggle-btn");
const hidden = document.getElementById("hidden-content");

button.addEventListener("click", () => {
  if (hidden.style.display === "none") {
    hidden.style.display = "block";
    button.textContent = "Hide Mystery";
  } else {
    hidden.style.display = "none";
    button.textContent = "Show More Mystery";
  }
});
