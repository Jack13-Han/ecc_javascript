// event handler
const inputName = document.querySelector("#userName");
const textName = document.querySelector("#userComment");
const form = document.querySelector("#feedbackForm");

//result output
const result = document.querySelector("#result");

form.addEventListener("submit",(e) => {
    console.log(e.target)
})

form.addEventListener("submit", (event) => {
  event.preventDefault();



//   console.log(inputName.value);
//   console.log(textName.value);
//   console.log("submit");


  result.innerHTML =` 
    <h1>お名前 :  ${inputName.value} </h1>
      <h4>ご意見 :  ${textName.value}</h4>
  
  ` ;

  inputName.value = "";
  textName.value = "";
});

