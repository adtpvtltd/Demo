let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})


// Get elements
const bookNowLink = document.getElementById('bookNowLink');
const bookingModal = document.getElementById('bookingModal');
const closeButton = document.querySelector('.close-button');

// Function to open modal
function openModal() {
    bookingModal.style.display = 'block';
}

// Function to close modal
function closeModal() {
    bookingModal.style.display = 'none';
}

// Event listener for 'Book Now' link
bookNowLink.addEventListener('click', function(event) {
    event.preventDefault();
    openModal();
});

// Event listener for close button
closeButton.addEventListener('click', closeModal);

// Event listener to close modal when clicking outside the modal content
window.addEventListener('click', function(event) {
    if (event.target === bookingModal) {
        closeModal();
    }
});



