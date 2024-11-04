const l = () => {};

l.p = (config) => {
const svg = document.getElementById('map');
for (const key in config) {
const { d, fill, info, name, images } = config[key];
const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute("d", d);
path.setAttribute("fill", fill);
path.setAttribute("stroke", 'none');
path.setAttribute("stroke-width", '0');
path.setAttribute("name", name || "");
path.setAttribute("info", info || "");
path.setAttribute("images", images || "");
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
images: e.getAttribute('images')
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
if (r.info || r.images) {
el = document.createElement('a');
el.innerText = r.name;
el.href = '#';
el.setAttribute('left', '');
el.setAttribute('bdr', '25');
el.setAttribute('mbg2', '');
el.onclick = () => (
pnEl.innerText = r.name,
pdEl.innerText = r.info,
mgEl.src = r.images || '',
r.images ? show('#mg') : hide('#mg'),
(r.info || r.images) ? show('#isc') : hide('#isc')
);
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
