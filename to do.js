const inputBox = document.querySelector(".inputField input");
const addbtn = document.querySelector(".inputField button");
const todolist = document.querySelector(".todolist");
const deleteAllBtn = document.querySelector(".footer button");

inputBox.onkeyup = ()=>{
    let userData = inputBox.value;
    if(userData.trim()!=0){
        addbtn.classList.add("active");
    }else{
        addbtn.classList.remove("active");
    }
}
showTasks();
addbtn.onclick =()=>{
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
    addbtn.classList.remove("active");
}
function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage== null){
        listArr = [];
    }else{
      listArr = JSON.parse(getLocalStorage);
    }
    const pendingNumb = document.querySelector(".pendingNumb");
    pendingNumb.textContent = listArr.length;
    if(listArr.length > 0){
        deleteAllBtn.classList.add("active");
    }else{
        deleteAllBtn.classList.remove("active");
    }
    let newLiTag ='';
    listArr.forEach((element, index) => {
        newLiTag += `<li> ${element} <span onclick="deleteTask(${index})";><i class="fas fa-trash"></i></span></li>`;
    }); 
    todolist.innerHTML = newLiTag;
    inputBox.value = "";
}
function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}
deleteAllBtn.onclick = ()=>{
    listArr = [];
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}

