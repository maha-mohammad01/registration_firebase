
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js'   
import { getDatabase, ref , set , get , child } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDDVS6hZxlOMMIios-YRNF9ZemlDmM27BE",
    authDomain: "form-afff0.firebaseapp.com",
    projectId: "form-afff0",
    storageBucket: "form-afff0.appspot.com",
    messagingSenderId: "29357814102",
    appId: "1:29357814102:web:676cb2bd996d2fd80126f7"
  };

 


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db=getDatabase(app);

  let uname=document.getElementById("uname")
  let password =document.getElementById("password")
  let email=document.getElementById("email")
  let phone=document.getElementById("phone")

  let submit=document.getElementById("submit");

  submit.addEventListener("click",(e)=>{
    e.preventDefault();
  
  const unamepattern=/^\S+$/;
  if (!unamepattern.test(uname.value)){
  alert("enter yor name without space")
return;
}
const passwordPattern = /^(?=.*\d)(?=.*[A-Z])(?=.*\W).{8,}$/;
  if (!passwordPattern.test(password.value)) {

alert("The password must be more than 8 characters and contain a number, an uppercase letter, and a special character.")

    return;
  }

const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (!emailPattern.test(email.value)) {
  alert("The email is invalid.")
  return;
}

const phonePattern = /^07\d{8}$/;
if (!phonePattern.test(phone.value)) {
  alert("Invalid phone number. Must be 10 digits long and start with 07")
  return;
}


set(ref(db, 'user/' + document.getElementById("uname").value), {
    uname: uname.value,
    password: password.value,
    email: email.value,
    phone: phone.value,
  });
alert("Saved Data")


  let obj = {
    uname:uname.value,
    password:password.value,
    email:email.value,
    phone:phone.value,
}

createUserWithEmailAndPassword(auth, obj.email , obj.password)
.then(function(success){

alert("Sign up Successfully")
})
.catch(function(err){
alert("error"+ err);
})

  
});


