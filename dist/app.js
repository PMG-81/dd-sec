const current=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('nav a').forEach(a=>{if(a.getAttribute('href')===current)a.setAttribute('aria-current','page')});
const form=document.querySelector('#quote');
if(form){const service=new URLSearchParams(location.search).get('servicio');if(['01','02','03'].includes(service))document.querySelector('#service').selectedIndex=Number(service)-1;form.addEventListener('submit',event=>{event.preventDefault();const result=document.querySelector('#result');result.hidden=false;result.textContent='Demostración completada. En la versión final, esta solicitud se enviará al negocio. No se ha enviado ni guardado ningún dato.';});}
