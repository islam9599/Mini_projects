const loadText = document.querySelector('.loading');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30)

function blurring() {
    load++
    if (load > 99) {
        clearInterval(int)
    }

    loadText.innerText = `${load}%`;
    loadText.style.opacity = 
}