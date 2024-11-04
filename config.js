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
let elems = document.querySelectorAll(`path[name*="${v}"], path[info*="${v}"]`); 
return elems.length ? Array.from(elems).map(e => ({ name: e.getAttribute('name'), info: e.getAttribute('info') })) : 'Keep Searching'; 
}; 
let srt=v=>{ 
let results = fnd(v); 
document.getElementById('sro').innerText = results !== 'Keep Searching' ? results.map(r => `${r.name}, ${r.info}`).join('\n') : results; 
};
