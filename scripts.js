const images = document.querySelectorAll('.profile-img');
let currentIndex = 0;

function carousel() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(carousel, 3000); // Change image every 3 seconds

const readMoreBtn = document.getElementById('readMoreBtn');
const bioSection = document.getElementById('bioSection');
const closeBioBtn = document.getElementById('closeBioBtn');

readMoreBtn.addEventListener('click', () => {
    bioSection.classList.toggle('visible');
});

closeBioBtn.addEventListener('click', () => {
    bioSection.classList.remove('visible');
});

// Close bio section when clicking outside (if necessary)
document.addEventListener('click', (event) => {
    if (!bioSection.contains(event.target) && !readMoreBtn.contains(event.target)) {
        bioSection.classList.remove('visible');
    }
});
