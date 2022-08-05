const open = document.getElementById('open'); //puxando do documento html o id 'open' e colocando como uma constante //
const close = document.getElementById('close'); //puxando do documento html o id 'close' e colocando como uma constante //
const container = document.querySelector('.container'); //colocando container como constante e usando queryselector pq só há um //

open.addEventListener('click',() => container.classList.add('show-nav')); //ao clicar no botao open, será adicionado ao container a class show-nav //

close.addEventListener('click',() => container.classList.remove('show-nav')); //ao clicar no botao close, será removido show-nav do container //