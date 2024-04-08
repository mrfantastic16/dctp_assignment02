const headerEl = document.querySelector(".header-section");
const btnEl = document.querySelector(".mobile-nav");

btnEl.addEventListener('click', function(){
    headerEl.classList.toggle('open-nav');
})
