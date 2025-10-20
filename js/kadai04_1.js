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

    const name = inputName.value;
    const text =textName.value;

    // result.textContent = ` お名前 : ${name}\nご意見: ${text}`


  result.innerHTML =` 
    <h1>お名前 :  ${name} </h1>
      <h4>ご意見 :  ${text}</h4>
  
  ` ;

  inputName.value = "";
  textName.value = "";
});

