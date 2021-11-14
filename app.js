// funzionamento del menù 

const mainmenu = document.querySelector('.MainMenu');
const openmenu = document.querySelector('.OpenMenu');
const closemenu = document.querySelector('.closemenu');

openmenu.addEventListener('click', show);
closemenu.addEventListener('click', close)

function show(){
    mainmenu.style.display = "flex";
    mainmenu.style.top = '0';
}

function close(){
    mainmenu.style.top = '-100%';
}

