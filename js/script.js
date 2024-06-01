import avatar from "./avatar.js";
let users   = [
    {
        name: "ahmed shoieb",
        avatar:"",
        
    },
    {
        name: "mohamed shoieb",
        avatar:"",
    },
    {
        name: "mahmoud shoieb",
        avatar:"https://www.w3schools.com/bootstrap4/img_avatar1.png",
    },
    {
        name: "ali shoieb",
        avatar:"https://www.w3schools.com/howto/img_avatar2.png",
    },
    {
        name: "shoieb shoieb",
        avatar:"https://www.w3schools.com/bootstrap4/img_avatar1.png"
    }

];

console.log(users)
document.addEventListener('DOMContentLoaded',function(){
    let container = document.querySelector(".app");
    let listOfusers= document.createElement("div");
    listOfusers.className="all"
    users.forEach((user)=>{
       let userElementcard = document.createElement('div');
       userElementcard.classList.add("card")
       userElementcard.innerText=user.name
       
       userElementcard.prepend(avatar(user.name , user.avatar))
       listOfusers.append(userElementcard)
       container.append(listOfusers)
    })
    

})