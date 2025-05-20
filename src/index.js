import './styles/style.css' ;
import foto1Img from '.assets/images/foto1.jpg' ;

const img = document.createElement('img') ;
img.src = foto1Img ;
img.alt = 'Foto 1' ;
document.body.appendChild(img) ;

const h1 = document.createElement('h1') ;
h1.textContent = 'Hello World' ;
document.body.appendChild(h1) ;