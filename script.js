const headlines = document.querySelectorAll('.headline');
let current = 0;

function showHeadline(index) {
    headlines.forEach(h => h.classList.remove('show'));
    headlines[index].classList.add('show');
}

showHeadline(current);

setInterval(() => {
    headlines[current].classList.remove('show');
    current = (current + 1) % headlines.length;
    showHeadline(current);
}, 3000);