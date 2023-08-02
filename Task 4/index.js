let inputbox = document.getElementById("inputboxid");
let listContainer = document.getElementById("todolists");

function addTask(){

    if(inputbox.value === ''){
        alert("write something");
    }
   
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);

        let  span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }

    inputbox.value = "";
    saveData();

}

listContainer.addEventListener('click', function(f){
    if(f.target.tagName === "LI" ){
        f.target.classList.toggle("checked");
        saveData();
    }
    else if (f.target.tagName === "SPAN") {
        f.target.parentElement.remove();
        saveData();
    }
});


function saveData(){

    localStorage.setItem("data" , listContainer.innerHTML);

}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data")
}

showTask();