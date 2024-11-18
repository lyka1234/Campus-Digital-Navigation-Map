

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
const { d, fill, info, name, pin, image,image2,image3 } = config[key];
const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute("d", d);
path.setAttribute("fill", fill);
path.setAttribute("stroke", 'none');
path.setAttribute("stroke-width", '0');
path.setAttribute("name", name || "");
path.id=name.toLowerCase().replace(/\s+/g, '').replace(/[^\w\-]/g, '');
path.setAttribute("info", info || "");
path.setAttribute("pin", pin || false);
path.setAttribute("image", image || "");
path.setAttribute("image2", image2 || "");

path.setAttribute("image3", image3 || "");
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
image: e.getAttribute('image'),
image2: e.getAttribute('image2'),
image3: e.getAttribute('image3')
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
if (r.info || r.image || r.image2 || r.image3) {
el = document.createElement('a');
el.innerText = r.name;
el.href = '#';
el.setAttribute('left', '');
el.setAttribute('bdr', '25');
el.setAttribute('mbg2', '');
el.onclick = () => {
pnEl.innerText = r.name;
pdEl.innerText = r.info;
(r.image && r.image!=='')?(mgEl.src = r.image):'';
(r.image && r.image!=='') ? show('#mg') : hide('#mg');
(r.image2 && r.image2!=='')?(mgEl2.src = r.image):'';
(r.image2 && r.image2!=='') ? show('#mg2') : hide('#mg2');
(r.image3 && r.image3!=='')?(mgEl3.src = r.image):'';
(r.image3 && r.image3!=='') ? show('#mg3') : hide('#mg3');
(r.info || r.image || r.image2 || r.image3) ? show('#isc') : hide('#isc');
const _vimap = dom('#map');

const _tPE = dom(`#${r.name.toLowerCase().replace(/\s+/g, '').replace(/[^\w\-]/g, '')}`);
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
fragment.put(el);
});

outputDiv.put(fragment); 
} else {
outputDiv.innerText = results;
}
}, 300); 
