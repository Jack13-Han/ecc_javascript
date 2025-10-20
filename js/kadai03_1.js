//event select
const title = document.getElementById("title");
const message = document.getElementById("message");

const showBtn = document.getElementById("showBtn");
const modalBtn = document.getElementById("modalBtn");

const dialog = document.getElementById("infoDialog");
const closeBtn = document.getElementById("closeBtn");

const content = document.getElementById("dialogContent");

showBtn.addEventListener("click", () => {
    console.log("=====consone.log の場合=======")
    console.log(title)
console.log(message)
    console.log("=====consone.log の場合=======")
console.dir(title)
console.dir(message)
   console.log(title.innerText)
   console.log(message.innerHTML)
});

modalBtn.addEventListener("click", () => {
  console.log("click");
  dialog.showModal();
});

// closeBtn.addEventListener("click", () => {
//   console.log("close");
//   dialog.getBoundingClientRect()
//   dialog.close();
// });




// dialog.onclick =(event) => {
//    {
//   if(event.target == dialog || event.target.tagName=='body'){
// } 
// }
// }


const events = ["blur", "click", "change","mousemove","mouseover"];

events.forEach((events) => {
  closeBtn.addEventListener(events, () => {
    console.log("you close");
    // console.log("top",rect.top)
    dialog.close();
  });
});


message.addEventListener("mousemove",() => {
    console.log("mousemove")
})