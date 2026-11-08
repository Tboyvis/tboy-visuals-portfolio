/* TBOY VISUALS — CINEMATIC IMAGE VIEWER */

// COLLECTIONS

const collections = {
    fashion: {
        title: "FASHION ARCHIVE",
        archive: "fashion.html",
        images: [
            "../images-webp/fashion/1.webp",
            "../images-webp/fashion/2.webp",
            "../images-webp/fashion/3.webp",
            "../images-webp/fashion/4.webp",
            "../images-webp/fashion/5.webp",
            "../images-webp/fashion/6.webp",
            "../images-webp/fashion/7.webp",
            "../images-webp/fashion/8.webp"
        ]
    },

    "red-room": {
        title: "THE RED ROOM",
        archive: "red-room.html",
        images: [
            "../images/red-room/images-02.JPG",
            "../images/red-room/images-03.JPG",
            "../images/red-room/images-04.JPG"
        ]
    },

    lifestyle: {
        title: "LIFESTYLE ARCHIVE",
        archive: "lifestyle.html",
        images: [
            "../images-webp/lifestyles/1.webp",
            "../images-webp/lifestyles/2.webp",
            "../images-webp/lifestyles/3.webp",
            "../images-webp/lifestyles/4.webp",
            "../images-webp/lifestyles/5.webp",
            "../images-webp/lifestyles/6.webp",
            "../images-webp/lifestyles/7.webp",
            "../images-webp/lifestyles/8.webp",
            "../images-webp/lifestyles/9.webp",
            "../images-webp/lifestyles/10.webp",
            "../images-webp/lifestyles/11.webp",
            "../images-webp/lifestyles/12.webp",
            "../images-webp/lifestyles/13.webp",
            "../images-webp/lifestyles/14.webp"
        ]
    }
};


// URL PARAMETERS

const params = new URLSearchParams(window.location.search);

const archiveName = params.get("archive");
const startingImage = Number.parseInt(params.get("image"), 10);

const collection = collections[archiveName];


// VIEWER ELEMENTS

const viewer = document.querySelector(".viewer");
const mainImage = document.querySelector(".viewer-main img");
const prevImage = document.querySelector(".viewer-prev img");
const nextImage = document.querySelector(".viewer-next img");

const prevButton = document.querySelector(".viewer-prev");
const nextButton = document.querySelector(".viewer-next");

const backButton = document.querySelector(".viewer-back");
const projectName = document.querySelector(".viewer-project");
const counter = document.querySelector(".viewer-counter");

let currentIndex = Number.isInteger(startingImage)
    ? startingImage
    : 0;


// IMAGE CACHE

let imageRequest = 0;

const imageCache = new Map();

function preloadImage(src) {

    if (imageCache.has(src)) {
        return imageCache.get(src);
    }

    const image = new Image();

    image.decoding = "async";
    image.src = src;

    const promise = image.decode()
        .then(function () {
            return image;
        })
        .catch(function () {
            return image;
        });

    imageCache.set(src, promise);

    return promise;
}


// CHECK COLLECTION

if (!collection) {

    viewer.innerHTML =
        '<p>Collection not found.</p>' +
        '<a href="../index.html">Return to archive</a>';

} else {

    document.title = collection.title + " — Tboy Visuals";

    projectName.textContent = collection.title;
    backButton.href = collection.archive;

    
    // GET IMAGE INDEX

    function getIndex(index) {
        const total = collection.images.length;
        return (index + total) % total;
    }


    // PREPARE CURRENT AND NEIGHBOURING IMAGES

    function prepareImages() {

        const total = collection.images.length;

        const indices = [
            currentIndex,
            getIndex(currentIndex - 1),
            getIndex(currentIndex + 1),
            getIndex(currentIndex + 2)
        ];

        indices.forEach(function (index) {
            preloadImage(collection.images[index]);
        });

        // Keep the cache small.

        const keep = new Set(
            indices.map(function (index) {
                return collection.images[index];
            })
        );

        imageCache.forEach(function (value, key) {
            if (!keep.has(key)) {
                imageCache.delete(key);
            }
        });
    }


 
// LOAD MAIN PHOTOGRAPH

async function showMainImage(index) {

    const request = ++imageRequest;
    const src = collection.images[index];

    mainImage.style.opacity = "0";

    const image = await preloadImage(src);

    if (request !== imageRequest) return;

    if (!image.naturalWidth) {
        mainImage.src = src;
        mainImage.alt = collection.title + " photograph " + (index + 1);

        mainImage.onload = function () {
            if (request === imageRequest) {
                mainImage.style.opacity = "1";
                mainImage.style.transform = "translateX(0)";
            }
        };

        return;
    }

    mainImage.src = src;
    mainImage.alt = collection.title + " photograph " + (index + 1);

    mainImage.style.transform = "translateX(12px)";

    requestAnimationFrame(function () {
        if (request !== imageRequest) return;

        mainImage.style.opacity = "1";
        mainImage.style.transform = "translateX(0)";
    });
}


    // UPDATE SIDE PREVIEWS

    function updateSideImages() {

        const previousIndex = getIndex(currentIndex - 1);
        const followingIndex = getIndex(currentIndex + 1);

        prevImage.src = collection.images[previousIndex];
        prevImage.alt = "Previous photograph";

        nextImage.src = collection.images[followingIndex];
        nextImage.alt = "Next photograph";
    }


    // UPDATE SLIDESHOW

    function updateViewer() {

        const total = collection.images.length;

        currentIndex = getIndex(currentIndex);

        counter.textContent =
            String(currentIndex + 1).padStart(2, "0") +
            " / " +
            String(total).padStart(2, "0");

        updateSideImages();

        prepareImages();

        showMainImage(currentIndex);
    }


    // NAVIGATION

    function showNext() {

        currentIndex++;
        updateViewer();
    }

    function showPrevious() {

        currentIndex--;
        updateViewer();
    }


 
// BUTTON AND SWIPE CONTROLS

let suppressPreviewClickUntil = 0;

prevButton.addEventListener("click", function () {

    if (Date.now() < suppressPreviewClickUntil) return;

    showPrevious();
});

nextButton.addEventListener("click", function () {

    if (Date.now() < suppressPreviewClickUntil) return;

    showNext();
});


// KEYBOARD CONTROLS

document.addEventListener("keydown", function (event) {

    if (event.key === "ArrowRight") {
        showNext();
    }

    if (event.key === "ArrowLeft") {
        showPrevious();
    }

    if (event.key === "Escape") {
        window.location.href = collection.archive;
    }
});


// MOBILE SWIPE CONTROLS

const swipeArea = document.querySelector(".viewer-gallery");

let touchStartX = null;
let touchStartY = null;

swipeArea.addEventListener("touchstart", function (event) {

    if (event.touches.length !== 1) return;

    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;

}, { passive: true });


swipeArea.addEventListener("touchend", function (event) {

    if (touchStartX === null) return;

    const touchEndX = event.changedTouches[0].clientX;
    const touchEndY = event.changedTouches[0].clientY;

    const differenceX = touchEndX - touchStartX;
    const differenceY = touchEndY - touchStartY;

    touchStartX = null;
    touchStartY = null;

    if (
        Math.abs(differenceX) > 55 &&
        Math.abs(differenceX) > Math.abs(differenceY) * 1.2
    ) {

        suppressPreviewClickUntil = Date.now() + 500;

        if (differenceX < 0) {
            showNext();
        } else {
            showPrevious();
        }
    }

}, { passive: true });


swipeArea.addEventListener("touchcancel", function () {

    touchStartX = null;
    touchStartY = null;

}, { passive: true });

    // START VIEWER

    if (currentIndex < 0 || currentIndex >= collection.images.length) {
        currentIndex = 0;
    }

    updateViewer();
}