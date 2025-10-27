//event selector

const login = document.getElementById("loginBtn");
const dialog = document.getElementById("loginDialog");

const closeBtn = document.querySelector("#closeBtn");

login.addEventListener("click", () => {
  console.log("you click login btn");
  dialog.showModal();
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    console.log("you click handler");
    dialog.close();
  }
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});

// const events = ["blur", "click", "change","mousemove","mouseover"];

// events.forEach((events) => {
//   closeBtn.addEventListener(events, () => {
//     console.log("you close");
//     // console.log("top",rect.top)
//     dialog.close();
//   });
// });
