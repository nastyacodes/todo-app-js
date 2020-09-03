const todos = [];
let index;

const btnAdd = document.querySelector('#add-todo');
const input = document.querySelector('#new-todo');

btnAdd.addEventListener('click', () => {
    todos.push(input.value);
    displayTodo();
    input.value = '';
});

const displayTodo = () => {
    const container = document.querySelector('#all-todos');
    container.innerHTML = '';
    for(let todo of todos){
        const oneTodo = displayOneTodo(todo);
        container.appendChild(oneTodo);
    }
}

const displayOneTodo = (todo) => {
    const oneTodo = document.createElement('div');
    oneTodo.classList.add('todo');

    const checkBox = createCheckbox();
    oneTodo.appendChild(checkBox);
    
    const textInput = createTextInput(todo);
    oneTodo.appendChild(textInput);

    checkBox.addEventListener('click', () => {
        textInput.classList.toggle('done');
    });
    
    const editBtn = createEditBtn(textInput);
    oneTodo.appendChild(editBtn);

    const deleteBtn = createDeleteDtn();
    oneTodo.appendChild(deleteBtn);

    return oneTodo;
};

const createCheckbox = () => {
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');

    return checkBox;
}

const createTextInput = (textValue) => {
    const textInput = document.createElement('input');
    textInput.setAttribute('type', 'text');
    textInput.setAttribute('value', textValue);
    textInput.setAttribute('disabled', 'disabled');
    textInput.classList.add('todo-input');

    textInput.addEventListener('keyup', function(e) {
        if(e.keyCode === 13) {
            textInput.setAttribute('disabled', 'disabled');
            todos[index] = textInput.value;
        }
    });

    return textInput;
}

const createEditBtn = (textInput) => {
    const editBtn = document.createElement('i');
    editBtn.classList.add('fa', 'fa-pencil', 'icon', 'fa-2x');

    editBtn.addEventListener('click', function() {
        textInput.removeAttribute('disabled');
        const input = this.parentElement.querySelector('.todo-input');
        index = todos.indexOf(input.value);
    });

    return editBtn;
}

const createDeleteDtn = () => {
    const deleteBtn = document.createElement('i');
    deleteBtn.classList.add('fa', 'fa-trash', 'icon', 'fa-2x');
    
    deleteBtn.addEventListener('click', function () {
        const input = this.parentElement.querySelector('.todo-input');
        const index = todos.indexOf(input.value);
        todos.splice(index, 1);
        displayTodo();
    });

    return deleteBtn;
}