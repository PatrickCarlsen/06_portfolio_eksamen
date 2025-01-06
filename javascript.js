const switchButton = document.getElementById("switch");
const body = document.body;

let isDarkMode = false;

body.classList.add("darkmode");
switchButton.src = "IMGS/darkbutton.svg";

switchButton.addEventListener("click", function () {
  if (isDarkMode) {
    //Light mode
    body.classList.remove("darkmode");
    body.classList.add("lightmode");
    switchButton.src = "IMGS/whitebutton.svg";
  } else {
    //Dark mode
    body.classList.remove("lightmode");
    body.classList.add("darkmode");
    switchButton.src = "IMGS/darkbutton.svg";
  }

  // Skifter imellem - ! vender værdien / boolean.
  // og fortæller at tilstanden skal skifter hver gang knappen trykkes.
  isDarkMode = !isDarkMode;
});
