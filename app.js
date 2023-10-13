let a = document.getElementById('one');
let b = document.getElementById('two');
let c = document.getElementById('three');
let d = document.getElementById('four');
a.style.backgroundColor = 'lightblue';
selected = 1;

a.addEventListener('click', function() {
    selected = 1;
    a.style.backgroundColor = 'lightblue';
    b.style.backgroundColor = 'white';
    c.style.backgroundColor = 'white';
    d.style.backgroundColor = 'white';
});
b.addEventListener('click', function() {
    selected = 2;
    a.style.backgroundColor = 'white';
    b.style.backgroundColor = 'lightblue';
    c.style.backgroundColor = 'white';
    d.style.backgroundColor = 'white';
})
c.addEventListener('click', function() {
    selected = 3;
    a.style.backgroundColor = 'white';
    b.style.backgroundColor = 'white';
    c.style.backgroundColor = 'lightblue';
    d.style.backgroundColor = 'white';
})
d.addEventListener('click', function() {
    selected = 4;
    a.style.backgroundColor = 'white';
    b.style.backgroundColor = 'white';
    c.style.backgroundColor = 'white';
    d.style.backgroundColor = 'lightblue';
})
let start = document.querySelector('.start');
let home = document.querySelector('.home');
let card = document.querySelector('.scoring');
start.addEventListener('click', function() {
    home.classList.add('hidden');
    card.classList.remove('hidden');
});
let end = document.querySelector('.end');
end.addEventListener('click', function() {
    home.classList.remove('hidden');
    card.classList.add('hidden');
});

fetch('http://uxcobra.com/golfapi/course11819.txt')
    .then(response => response.text())
    .then(data => {
        const holeData = data;
})