
/* ==========================================
   TBOY VISUALS
   EVENTS VIEWER
   THREE COLLECTIONS — NO CAPTIONS
========================================== */


/* EVENT PHOTOGRAPHS */

const eventCollections = {

    birthday: {
        name: "BASKETBALL BIRTHDAY",

        images: [
            "DSC_0579.webp",
            "DSC_0580.webp",
            "DSC_0582.webp",
            "DSC_0584.webp",
            "DSC_0585.webp",
            "DSC_0586.webp",
            "DSC_0587.webp",
            "DSC_0588.webp",
            "DSC_0589.webp",
            "DSC_0592.webp",
            "DSC_0598.webp",
            "DSC_0613.webp",
            "DSC_0620.webp",
            "DSC_0625.webp",
            "DSC_0649.webp",
            "DSC_0655.webp",
            "DSC_0656.webp",
            "DSC_0665.webp",
            "DSC_0670.webp",
            "DSC_0675.webp",
            "DSC_0686.webp",
            "DSC_0692.webp",
            "DSC_0697.webp",
            "DSC_0702.webp",
            "DSC_0723.webp",
            "DSC_0726.webp",
            "DSC_0732.webp",
            "DSC_0735.webp",
            "DSC_0745.webp",
            "DSC_0770.webp",
            "DSC_0784.webp",
            "DSC_0793.webp",
            "DSC_0800.webp"
        ]
    },


    family: {
        name: "FAMILY CELEBRATION",

        images: [
            "DSC_1125.webp",
            "DSC_1130.webp",
            "DSC_1156.webp",
            "DSC_1157.webp",
            "DSC_1162.webp",
            "DSC_1165.webp",
            "DSC_1166.webp",
            "DSC_1167.webp",
            "DSC_1170.webp",
            "DSC_1189.webp",
            "DSC_1206.webp",
            "DSC_1219.webp",
            "DSC_1220.webp",
            "DSC_1241.webp",
            "DSC_1287.webp",
            "DSC_1297.webp",
            "DSC_1299.webp",
            "DSC_1320.webp",
            "DSC_1321.webp",
            "DSC_1331.webp"
        ]
    },


    social: {
        name: "SOCIAL GATHERING",

        images: [
            "DSC_2198.jpg1.webp",
            "DSC_2198.jpg2.webp",
            "DSC_2224.jpg1.webp",
            "DSC_2227.jpg1.webp",
            "DSC_2258.jpg1.webp",
            "DSC_2266.jpg1.webp"
        ]
    }

};


/* ELEMENTS */

const viewerImage = document.getElementById("viewer-image");
const previousButton = document.getElementById("previous-image");
const nextButton = document.getElementById("next-image");

const currentImageCounter = document.getElementById("current-image");
const totalImagesCounter = document.getElementById("total-images");

const collectionName = document.getElementById("collection-name");
const thumbnailContainer = document.getElementById("viewer-thumbnails");

const collectionButtons = document.querySelectorAll(".collection-button");
const viewerStage = document.getElementById("viewer-stage");


/* STATE */

let currentCollection = "birthday";
let currentIndex = 0;
let isChanging = false;


/* HELPERS */

function getImagePath(filename) {
    return `../images-webp/events/${filename}`;
}

function formatNumber(number) {
    return String(number).padStart(2, "0");
}

function getCurrentImages() {
    return eventCollections[currentCollection].images;
}


/* UPDATE URL */

function updateCollectionURL() {

    const url = new URL(window.location.href);

    url.searchParams.set("collection", currentCollection);

    window.history.replaceState({}, "", url);

}


/* UPDATE COLLECTION BUTTONS */

function updateCollectionButtons() {

    collectionButtons.forEach((button) => {

        const isActive = button.dataset.collection === currentCollection;

        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));

    });

}


/* UPDATE COUNTER */

function updateCounter() {

    const images = getCurrentImages();

    currentImageCounter.textContent = formatNumber(currentIndex + 1);
    totalImagesCounter.textContent = formatNumber(images.length);

    collectionName.textContent = eventCollections[currentCollection].name;

}


/* PRELOAD IMAGE */

function preloadImage(filename) {

    return new Promise((resolve, reject) => {

        const image = new Image();

        image.onload = () => resolve(image);
        image.onerror = () => reject(new Error(`Could not load ${filename}`));

        image.src = getImagePath(filename);

    });

}


/* DISPLAY IMAGE */

async function displayImage(index, animate = true) {

    const images = getCurrentImages();

    if (index < 0 || index >= images.length || isChanging) {
        return;
    }

    isChanging = true;

    const filename = images[index];

    try {

        const loadedImage = await preloadImage(filename);

        if (animate) {
            viewerImage.classList.add("changing");

            await new Promise((resolve) => {
                setTimeout(resolve, 180);
            });
        }

        viewerImage.src = loadedImage.src;
        viewerImage.alt = `Event photograph ${formatNumber(index + 1)}`;

        currentIndex = index;

        updateCounter();
        updateActiveThumbnail();

        if (animate) {
            requestAnimationFrame(() => {
                viewerImage.classList.remove("changing");
            });
        } else {
            viewerImage.classList.remove("changing");
        }

        preloadAdjacentImages();

    } catch (error) {

        console.error("Unable to load event photograph:", error);
        viewerImage.classList.remove("changing");

    } finally {

        isChanging = false;

    }

}


/* PRELOAD NEXT AND PREVIOUS */

function preloadAdjacentImages() {

    const images = getCurrentImages();

    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    const nextIndex = (currentIndex + 1) % images.length;

    [previousIndex, nextIndex].forEach((index) => {

        const image = new Image();
        image.src = getImagePath(images[index]);

    });

}


/* BUILD THUMBNAILS */

function buildThumbnails() {

    const images = getCurrentImages();

    thumbnailContainer.innerHTML = "";

    images.forEach((filename, index) => {

        const thumbnail = document.createElement("button");

        thumbnail.type = "button";
        thumbnail.className = "thumbnail";

        thumbnail.setAttribute(
            "aria-label",
            `View photograph ${formatNumber(index + 1)}`
        );

        const image = document.createElement("img");

        image.src = getImagePath(filename);
        image.alt = "";
        image.loading = "lazy";
        image.draggable = false;

        thumbnail.appendChild(image);

        thumbnail.addEventListener("click", () => {
            displayImage(index);
        });

        thumbnailContainer.appendChild(thumbnail);

    });

    updateActiveThumbnail();

}


/* ACTIVE THUMBNAIL */

function updateActiveThumbnail() {

    const thumbnails = thumbnailContainer.querySelectorAll(".thumbnail");

    thumbnails.forEach((thumbnail, index) => {

        const isActive = index === currentIndex;

        thumbnail.classList.toggle("active", isActive);

        thumbnail.setAttribute(
            "aria-current",
            isActive ? "true" : "false"
        );

    });

    const activeThumbnail = thumbnails[currentIndex];

    if (!activeThumbnail) return;

    const containerRect = thumbnailContainer.getBoundingClientRect();
    const thumbnailRect = activeThumbnail.getBoundingClientRect();

    // Scroll horizontally only when the active thumbnail
    // moves outside the visible thumbnail strip.

    if (thumbnailRect.left < containerRect.left) {

        thumbnailContainer.scrollBy({
            left: thumbnailRect.left - containerRect.left - 12,
            behavior: "smooth"
        });

    } else if (thumbnailRect.right > containerRect.right) {

        thumbnailContainer.scrollBy({
            left: thumbnailRect.right - containerRect.right + 12,
            behavior: "smooth"
        });

    }

}


/* SWITCH COLLECTION */

function switchCollection(collection) {

    if (!eventCollections[collection]) {
        return;
    }

    currentCollection = collection;
    currentIndex = 0;

    updateCollectionButtons();
    updateCollectionURL();
    buildThumbnails();
    updateCounter();

    displayImage(0, false);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* NEXT IMAGE */

function showNextImage() {

    const images = getCurrentImages();

    const nextIndex = (currentIndex + 1) % images.length;

    displayImage(nextIndex);

}


/* PREVIOUS IMAGE */

function showPreviousImage() {

    const images = getCurrentImages();

    const previousIndex = (currentIndex - 1 + images.length) % images.length;

    displayImage(previousIndex);

}


/* COLLECTION BUTTON EVENTS */

collectionButtons.forEach((button) => {

    button.addEventListener("click", () => {

        switchCollection(button.dataset.collection);

    });

});


/* NAVIGATION BUTTON EVENTS */

nextButton.addEventListener("click", showNextImage);
previousButton.addEventListener("click", showPreviousImage);


/* KEYBOARD NAVIGATION */

document.addEventListener("keydown", (event) => {

    if (event.key === "ArrowRight") {
        showNextImage();
    }

    if (event.key === "ArrowLeft") {
        showPreviousImage();
    }

});


/* MOBILE SWIPE */

let touchStartX = 0;
let touchStartY = 0;

viewerStage.addEventListener("touchstart", (event) => {

    touchStartX = event.changedTouches[0].screenX;
    touchStartY = event.changedTouches[0].screenY;

}, { passive: true });


viewerStage.addEventListener("touchend", (event) => {

    const touchEndX = event.changedTouches[0].screenX;
    const touchEndY = event.changedTouches[0].screenY;

    const differenceX = touchEndX - touchStartX;
    const differenceY = touchEndY - touchStartY;

    if (
        Math.abs(differenceX) > 50 &&
        Math.abs(differenceX) > Math.abs(differenceY)
    ) {

        if (differenceX < 0) {
            showNextImage();
        } else {
            showPreviousImage();
        }

    }

}, { passive: true });


/* INITIALISE VIEWER */

function initialiseViewer() {

    const parameters = new URLSearchParams(window.location.search);

    const requestedCollection = parameters.get("collection");

    if (eventCollections[requestedCollection]) {
        currentCollection = requestedCollection;
    }

    updateCollectionButtons();
    buildThumbnails();
    updateCounter();

    displayImage(0, false);

}


/* START */

initialiseViewer();
