
const rdL=()=>{
const elsO = document.querySelectorAll('[o]');
elsO.forEach(el => el.removeAttribute('o'));
const elsA = document.querySelectorAll('[a]');
elsA.forEach(el => el.removeAttribute('a'));

}
let debounceTimer;
let debounce = (func, delay) => {
clearTimeout(debounceTimer);
debounceTimer = setTimeout(func, delay);
};

let isMapLoaded = false;

let waitForMap = resolve => {
let check = setInterval(() => {
if (document.querySelectorAll('path[name], path[info]').length > 0) {
clearInterval(check);
isMapLoaded = true;
resolve();
}
}, 100);
};

let initMapLoad = () => new Promise(waitForMap);

let fnd = v => {
let elems = document.querySelectorAll(`path[name], path[info]`);
if (!elems.length) return 'No elements found';

let searchTerm = v.toLowerCase().replace(/\s+/g, '');
let filtered = Array.from(elems).filter(e => {
let name = e.getAttribute('name') || '';
let info = e.getAttribute('info') || '';
return name.toLowerCase().includes(searchTerm) || info.toLowerCase().includes(searchTerm);
});

return filtered.length
? filtered.map(e => ({
name: e.getAttribute('name') || '',
info: e.getAttribute('info') || '',
image: e.getAttribute('image') || '',
image2: e.getAttribute('image2') || '',
image3: e.getAttribute('image3') || ''
}))
: 'Keep Searching';
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
(r.image && r.image !== '') ? (dom('#mg').src = r.image) : '';
(r.image && r.image !== '') ? show('#mg') : hide('#mg');
(r.image2 && r.image2 !== '') ? (dom('#mg2').src = r.image2) : '';
(r.image2 && r.image2 !== '') ? show('#mg2') : hide('#mg2');
(r.image3 && r.image3 !== '') ? (dom('#mg3').src = r.image3) : '';
(r.image3 && r.image3 !== '') ? show('#mg3') : hide('#mg3');
(r.info || r.image || r.image2 || r.image3) ? show('#isc') : hide('#isc');
const _vimap = dom('#map');
const _tPE = dom(`#${r.name.toLowerCase().replace(/\s+/g, '').replace(/[^\w\-]/g, '')}`);
if (_tPE) {
_vimap.setAttribute('o', '');
_tPE.setAttribute('a', '');
const rect = _tPE.getBoundingClientRect();
const cY = rect.top;
movY(cY + (cY / 2));
ani();
}};
} else {
el = document.createElement('p');
el.innerText = r.name;
el.setAttribute('small-p', '');
}
fragment.append(el);
});
outputDiv.append(fragment);
} else {
outputDiv.innerText = results;
}
}, 300);

let onMapReady = async () => {
await initMapLoad();
console.log('Map Loaded');
};
