window.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.querySelector('.taskName');
    const addBtn = document.querySelector('.addButton');


    
    addBtn.addEventListener('click', function() {
        console.log(taskInput.value);
        const value = taskInput.value;
        if(value) {
            generateTask(value);
            taskInput.value = '';
        }
        
    });


});

const delBtn = document.querySelector('.delet');

delBtn.addEventListener('click', function(event) {
    console.log(event.target.parentElement.getAttribute('data-key'));
    removeTask(event.target.parentElement.getAttribute('data-key'))
});

function generateTask(taskName) {
    const taskWrapper = document.querySelector('.task-wrapper');
    const task = document.createElement('div');
    task.classList.add('task');
    
    
    const id = generateId()

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('class', 'check');
    task.appendChild(checkbox);

    task.setAttribute('data-key', id);
    checkbox.setAttribute('onClick', `completeTask(${id})`);

    const txt = document.createElement('span');
    txt.innerText = taskName;
    task.appendChild(txt);

    const button = document.createElement('button');
    button.setAttribute('class', 'deletу');
    button.setAttribute('onClick', `removeTask(${id})`);

    const img = document.createElement('img');
    img.setAttribute('src', 'trash.svg');
    
    button.appendChild(img);

    task.appendChild(button);

    taskWrapper.appendChild(task);
}

function generateId() {
    return Math.floor(Math.random() * 100 / Math.random() * 2);
}

function removeTask(id) {
    const div = document.querySelector(`.task[data-key="${id}"]`);
    div.remove();
}