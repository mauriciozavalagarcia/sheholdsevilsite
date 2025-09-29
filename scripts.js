let currentPhotoIndex = 0;
const photos = [
  "assets/logo2.png",
  "assets/logo3.png",
  "assets/background.jpg"
];

function openLightbox(index) {
  currentPhotoIndex = index;
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightbox.style.display = 'flex';
  lightboxImg.src = photos[currentPhotoIndex];
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function changePhoto(direction) {
  currentPhotoIndex += direction;
  if (currentPhotoIndex < 0) currentPhotoIndex = photos.length - 1;
  if (currentPhotoIndex >= photos.length) currentPhotoIndex = 0;
  document.getElementById('lightbox-img').src = photos[currentPhotoIndex];
}

/* Keyboard support */
document.addEventListener('keydown', function(e) {
  const lightbox = document.getElementById('lightbox');
  if (lightbox.style.display === 'flex') {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') changePhoto(-1);
    if (e.key === 'ArrowRight') changePhoto(1);
  }
});
