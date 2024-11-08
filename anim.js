
const pnEl = document.querySelector('#pn');
const pdEl = document.querySelector('#pd');
const mgEl = document.querySelector('#mg')

const pth = document.querySelectorAll('path');
const svg = document.querySelector('svg');

let zom = 1, trX = -18.6, trY = 0;


const dnh = n => {
document.querySelector(n).setAttribute('out','');
setTimeout(() => {
hide(n);
document.querySelector(n).removeAttribute('out');
}, 550);
}
const ani = () => {
gsap.to(svg, {
scale: zom,
x: trX,
y: trY,
duration: 0.5,
ease: "power2.out"
});
};

const movX = (x) => {
const cX = window.innerWidth / 2 + 100;
trX = cX - (x * zom);
};

const movY = (y) => {
const cY = window.innerHeight / 2;
trY = cY - (y * zom);
};

const rstT = () => {
zom = 1; 
trX = -18.6; 
trY = 0;
ani();
};
rstT();

pth.forEach(p => {

p.addEventListener('mouseenter', () => {
pnEl.innerText = p.getAttribute('name');


ani(); 

});


p.addEventListener('click', e => {
const rect = p.getBoundingClientRect();
const cX = rect.left + rect.width / 2;
const cY = rect.top + rect.height / 2;

movX(cX);
movY(cY);
 
ani(); 

setTimeout(() => {
((p.getAttribute('images') !== '' && p.getAttribute('images'))
|| (p.getAttribute('info') !== '' && p.getAttribute('info')))
? show('#isc') : dnh('#isc');

pnEl.innerText = p.getAttribute('name'),
pdEl.innerText = p.getAttribute('info'),
(mgEl.src= p.getAttribute('images'))
p.getAttribute('images') ? show('#mg') : hide('#mg');

}, 800);
});
});

svg.addEventListener('mouseleave', e => {
if (!e.target.closest('path')) {
rstT();
}
});