const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelector('p');
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor

for (let p of ps){
    p.style.backgroundColor = backgroundColorBody
    p.style.color = '#FFFFFF';
}