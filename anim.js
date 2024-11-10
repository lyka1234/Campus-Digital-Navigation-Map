
const pnEl = document.querySelector('#pn');
const pdEl = document.querySelector('#pd');
const mgEl = document.querySelector('#mg');

const mg2El = document.querySelector('#mg2')

const mg3El = document.querySelector('#mg3')

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
|| (p.getAttribute('images2') !== '' && p.getAttribute('images2'))
|| (p.getAttribute('images3') !== '' && p.getAttribute('images3'))
|| (p.getAttribute('info') !== '' && p.getAttribute('info')))
? show('#isc') : dnh('#isc');

pnEl.innerText = p.getAttribute('name'),
pdEl.innerText = p.getAttribute('info'),

(mg3El.src= p.getAttribute('images3'))
p.getAttribute('images3') ? show('#mg3') : hide('#mg3');


(mg2El.src= p.getAttribute('images2'))
p.getAttribute('images2') ? show('#mg2') : hide('#mg2');

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



const mov=(s)=>{
const elems = document.querySelectorAll(s);
elems.forEach((e) => {
let ox, oy, m = false;
e.style.position = 'absolute';

const _sMov = (ev) => {
const event = ev.touches ? ev.touches[0] : ev;
ox = event.clientX - e.getBoundingClientRect().left;
oy = event.clientY - e.getBoundingClientRect().top;
m = true;
};

const movE = (ev) => {
if (m) {
const event = ev.touches ? ev.touches[0] : ev;
const nl = event.clientX - ox;
const nt = event.clientY - oy;
e.style.left = `${nl}px`;
e.style.top = `${nt}px`;
hnp();
}
};

const _sMv = () => {
m = false;
hnp();
};

e.addEventListener('mousedown', _sMov);
e.addEventListener('touchstart', _sMov, { passive: true });
document.addEventListener('mousemove', movE);
document.addEventListener('touchmove', movE, { passive: true });
document.addEventListener('mouseup', _sMv);
document.addEventListener('touchend', _sMv);
});
};


const hnp=()=>{
const p1 = document.getElementById('pin');
const p2 = document.getElementById('pin2');
const svg = document.querySelector('svg');
const ps = svg.querySelectorAll('path');

let cp = null, md = Infinity, cPin = null;

ps.forEach((p) => {
const pr = p.getBoundingClientRect();
const cx = pr.left + pr.width / 2;
const cy = pr.top + pr.height / 2;

const d1 = Math.sqrt(Math.pow(cx - (p1.offsetLeft + p1.offsetWidth / 2), 2) + Math.pow(cy - (p1.offsetTop + p1.offsetHeight / 2), 2));
const d2 = Math.sqrt(Math.pow(cx - (p2.offsetLeft + p2.offsetWidth / 2), 2) + Math.pow(cy - (p2.offsetTop + p2.offsetHeight / 2), 2));

const cPinToP = d1 < d2 ? p1 : p2;
const minDist = Math.min(d1, d2);

if (minDist < md) {
cp = p;
md = minDist;
cPin = cPinToP;
}
});

ps.forEach(p => p.removeAttribute('stroke'));

if (cp) {
cp.setAttribute('stroke', '#191920');
cp.setAttribute('stroke-width', '1');
dD(cPin, cp, md);
_dLn(cPin, cp);
}
}

const cd = (p1, p2) => {
const x1 = p1.offsetLeft + p1.offsetWidth / 2; 
const y1 = p1.offsetTop + p1.offsetHeight / 2;
const x2 = p2.offsetLeft + p2.offsetWidth / 2; 
const y2 = p2.offsetTop + p2.offsetHeight / 2;  

const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
return distance;
}

const dD=(p, p2)=> {
const dV = document.getElementById('dD');
if (!dV) {
const _hso = document.createElement('_hso');
_hso.id = 'mI';
_hso.style.position = 'absolute';

_hso.setAttribute('bbg','');
_hso.style.padding = '5px';
document.body.appendChild(_hso);
}

const pr = p.getBoundingClientRect();
const pr2 = p2.getBoundingClientRect();
const cx = pr2.left + pr2.width / 1;
const cy = pr2.top + pr2.height / 1;

const cx2 = pr.left + p.offsetWidth / 1;
const cy2 = pr.top + p.offsetHeight / 1;

const dv = document.getElementById('mI');

dv.innerText = `${Math.round(pxToMeter((cx + cx2 + cy + cy2 * 0.23) / 2.082 * 1.391)* 2.873 )}m | ${p2.getAttribute('name')}`;
dv.setAttribute('layer', '1');
dv.style.left = `${Math.min(cx, cx2)}px`;
dv.style.top = `${Math.min(cy, cy2)}px`;
}

const _dLn=(p1, p2)=> {
const svg = document.querySelector('svg');
const pr1 = p1.getBoundingClientRect();
const pr2 = p2.getBoundingClientRect();

const x1 = pr1.left + pr1.width / 1.07294;
const y1 = pr1.top + pr1.height / 1;
const x2 = pr2.left + pr2.width / 1.07294;
const y2 = pr2.top + pr2.height / 1;

const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
line.setAttribute('x1', x1);
line.setAttribute('y1', y1);
line.setAttribute('x2', x2);
line.setAttribute('y2', y2);
line.setAttribute('stroke', '#303040');
line.setAttribute('stroke-width', '1');
svg.appendChild(line);

setTimeout(() => {
line.remove();
}, 2000);
}

const pxToMeter=(px)=> {
const conversionFactor = 0.01;
return px * conversionFactor;
}

document.addEventListener('DOMContentLoaded', () => {
mov('#pin');
mov('#pin2');
hnp();
});
