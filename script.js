const bars = document.getElementById("toggle-button");
const navSection = document.getElementById("navigationSection");
const out = document.getElementById("out");

bars.onclick = () =>{
    navSection.classList.add('navSec');
    out.style.display = 'block';
}

out.onclick = () =>{
    navSection.classList.remove('navSec');
    out.style.display = 'none';
}