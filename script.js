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
let fontSizes = document.querySelectorAll('.choose-size');

var root = document.querySelector(':root');

// // search chat
// const searchMessage = () => {
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
fontSizes.forEach(size => {
    let fontSize;
   size.addEventListener('click',()=>{
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
    } else if (size.classList.contains('font-size-5')) {
        fontSize = '22px';
        root.style.setProperty('----sticky-top-left', '-10rem');
        root.style.setProperty('----sticky-top-right', '-33rem');
    }
    console.log(size);
    document.querySelector('html').style.fontSize = fontSize;
    
   })
})