let signUpEmial = document.getElementById("signUpEmial");
let username = document.getElementById("username");
let signUPPassword = document.getElementById("signUPPassword");
let signUpBtn = document.getElementById("signUpBtn");
let sigInEmail =document.getElementById('sigInEmail');
let signInPassword=document.getElementById('signInPassword')
let loginBtn=document.getElementById('log');
let failSignin =document.getElementById('fail');
let wrongSignin=document.getElementById('wrong');
let home=document.getElementById('home')

var userList=[]
if(localStorage.getItem("userContainer")!==null){
    
 var userList = JSON.parse(localStorage.getItem("userContainer"));

}


//////////// Events

 
if (signUpBtn) {
  signUpBtn.addEventListener("click", function () {
    signUp();
  });
}



if (loginBtn) {
  loginBtn.addEventListener("click", function () {
    login();
  });
}




////////functions 


function isExist() {
  for (var i = 0; i < userList.length; i++) {
    if (userList[i].email === signUpEmial.value) return true;
  }
}

function signUp() {
  let failSignUp = document.getElementById("failSignUp");
  let exist = document.getElementById("exist");
  let success= document.getElementById("success");
  

  if (
    username.value === "" ||
    signUPPassword.value === "" ||
    signUpEmial.value === ""
  ) {
    failSignUp.classList.remove("d-none");
    exist.classList.add("d-none");
  
  } else if (isExist()) {
    exist.classList.remove("d-none");
     failSignUp.classList.add("d-none");


  } else {
    var user = {
      name: username.value,
      email: signUpEmial.value,
      password: signUPPassword.value,
    };
    userList.push(user);
    localStorage.setItem("userContainer", JSON.stringify(userList));
    success.classList.remove('d-none');
     exist.classList.add("d-none");
     failSignUp.classList.add("d-none");
  
     
  }
}


function login() {
  if (sigInEmail.value === "" || signInPassword.value === "") {
    failSignin.classList.remove("d-none");
    wrongSignin.classList.add("d-none");
    return;
  }

  let found = false;

  for (let i = 0; i < userList.length; i++) {
    if (
      userList[i].email.toLowerCase() === sigInEmail.value.toLowerCase() &&
      userList[i].password === signInPassword.value
    ) {
      localStorage.setItem("message", userList[i].name);
      window.location.href = "home.html"; // أفضل من window.open
      found = true;
      break;
    }
  }

  if (!found) {
    wrongSignin.classList.remove("d-none");
    failSignin.classList.add("d-none");
  }
}


   if(home){
     document.getElementById("welcome").innerHTML = 'welcome '+ localStorage.getItem("message");
   }
