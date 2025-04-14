document.addEventListener('DOMContentLoaded', () => {
    const slideTrack = document.querySelector('.partners-slide-track');

    slideTrack.addEventListener('mouseenter', () => {
        slideTrack.style.animationPlayState = 'paused';
    });

    slideTrack.addEventListener('mouseleave', () => {
        slideTrack.style.animationPlayState = 'running';
    });
});