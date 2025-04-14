document.addEventListener('DOMContentLoaded', () => {
    // Partners slider hover functionality
    const slideTrack = document.querySelector('.partners-slide-track');

    slideTrack.addEventListener('mouseenter', () => {
        slideTrack.style.animationPlayState = 'paused';
    });

    slideTrack.addEventListener('mouseleave', () => {
        slideTrack.style.animationPlayState = 'running';
    });

    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });

    // Promotional banner functionality
    const promoBanner = document.getElementById('promoBanner');
    const bannerClose = document.getElementById('bannerClose');

    // Function to show the banner
    const showBanner = () => {
        promoBanner.classList.add('active');
    };

    // Function to hide the banner
    const hideBanner = () => {
        promoBanner.classList.remove('active');
    };

    // Show banner initially after a slight delay
    setTimeout(showBanner, 1000);

    // Show banner every 5 minutes (300,000 milliseconds)
    setInterval(showBanner, 300000);

    // Close banner on click
    bannerClose.addEventListener('click', () => {
        hideBanner();
    });

    // Optional: Hide banner when clicking outside
    document.addEventListener('click', (e) => {
        if (!promoBanner.contains(e.target) && !e.target.closest('.banner-close')) {
            hideBanner();
        }
    });
});