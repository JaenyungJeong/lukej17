

const track = document.getElementById('sliderTrack');
const slideWidth = 130; // 이미지(120px) + 마진(10px)
const visibleCount = 3; // 보여줄 이미지 수
const totalSlides = track.querySelectorAll('img').length;
let currentIndex = 0;

function nextSlide() {
    currentIndex++;
    if (currentIndex > totalSlides - visibleCount) {
        currentIndex = 0;
    }
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}