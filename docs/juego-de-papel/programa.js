!function(){"use strict";const e=document.getElementById("video"),t=document.getElementById("resultados"),n=document.getElementById("opcion1"),o=document.getElementById("opcion2"),l=document.querySelectorAll(".opcion"),s={fucsia:{},anaranjado:{},verde:{},azul:{},rosado:{},rojo:{},amarillo:{},morado:{}},a=Object.keys(s).length;let i=!1,c=0;function d(e){t.appendChild(e.target),c++,c===a&&r()}for(let t in s){const n=new Image;n.id=t,n.className="resultado",n.onload=d,n.src=`https://juancgonzalez.com/labmoviles/juego-de-papel/resultados/${t}.jpg`,n.onclick=()=>{n.style.display="none",e.play()},s[t].img=n}function r(){const l=[928,614],s=Math.min(window.innerWidth/l[0],window.innerHeight/l[1]),a={width:`${l[0]*s}px`,height:`${l[1]*s}px`};Object.assign(e.style,a),Object.assign(n.style,a),Object.assign(o.style,a),Object.assign(t.style,a)}l.forEach((e=>{e.onclick=()=>{n.style.display="none",o.style.display="none",s[e.dataset.color].img.style.display="block"}})),e.onclick=t=>{if(t.preventDefault(),i){const t=e.currentTime;t<.5||(t>=.5&&t<1?(e.pause(),n.style.display="block"):t>=1&&t<1.5||t>=1.5&&t<2&&(e.pause(),o.style.display="block"))}else e.play(),i=!0},e.ontimeupdate=()=>{const t=e.currentTime;i&&(e.style.cursor=t<.5?"default":t>=.5&&t<1?"pointer":t>=1&&t<1.6?"default":t>=1.6&&t<2?"pointer":"default")},window.onresize=r}();
//# sourceMappingURL=programa.js.map