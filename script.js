const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; //Multiplication Sign
        li.appendChild(span);
        // Add an edit button with a pencil sign
        let edit = document.createElement("button");
        edit.innerHTML = "\u270E"; //Pencil
        edit.className = "edit";
        li.appendChild(edit);
    }
    inputBox.value = "";
    saveDate();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveDate();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveDate();
    }
    else if(e.target.tagName === "BUTTON" && e.target.className === "edit"){
        // Update the text value
        let newText = prompt("Enter the new text:", e.target.parentElement.textContent.slice(0, -2));
        if(newText !== null && newText !== ""){
            e.target.parentElement.firstChild.nodeValue = newText;
            saveDate();
        }
    }
}, false);

function saveDate(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();
