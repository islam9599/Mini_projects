const newTodoBtn = document.querySelector('button');
const todoContainer = document.querySelector('#todo-container');
const inputField = document.querySelector('input');

newTodoBtn.addEventListener('click', function () {
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    todoContainer.append(paragraph);
    inputField.value = '';
    document.body.style.backgroundColor = makeRandColor();
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = 'line-through';

    });
    paragraph.addEventListener('dblclick', function () {
        todoContainer.removeChild(paragraph);
    })
});

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const sumRGB = `rgb(${r}, ${g}, ${b})`;
    return sumRGB;

}