const miModulo=(()=>{"use strict";let e=[];const t=["C","D","H","S"],n=["A","J","Q","K"];let o=[];const r=document.querySelector("#btnPedir"),a=document.querySelector("#btnDetener"),l=(document.querySelector("#btnNuevo"),document.querySelectorAll(".divCartas")),s=document.querySelectorAll("small"),d=()=>{e=[];for(let n=2;n<=10;n++)for(let o of t)e.push(n+o);for(let o of t)for(let t of n)e.push(t+o);return _.shuffle(e)},c=()=>{if(0===e.length)throw"No hay cartas en el deck";return e.pop()},u=(e,t)=>(o[t]=o[t]+(e=>{const t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t})(e),s[t].innerText=o[t],o[t]),i=(e,t)=>{const n=document.createElement("img");n.src=`assets/cartas/${e}.png`,n.classList.add("carta"),l[t].append(n)},g=e=>{let t=0;do{const e=c();t=u(e,o.length-1),i(e,o.length-1)}while(t<e&&e<=21);(()=>{const[e,t]=o;setTimeout(()=>{t===e?alert("El jugador gana!"):e>21?alert("La computadora gana!"):t>21?alert("El jugador gana!"):alert("La computadora gana!")},100)})()};return r.addEventListener("click",()=>{const e=c(),t=u(e,0);i(e,0),t>21?(console.warn("Lo siento mucho, perdiste"),r.disabled=!0,a.disabled=!0,g(t)):21===t&&(console.warn("21, genial!"),r.disabled=!0,a.disabled=!0,g(t))}),a.addEventListener("click",()=>{r.disabled=!0,a.disabled=!0,g(o[0])}),{nuevoJuego:(t=2)=>{e=d(),o=[];for(let e=0;e<t;e++)o.push(0);s.forEach(e=>e.innerText=0),l.forEach(e=>e.innerHTML=""),r.disabled=!1,a.disabled=!1}}})();