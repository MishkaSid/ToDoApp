`use strict`


let taskList = document.getElementById('list')

addEventListener(`click`, (event) => {
    if (event.target.matches(`#delete`)) {
        if(confirm(`Are you sure you want to delete this task?`))
        event.target.parentElement.remove()
        saveTasks()
    }
})
addEventListener(`click`, (event) => {
    if (event.target.matches(`#checkbox`))
       if(event.target.parentElement.style.textDecoration == 'line-through')
        event.target.parentElement.style.textDecoration = 'none'
        else
        event.target.parentElement.style.textDecoration = 'line-through'

    saveTasks()
    })

function addTask() {
    let task = document.getElementById('input').value
    if (task === '') {
        alert('Please enter a task')
        return
    }
    let li = `<li><input type="checkbox" id="checkbox">${task}<button id="edit" onclick="editTask(${task})">Edit</button><button id="delete">Delete</button></li>`
    taskList.innerHTML += li
    document.getElementById('input').value = ''
    saveTasks()
}

function editTask(task) {
    let newTask = prompt('Enter new task')
    if (task === null || task === '') {
        alert('Task cannot be empty')
        return
    }    
    this.parentElement.innerHTML = `<input type="checkbox" id="checkbox">${newTask}<button id="edit" onclick="editTask(${newTask})">Edit</button><button id="delete">Delete</button>`
    saveTasks()
    }
    

function saveTasks() {
    localStorage.setItem('tasks', taskList.innerHTML)
}

function loadTasks() {
    taskList.innerHTML = localStorage.getItem('tasks')
}

loadTasks()

