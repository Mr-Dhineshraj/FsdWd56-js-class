let scrollAmount = 0;
const scrollSpeed = 2; // Adjust scroll speed here
const scrollDirection = 'right'; // Change direction if needed (left or right)

function scrollImages() {
    const imageContainer = document.querySelector('.slideshow');

    if (scrollDirection === 'right') {
        scrollAmount += scrollSpeed;
        imageContainer.style.transform = `translateX(-${scrollAmount}px)`;
        if (scrollAmount >= imageContainer.scrollWidth / 2) {
            scrollAmount = 0;
        }
    } else if (scrollDirection === 'left') {
        scrollAmount -= scrollSpeed;
        imageContainer.style.transform = `translateX(-${scrollAmount}px)`;
        if (scrollAmount <= 0) {
            scrollAmount = imageContainer.scrollWidth / 2;
        }
    }

    requestAnimationFrame(scrollImages);
}


// Start scrolling
scrollImages();
