let visible = document.querySelector('.menu-vertical');
let visibleTwo = document.querySelector('.vt-two');
let features = document.querySelector('.link-feat');
let company = document.querySelector('.link-comp')
    close = document.querySelector('body')
    translateMenu=document.querySelector('.flex')
    menuClose=document.querySelector('.img-close')
    openClose=document.querySelector('.icon-menu')

// features.addEventListener('click',()=>{
//     visible.style.display='block'
// })
//BOTONES DE MENU
features.addEventListener('click',(e)=>{
    visible.classList.toggle('active');
})
company.addEventListener('click',(e)=>{
    visibleTwo.classList.toggle('active-two');
})
//
// menuClose.addEventListener('click',(e)=>{
//     translateMenu.classList.toggle('flex')
// })
openClose.addEventListener('click',()=>{
    translateMenu.style.transform='translateX(0)'
})
menuClose.addEventListener('click',()=>{
    translateMenu.style.transform='translateX(30rem)'
})