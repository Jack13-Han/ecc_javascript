

//selector 

const loginBtn=document.querySelector("#loginBtn")
const loginDialog =document.querySelector("#loginDialog")
const closeBtn=document.querySelector("#closeBtn")

//logic Function

const openLoginDialog =() => {
    console.log("click")
    loginDialog.showModal();
}


const closeLoginDialog = () => {
    console.log("close login")
    loginDialog.close();
}


const handleOutsideClick =(event) => {
    if(event.target === loginDialog){
    loginDialog.close();

    }
}
// const events =["click",]


//action

loginBtn.addEventListener("click",openLoginDialog)
closeBtn.addEventListener("click",closeLoginDialog)


// events.forEach((event) => {
//     closeBtn.addEventListener(event,closeLoginDialog)
// })

