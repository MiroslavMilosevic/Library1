

// import userData from "./userData.js"
import loginFnk from "./functions/loginFnk.js"

let myButton = document.getElementById("myButton");
myButton.addEventListener('click', function () {
  let nameInput = document.getElementById("nameInput");

  ////////////////////////////

  let isSucsses = loginFnk(nameInput.value);

  if(!isSucsses){

    nameInput.value="podaci nisu ispravni"
    nameInput.setAttribute("style", "background-color:red")
  }
  ////////////////////////////



})


