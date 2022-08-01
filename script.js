// sidebar
let menuItem = document.querySelectorAll(".menu-item");
// ===========messages=========
let messageNotification = document.querySelector('#messages-notification');
    let messages = document.querySelector(".messages");
    let message =  document.querySelectorAll('.message')
// remove active class in menu items
//search messages
let messageSearch = document.querySelector("#message-search")
let changeActiveItem = () => {
    menuItem.forEach(item => {
        item.classList.remove('active')
    })
}

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
messageNotification.addEventListener('click',()=>{
    messages.style.boxShadow = "0 0 1rem var(--color-primary)";
    messageNotification.querySelector('.notification-count').style.display = 'none';
    
    
    setTimeout(() => {
    messages.style.boxShadow = "none";
        
    }, 2000);
})