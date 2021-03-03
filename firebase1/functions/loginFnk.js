import userData from "../userData.js"

function loginFnk(inputName) {
    
console.log(userData);
userData.forEach(el=>{
     if(el.name===inputName){
         console.log(true);
         localStorage.setItem('userObject', JSON.stringify(userData));
        // window.location.replace("/userPage.html");
         window.location.href = "/userPage.html";
         
     }else{
         console.log("ma ajde bezi bre u *****");
           return false;
        }

})
    


}

export default loginFnk;

