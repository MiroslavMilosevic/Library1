import firebaseFnk1 from "./functions/firebaseFnk1.js"

//console.log("blablabla");
let curentUser =  localStorage.getItem('curentUser');


function repaintAddForm(divForRepaint) {

    let input1 = document.createElement("input");
    let input2 = document.createElement("input");
    let input3 = document.createElement("input");
    let input4 = document.createElement("input");
    let input5 = document.createElement("input");
    let submitButton = document.createElement("button");

    input1.type="text"; 
    input1.placeholder="your username";
    input1.id="username"
    input2.type="password"; 
    input2.placeholder="your password";
    input2.id="password"
    input3.type="email"; 
    input3.placeholder="your email";
    input3.id="email"
    input4.type="file"; 
    input4.placeholder="your file here";
    input4.id="file"
    input5.type="file"; 
    input5.placeholder="your file here";
    input5.id="file2"
    submitButton.innerText="Uplaod";
    submitButton.addEventListener('click', function(){
        console.log('555-333');
        let name = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let email = document.getElementById("email").value;
        let file = document.getElementById("file");
        let file2 = document.getElementById("file2");
       // console.log(file.value);
        console.log(file.files[0]);
        firebaseFnk1(name, password, email, file.files[0]);
        firebaseFnk1(name, password, email, file2.files[0]);
    })
    divForRepaint.innerHTML='';
    divForRepaint.append(input1,input2,input3,input4,input5 ,submitButton);
    


}

if(curentUser!==""){
    let curentUserObj = JSON.parse(curentUser);
let userAppDiv = document.getElementById("userAppDiv")
let p1 = document.createElement('p')
p1.innerText=curentUserObj.name
userAppDiv.appendChild(p1)

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
btn1.addEventListener('click', function(){
    console.log(12345);
      repaintAddForm(userAppDiv);
})
}/// if upit
else{
    console.log("nece moci");
}
// btn2.addEventListener('click', function(){

// })
