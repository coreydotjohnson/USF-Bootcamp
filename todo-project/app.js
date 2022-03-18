const todoAddBox = document.querySelector('#todoAddBox');
const todoAdd = document.querySelector('#todoAddBtn');
const todoList = document.querySelector('#todoList');

todoAdd.addEventListener('click', function(e) {
    e.preventDefault();
    
    const newTodo = document.createElement('li');
    newTodo.innerText = `${todoAddBox.value} `;
    const newCompleteBtn = document.createElement('button');
    newCompleteBtn.innerText = 'Complete!';
    const newRemoveBtn = document.createElement('button');
    newRemoveBtn.innerText = 'Remove';

    newTodo.appendChild(newCompleteBtn);
    newTodo.appendChild(newRemoveBtn);
    todoList.appendChild(newTodo);
})

todoList.addEventListener('click', function(e) {
    if (e.target.textContent === 'Complete!') {
        e.target.parentElement.style.textDecoration = 'line-through';
    } else if (e.target.textContent === 'Remove') {
        e.target.parentElement.remove();
    }
})