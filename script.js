// sidebar
let menuItem = document.querySelectorAll(".menu-item");

// ===========messages=========
let messageNotification = document.querySelector('#messages-notification');
let messages = document.querySelector(".messages");

let message = document.querySelectorAll('.message');
let messageSearch = document.querySelector('#message-search');
// theme
let theme = document.querySelector('#theme');
let themeModal = document.querySelector('.customize-theme');
// font size
let fontSizes = document.querySelectorAll('.choose-size span');

var root = document.querySelector(':root');

const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

// // search chat
// const searchMessage = () => {>
//     const val = messageSearch.value.toLowerCase();
//     console.log(val);
//     message.forEach(user => {
//         let name = user.getElementsByTagName('h5').textContent.toLowerCase();
//         if (name.indexOf(val) != -1) {
//             user.style.display = 'flex';
//         } else {
//             user.style.display = 'none';
//         }
//     })
// }
// // search messages
// messageSearch.addEventListener('keyup', searchMessage);

// remove active class in menu
let changeActiveItem = () => {
    menuItem.forEach(item => {
        item.classList.remove('active')
    })
}
// Notification will show when clicked
menuItem.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.notification-popup').style.display = 'none';
        } else {
            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('.notification-count').style.display = 'none';

        }
    })
});
// messages will be highlighted if its clicked
messageNotification.addEventListener('click', () => {
    messages.style.boxShadow = "0 0 1rem var(--color-primary)";
    messageNotification.querySelector('.notification-count').style.display = 'none';


    setTimeout(() => {
        messages.style.boxShadow = "none";

    }, 2000);
})
// THEME CUSTOMIZATION
// open theme
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}
theme.addEventListener('click', openThemeModal);
//  close theme 

const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none'
    }
}
themeModal.addEventListener('click', closeThemeModal);

//  changing fontSizes
const removeSizeSelector = ()=>{
    fontSizes.forEach(size =>{
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {
    
   
    size.addEventListener('click',() =>{
        removeSizeSelector();
        let fontSize;
       size.classList.toggle('active');
    if (size.classList.contains('font-size-1')) {
        fontSize = '10px';
        root.style.setProperty('----sticky-top-left', '5.4rem');
        root.style.setProperty('----sticky-top-right', '5.4rem');
    } else if (size.classList.contains('font-size-2')) {
        fontSize = '13px';
        root.style.setProperty('----sticky-top-left', '5.4rem');
        root.style.setProperty('----sticky-top-right', '-7rem');
    } else if (size.classList.contains('font-size-3')) {
        fontSize = '16px';
        root.style.setProperty('----sticky-top-left', '-2rem');
        root.style.setProperty('----sticky-top-right', '-17rem');
    } else if (size.classList.contains('font-size-4')) {
        fontSize = '19px';
        root.style.setProperty('----sticky-top-left', '-5rem');
        root.style.setProperty('----sticky-top-right', '-25rem');
    }
    document.querySelector('html').style.fontSize = fontSize;
    
   })
})


// theme background values
let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;

const changeBG =() =>{
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--white-color-lightness',whiteColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
}

Bg1.addEventListener('click',() =>{
    // add active class
    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    
    window.location.reload();
});
Bg2.addEventListener('click',() =>{
    darkColorLightness = '95%';
    whiteColorLightness ='20%';
    lightColorLightness ='15%';
    
    // add active class
    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});
Bg3.addEventListener('click',() =>{
    darkColorLightness = '95%';
    whiteColorLightness ='10%';
    lightColorLightness ='0%';
    
    // add active class
    Bg3.classList.add('active');
    Bg2.classList.remove('active');
    Bg1.classList.remove('active');
    changeBG();
});