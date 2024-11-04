const l = () => {};

l.p = (config) => {
const svg = document.getElementById('map');
for (const key in config) {
const { d, fill, stroke, strokeWidth, info, name, images } = config[key];
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