
// TBOY VISUALS — EDITORIAL ARCHIVE

const editorialImages = document.querySelectorAll(
    '.editorial-item img'
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
    '.editorial-item, .editorial-intro, .editorial-collection-heading'
).forEach(item => {
    item.classList.add('reveal');
    revealObserver.observe(item);
});

// OPEN SHARED IMAGE VIEWER

editorialImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        window.location.href =
            `viewer.html?archive=editorial&image=${index}`;
    });
});
