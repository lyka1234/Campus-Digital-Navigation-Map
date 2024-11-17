
const pnEl = document.querySelector('#pn');
const pdEl = document.querySelector('#pd');
const mgEl = document.querySelector('#mg');

const mg2El = document.querySelector('#mg2')

const mg3El = document.querySelector('#mg3')

const pth = document.querySelectorAll('path');
const svg = document.querySelector('svg');

let zom = 1, trX = -18.6, trY = 0;

dhid=(saa)=>{
document.querySelector(saa).setAttribute('hide','');
}
const dnh = n => {
document.querySelector(n).setAttribute('out','');
setTimeout(() => {
dhid(n);
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
cp.setAttribute('stroke', '#88888839');
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
line.setAttribute('stroke', '#88888839');
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


const _0x3b1e = ['\x68\x74\x74\x70\x73\x3A\x2F\x2F\x78\x38\x6B\x69\x2D\x6C\x65\x74\x6C\x2D\x74\x77\x6D\x74\x2E\x6E\x37\x2E\x78\x61\x6E\x6F\x2E\x69\x6F\x2F\x61\x70\x69\x3A\x66\x6A\x4D\x46\x61\x69\x54\x42\x2F\x6D\x61\x70'];
const _url = _0x3b1e[0];
lmD = async () => {
try {
const response = await fetch(_url, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
},
});

if (!response.ok) {
throw new Error(`HTTP error! Status: ${response.status}`);
}

const data = await response.json();
console.log(data);

if (!Array.isArray(data)) {
throw new Error('Invalid data format. Expected an array.');
}

const svg = document.getElementById('map');
if (!svg) {
throw new Error('SVG element with id "map" not found.');
}

// Process each item in the data array
data.forEach(item => {
const { d, fill, info, name, image, image2, image3, type } = item;

// Validate required properties
if (!d || !fill || !type) {
console.error('Missing required properties for path creation', item);
return;
}

const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

// Add attributes if they exist and are valid
if (d && d.trim() && d !== 'unknown') path.setAttribute("d", d);
if (fill && fill.trim() && fill !== 'unknown') path.setAttribute("fill", fill);
if (name && name.trim() && name !== 'unknown') {
path.setAttribute("name", name);
path.id = name.toLowerCase().replace(/\s+/g, '').replace(/[^\w\-]/g, '');
}
if (info && info.trim() && info !== 'unknown') path.setAttribute("info", info);
if (image && image.trim() && image !== 'unknown') path.setAttribute("image", image);
if (image2 && image2.trim() && image2 !== 'unknown') path.setAttribute("image2", image2);
if (image3 && image3.trim() && image3 !== 'unknown') path.setAttribute("image3", image3);
if (type && type.trim() && type !== 'unknown') path.setAttribute("type", type);

path.setAttribute("stroke", 'none');
path.setAttribute("stroke-width", '0');

svg.appendChild(path);
});

// Add event listeners to paths
const paths = svg.querySelectorAll('path');
paths.forEach(p => {
p.addEventListener('mouseenter', () => {
pnEl.innerText = p.getAttribute('name') || 'Unknown';
ani();
});

p.addEventListener('click', () => {
const rect = p.getBoundingClientRect();
const cX = rect.left + rect.width / 2;
const cY = rect.top + rect.height / 2;

movX(cX);
movY(cY);
ani();

setTimeout(() => {
const hasImages = (attr) => attr && attr.trim() && attr !== 'unknown';

// Toggle visibility of #isc
if (
    hasImages(p.getAttribute('image')) ||
    hasImages(p.getAttribute('image2')) ||
    hasImages(p.getAttribute('image3')) ||
    hasImages(p.getAttribute('info'))
) {
    dom('#isc').rem('hide');
} else {
    dnh('#isc');
}

pnEl.innerText = p.getAttribute('name') || '';
pdEl.innerText = hasImages(p.getAttribute('info')) ? p.getAttribute('info') : '';

// Image 3
if (hasImages(p.getAttribute('image3'))) {
    mgEl3.src = p.getAttribute('image3');
    dom('#mg3').rem('hide');
} else {
    dhid('#mg3');
}

// Image 2
if (hasImages(p.getAttribute('image2'))) {
    mgEl2.src = p.getAttribute('image2');
    dom('#mg2').rem('hide');
} else {
    dhid('#mg2');
}

// Image
if (hasImages(p.getAttribute('image'))) {
    mgEl.src = p.getAttribute('image');
    dom('#mg').rem('hide');
} else {
    dhid('#mg');
}
}, 800);
});
});
} catch (error) {
console.error('Error fetching or processing data:', error);
}
};
