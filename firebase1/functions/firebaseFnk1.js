var firebaseConfig = {
  apiKey: "AIzaSyAaNceFdTg4g-86wIR8R95q0eEOndG2ZmE",
  authDomain: "myfirstproject-1b7bc.firebaseapp.com",
  databaseURL: "https://myfirstproject-1b7bc-default-rtdb.firebaseio.com",
  projectId: "myfirstproject-1b7bc",
  storageBucket: "myfirstproject-1b7bc.appspot.com",
  messagingSenderId: "932787225168",
  appId: "1:932787225168:web:ee39b18787e4e9e4944755"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);




function firebaseFnk1(name, password, email, file){
    console.log(name, password, email);
    console.log("_________________________________________________________________________________");
    // var firebaseConfig = {
    //     apiKey: "AIzaSyAaNceFdTg4g-86wIR8R95q0eEOndG2ZmE",
    //     authDomain: "myfirstproject-1b7bc.firebaseapp.com",
    //     databaseURL: "https://myfirstproject-1b7bc-default-rtdb.firebaseio.com",
    //     projectId: "myfirstproject-1b7bc",
    //     storageBucket: "myfirstproject-1b7bc.appspot.com",
    //     messagingSenderId: "932787225168",
    //     appId: "1:932787225168:web:ee39b18787e4e9e4944755"
    //   };
    //   // Initialize Firebase
    //   firebase.initializeApp(firebaseConfig);

      let ref = firebase.storage().ref("myPictures/");
      let myname = new Date()+" - "+file.name;
      let metadata = {
        contentType: file.type
      }
      let task = ref.child(myname).put(file, metadata);

        task.then(snapshot => snapshot.ref.getDownloadURL())
        .then(url =>{
          console.log(url);
          alert("uspesno uploadovana slika")
        })


      // let uploadTask = firebase.storage().ref("myPictures/"+name).put(file);

      // uploadTask.on("state_changed",function(){

      //   uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
          
      //       console.log(url);
      //       console.log(name);
      //       console.log(password);
      //       console.log(email);
 
      //     })



      //  }) //   ovde je kraj ove glupe prvobitne funkcije koja je pravila greske

    //  firebase.database().ref('myJSApp/'+name).set({
    //         name:name,
    //         password:password,
    //         email:email

    //   })


}

export default firebaseFnk1;
