const userform = document.querySelector(".form");
const userinput = userform.querySelector("input");
const usergreeting = document.querySelector(".greetings");
const userbtn = document.querySelector("#userbtn");



function loadname() {
  const currentUser = localStorage.getItem("currentUser");
  if (currentUser === null) {
    userform.classList.add("showing");
  } else {
    userform.classList.remove("showing");
    usergreeting.classList.add("showing");
    usergreeting.innerHTML = ` ${currentUser}님 안녕하세요 !`;  
    userbtn.classList.remove("userhide");
    userbtn.classList.add("delUser"); 
  }
}

userform.addEventListener("submit", function (e) {

  e.preventDefault();
  userform.classList.remove("showing");
  usergreeting.classList.add("showing");
  usergreeting.innerHTML = `${userinput.value}님 안녕하세요 !`;
  userbtn.classList.remove("userhide");
  userbtn.classList.add("delUser");
  localStorage.setItem("currentUser", userinput.value);
});

userbtn.addEventListener("click",function(){
  usergreeting.classList.remove("showing");
  userbtn.classList.remove("delUser");
  userbtn.classList.add("userhide");
  userform.classList.add("showing");
  userinput.value="";
  localStorage.removeItem("currentUser");
})


loadname();