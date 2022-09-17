const hamburguerIcon = document.querySelector(".hamburguer__icon");

const hamburguerMenu = document.querySelector(".hamburguer__content"); 


hamburguerIcon.addEventListener('click', ()=> {
    hamburguerMenu.classList.toggle('showModal')
   
}
)