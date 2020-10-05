// select button 
const mainBtn = document.querySelector('.btn-bar');
const close = document.getElementById('close-btn');

// get nav
const nav = document.querySelector('.container');

// btn to add a class
mainBtn.addEventListener('click', function(){
    nav.classList.add('show-nav');
})

// btn to remove a class
close.addEventListener('click', function(){
    nav.classList.remove('show-nav');
})