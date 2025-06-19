function CreateTask(){

    let TaskTextValue = document.getElementById('AddTaskText').value

    if (TaskTextValue.trim() === ""){
        return
    }else{
        document.getElementById('AddTaskText').value = ""; 
    }


    let NewTask = document.createElement("div")
    NewTask.classList.add("task")
    document.getElementById('TaskContainer').appendChild(NewTask);


    let Checkbox = document.createElement("input");
    Checkbox.setAttribute("type", "checkbox");
    Checkbox.classList.add("TaskCheckbox")

    Checkbox.addEventListener('change', () => {
        if(Checkbox.checked){
            text.style.textDecoration = "line-through"
            text.style.opacity = 0.4              
        }else{
            text.style.textDecoration = "none"
            text.style.opacity = 1
        }
    })


    let text = document.createElement("h1")
    text.classList.add("taskH1")
    text.textContent = TaskTextValue


    let DelBtn = document.createElement("button")
    DelBtn.classList.add("DelTaskBtn")
    DelBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'

    DelBtn.addEventListener('click', () => {
        DelBtn.parentElement.remove()

        if(document.querySelectorAll('.task').length >= 1){
            document.getElementById("NoTaskMsg").style.display = "none"
        }else{
            document.getElementById("NoTaskMsg").style.display = "block"
        }

    })

    NewTask.append(Checkbox,text, DelBtn)
    
}

document.getElementById('AddTaskBtn').addEventListener('click', () => {
    CreateTask()

    if(document.querySelectorAll('.task').length >= 1){
        document.getElementById("NoTaskMsg").style.display = "none"
    }else{
        document.getElementById("NoTaskMsg").style.display = "block"
    }

    

});