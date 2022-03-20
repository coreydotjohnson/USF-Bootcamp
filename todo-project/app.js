const todoList = document.getElementById('todoList');
const todoBox = document.getElementById('todoBox');
const todoSubmit = document.getElementById('todoSubmit');

function populateList() {
    todoList.innerHTML = '';
    const localStorageKeys = Object.keys(localStorage);

    for (let k of localStorageKeys) {
        if (k != undefined) {
            let item = JSON.parse(localStorage[k]);
            let itemName = item.name;
            let isComplete = item.completed;
            todoList.appendChild(createTodoItem(itemName, isComplete));
        }
    }
}

function createTodoItem(itemName, isComplete) {
    let properties = { name: itemName, completed: isComplete};
    let newTodoLi = document.createElement('li');
    newTodoLi.innerText = itemName;
    newTodoLi.id = itemName;
    let newTodoCmpltBtn = document.createElement('button');
    newTodoCmpltBtn.textContent = 'Complete!';
    newTodoCmpltBtn.id = 'complete';
    let newTodoRmvBtn = document.createElement('button');
    newTodoRmvBtn.textContent = 'Remove';
    newTodoRmvBtn.id = 'remove';

    newTodoLi.data-isComplete === isComplete;

    newTodoLi.appendChild(newTodoCmpltBtn);
    newTodoLi.appendChild(newTodoRmvBtn);

    localStorage.setItem(itemName, JSON.stringify(properties));

    if (isComplete === true) {
        newTodoLi.style.textDecoration = 'line-through';
    }

    return newTodoLi;
}


todoSubmit.addEventListener('click', function(e) {
    e.preventDefault();
    if (todoBox.value) {
        createTodoItem(todoBox.value, false);
        populateList();
        todoBox.value = '';
    }
})

todoList.addEventListener('click', function(e) {
    if (e.target.id === 'remove') {
        localStorage.removeItem(e.target.parentElement.id);
    }

    if (e.target.id === 'complete') {
        let storedId = e.target.parentElement.id;
        let parsedJSON = JSON.parse(localStorage[storedId]);
        parsedJSON.completed = true;
        localStorage.setItem(storedId, JSON.stringify(parsedJSON));
    }

    populateList();
})

window.addEventListener('load', function(e) {
    populateList();
  })