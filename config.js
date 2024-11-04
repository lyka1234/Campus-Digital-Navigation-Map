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

let fnd=v=>{ 
let elems = document.querySelectorAll(`path[name], path[info]`); 
let searchTerm = v.toLowerCase().replace(/\s+/g, ''); 
let filtered = Array.from(elems).filter(e => 
(e.getAttribute('name').toLowerCase().includes(searchTerm) || 
e.getAttribute('info').toLowerCase().includes(searchTerm))
); 
return filtered.length ? filtered.map(e => ({ name: e.getAttribute('name'), info: e.getAttribute('info'), images: e.getAttribute('images') })) : 'Keep Searching'; 
}; 

let srt=v=>{ 
let results = fnd(v); 
let outputDiv = document.getElementById('sro');
outputDiv.innerText = ''; 
if (results !== 'Keep Searching') {
results.forEach(r => {

(r.info || r.images) && (
a = document.createElement('a'),
a.innerText = `${r.name}`,
a.href = '#',
a.setAttribute('left',''),
a.setAttribute('bdr','25'),
a.setAttribute('mbg2',''),
a.onclick = () => (
pnEl.innerText = r.name,
pdEl.innerText = r.info,
mgEl.src = r.images || '',
r.images && show('#mg') || hide('#mg'),
(r.info || r.images) && show('#isc')
),
outputDiv.appendChild(a)
) || (
txta=document.createElement('p'),
txta.innerText = r.name,
txta.setAttribute('small-p',''),
outputDiv.appendChild(txta)
)


});
} else {
outputDiv.innerText = results; 
}
};

