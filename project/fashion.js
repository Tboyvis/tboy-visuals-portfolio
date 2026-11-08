// TBOY VISUALS — FASHION ARCHIVE

const fashionImages = document.querySelectorAll(
    '.fashion-item img'
);

// SCROLL REVEAL

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

document.querySelectorAll(
    '.fashion-item, .fashion-intro, .fashion-collection-heading'
).forEach(item => {
    item.classList.add('reveal');
    revealObserver.observe(item);
});

// OPEN SHARED IMAGE VIEWER

fashionImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        window.location.href =
            `viewer.html?archive=fashion&image=${index}`;
    });
});