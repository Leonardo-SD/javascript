const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of ps) {
   p.style.backgroundColor = backgroundColorBody;
   p.style.color = '#FFFFFF';
   p.style.padding = '20px';
   p.style.borderRadius = '10px';
}