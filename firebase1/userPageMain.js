


console.log("userPageMainJsFile >>>>>>>>>>>>>>>>>>>>  Log");

var retrievedUserObject = localStorage.getItem('userObject');
if(retrievedUserObject !== ""){

var jsonObj = JSON.parse(retrievedUserObject);

console.log(jsonObj);
document.getElementById("nekodugme").addEventListener('click', ()=>{
    // var retrievedUserObject2 = localStorage.getItem('userObject');
    // console.log(JSON.parse(retrievedUserObject2));
    localStorage.setItem('userObject',"");

     window.location.href = "/index.html";
 
})

let app = document.getElementById("app");

let heder1 = document.createElement("h1");
heder1.innerText=jsonObj[0].name;

app.append(heder1)

jsonObj.forEach(el => {
    //console.log(123);
      let divUser = document.createElement("div");
      let p1 = document.createElement("p");
      let btn = document.createElement("button");
      p1.innerText=el.name+" "+el.gender;
      btn.addEventListener('click',function(){
        localStorage.setItem('curentUser', JSON.stringify(el));
        window.location.href = "/curentuser.html";
      })
      btn.innerText='Dugme'
      divUser.append(p1,btn);
      app.appendChild(divUser)

});

}else{
  console.log("nece moci UserPageMain.js");
}
