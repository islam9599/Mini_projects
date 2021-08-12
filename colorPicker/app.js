const h1 = document.querySelector('h1');
const button = document.querySelector('#btn');
button.addEventListener('click', function () {
    button.style.backgroundColor = makeRandColor();
    document.body.style.backgroundColor = makeRandColor();
    h1.innerText = makeRandColor();
})
const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`
};
