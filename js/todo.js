const toDoForm = document.querySelector(".todoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todoList");
let toDoArr = [];

function loadToDos(){
  const toDos = localStorage.getItem('toDos');
  if(toDos !== null){
    const parsedToDos = JSON.parse(toDos);
    parsedToDos.forEach(function(data){
      paintToDo(data.text);
    });
  } 
} //로컬스토리지에 저장된 투두값이 널이아니면 그림

function saveToDos(){
  localStorage.setItem('toDos',JSON.stringify(toDoArr));
} //로컬스토리지에 저장



function deleteToDo(event){
  const li = event.target.parentNode;
   toDoList.removeChild(li);
   const cleanToDos = toDoArr.filter(function(toDo){

     return toDo.id!==parseInt(li.id);
   });
    toDoArr = cleanToDos;
    saveToDos();
}

function paintToDo(text){

  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerHTML = "🔖";
  delBtn.addEventListener("click",deleteToDo);
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = toDoArr.length + 1;
  toDoList.appendChild(li);
  const toDoObj = {
    text : text,
    id : toDoArr.length +1
  };
  toDoArr.push(toDoObj);
  saveToDos();
} //view에 투두리스트 그림

function handleSubmit(e){
  e.preventDefault();
  const curVal = toDoInput.value;
  if(curVal === ""){
    alert("...༼◉_◉ ༽...");
  } //공백일땐 추가 X
  
  else{
     paintToDo(curVal);
     toDoInput.value ="";
  } //공백아닐때 투두리스트를 화면에 그림
 
}


function init(){
 loadToDos();
 toDoForm.addEventListener("submit", handleSubmit);
}


init();