const todos = [];

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
        const oneTodo = document.createElement('div');
        oneTodo.classList.add('todo');

        const checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        oneTodo.appendChild(checkBox);
        checkBox.addEventListener('click', () => {
            text.classList.toggle('done');
        });

        const text = document.createElement('input');
        text.setAttribute('type', 'text');
        text.setAttribute('value', todo);
        text.setAttribute('disabled', 'disabled');
        text.classList.add('todo-input');
        oneTodo.appendChild(text);

        const editIcon = document.createElement('i');
        editIcon.classList.add('fa', 'fa-pencil', 'icon', 'fa-2x');
        oneTodo.appendChild(editIcon);
        editIcon.addEventListener('click', () => {
            text.toggleAttribute('disabled');
        });

        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fa', 'fa-trash', 'icon', 'fa-2x');
        oneTodo.appendChild(deleteIcon);
        deleteIcon.addEventListener('click', function () {
            const input = this.parentElement.querySelector('.todo-input');
            const index = todos.indexOf(input.value);
            todos.splice(index, 1);
            displayTodo();
        });

        container.appendChild(oneTodo);
    }
}
