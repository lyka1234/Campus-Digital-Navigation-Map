const l = () => {};

const rdL=()=>{
const elsO = document.querySelectorAll('[o]');
elsO.forEach(el => el.removeAttribute('o'));
const elsA = document.querySelectorAll('[a]');
elsA.forEach(el => el.removeAttribute('a'));

}
l.p = (config) => {
const svg = document.getElementById('map');
for (const key in config) {
const { d, fill, info, name, pin, images,images2,images3 } = config[key];
const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute("d", d);
path.setAttribute("fill", fill);
path.setAttribute("stroke", 'none');
path.setAttribute("stroke-width", '0');
path.setAttribute("name", name || "");
path.id=name.toLowerCase().replace(/\s+/g, '').replace(/[^\w\-]/g, '');
path.setAttribute("info", info || "");
path.setAttribute("pin", pin || false);
path.setAttribute("images", images || "");
path.setAttribute("images2", images2 || "");

path.setAttribute("images3", images3 || "");
svg.appendChild(path);
} 
};

let debounceTimer;
let debounce = (func, delay) => {
clearTimeout(debounceTimer);
debounceTimer = setTimeout(func, delay);
};

let fnd = v => {
let elems = document.querySelectorAll(`path[name], path[info]`);
let searchTerm = v.toLowerCase().replace(/\s+/g, '');
let filtered = Array.from(elems).filter(e =>
e.getAttribute('name').toLowerCase().includes(searchTerm) ||
e.getAttribute('info').toLowerCase().includes(searchTerm)
);
return filtered.length ? filtered.map(e => ({
name: e.getAttribute('name'),
info: e.getAttribute('info'),
images: e.getAttribute('images'),
images2: e.getAttribute('images2'),
images3: e.getAttribute('images3')
})) : 'Keep Searching';
};

let srt = v => debounce(() => {
let results = fnd(v);
let outputDiv = document.getElementById('sro');
outputDiv.innerText = '';

if (results !== 'Keep Searching') {
let fragment = document.createDocumentFragment(); 

results.forEach(r => {
let el;
if (r.info || r.images || r.images2 || r.images3) {
el = document.createElement('a');
el.innerText = r.name;
el.href = '#';
el.setAttribute('left', '');
el.setAttribute('bdr', '25');
el.setAttribute('mbg2', '');
el.onclick = () => {
pnEl.innerText = r.name;
pdEl.innerText = r.info;
mgEl.src = r.images || '';
r.images ? show('#mg') : hide('#mg');
mg2El.src = r.images2 || '';
r.images2 ? show('#mg2') : hide('#mg2');
mg3El.src = r.images3 || '';
r.images3 ? show('#mg3') : hide('#mg3');
(r.info || r.images || r.images2 || r.images3) ? show('#isc') : hide('#isc');
const _vimap = document.getElementById('map');

const _tPE = document.getElementById(r.name.toLowerCase().replace(/\s+/g, '').replace(/[^\w\-]/g, ''));
if (_tPE) {
_vimap.setAttribute('o','');

_tPE.setAttribute('a','')
const rect = _tPE.getBoundingClientRect();
const cY = rect.top;

movY(cY + (cY/2));
ani(); 
targetPath.click();
} 
};

} else {
el = document.createElement('p');
el.innerText = r.name;
el.setAttribute('small-p', '');
}
fragment.appendChild(el);
});

outputDiv.appendChild(fragment); 
} else {
outputDiv.innerText = results;
}
}, 300); 
