const images = document.querySelectorAll('.gallery-img');
let currentIndex = 0;

// Lightbox open karna
function openLightbox(index) {
  currentIndex = index;
  document.getElementById('lightbox').style.display = 'flex';
  document.getElementById('lightbox-img').src = images[index].src;
}

// Lightbox close karna
function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

// Next/Prev image change karna
function changeImage(direction) {
  currentIndex = currentIndex + direction;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  document.getElementById('lightbox-img').src = images[currentIndex].src;
}

// Category filter karna
function filterImages(category) {
  images.forEach(img => {
    if (category === 'all' || img.getAttribute('data-category') === category) {
      img.style.display = 'inline-block';
    } else {
      img.style.display = 'none';
    }
  });

  // Active button highlight karna
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}

// Keyboard se lightbox control (bonus)
document.addEventListener('keydown', function(e) {
  const lightbox = document.getElementById('lightbox');
  if (lightbox.style.display === 'flex') {
    if (e.key === 'ArrowRight') changeImage(1);
    if (e.key === 'ArrowLeft') changeImage(-1);
    if (e.key === 'Escape') closeLightbox();
  }
});