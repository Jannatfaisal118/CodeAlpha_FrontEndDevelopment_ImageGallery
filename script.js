// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const captionText = document.getElementById('caption');

document.querySelectorAll('.gallery a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        lightbox.style.display = 'block';
        lightboxImg.src = this.href;
        captionText.innerHTML = this.querySelector('img').alt;
    });
});

// Close the lightbox
document.querySelector('.close').addEventListener('click', function() {
    lightbox.style.display = 'none';
});

// Close the lightbox when clicking outside the image
lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
