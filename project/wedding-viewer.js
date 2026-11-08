
/* ==========================================
   TBOY VISUALS — THE WEDDING FILM
   CINEMATIC THREE IMAGE VIEWER
========================================== */

const weddingImages = [
    "../images-webp/wedding/1.webp",
    "../images-webp/wedding/2.webp",
    "../images-webp/wedding/3.webp",
    "../images-webp/wedding/4.webp",
    "../images-webp/wedding/5.webp",
    "../images-webp/wedding/6.webp",
    "../images-webp/wedding/8.webp",
    "../images-webp/wedding/10.jpgg.webp",
    "../images-webp/wedding/DSC_0044.webp",
    "../images-webp/wedding/DSC_0075.jpgg.webp",
    "../images-webp/wedding/DSC_0081.jpg2.webp",
    "../images-webp/wedding/DSC_0081.jpgg.webp",
    "../images-webp/wedding/DSC_0086.jpg1.webp",
    "../images-webp/wedding/DSC_0087.webp",
    "../images-webp/wedding/DSC_0108.webp",
    "../images-webp/wedding/DSC_0170.webp",
    "../images-webp/wedding/DSC_1950.webp",
    "../images-webp/wedding/DSC_1994.jpg1.webp",
    "../images-webp/wedding/DSC_1996.jpg1.webp",
    "../images-webp/wedding/DSC_2044.webp",
    "../images-webp/wedding/DSC_2054.webp",
    "../images-webp/wedding/DSC_2072.jpg1.webp",
    "../images-webp/wedding/DSC_2163.webp",
    "../images-webp/wedding/DSC02636.webp"
];


/* WEDDING STORY CAPTIONS */

const weddingCaptions = [

    {
        label: "CHAPTER 01 — THE BRIDE",
        title: "Before the Forever",
        description: "The quiet beauty before a day to remember."
    },
    {
        label: "CHAPTER 02 — THE CELEBRATION",
        title: "A Day in Full Bloom",
        description: "Love, laughter and everyone who made it special."
    },
    {
        label: "CHAPTER 02 — THE CELEBRATION",
        title: "The Celebration Begins",
        description: "A room full of joy and a moment worth keeping."
    },
    {
        label: "CHAPTER 02 — THE CELEBRATION",
        title: "Her People, Her Moment",
        description: "Surrounded by the women who shared her day."
    },
    {
        label: "CHAPTER 02 — THE CELEBRATION",
        title: "The Gentlemen",
        description: "The crew, the brotherhood and the occasion."
    },
    {
        label: "CHAPTER 02 — THE CELEBRATION",
        title: "By Her Side",
        description: "A little moment with someone special."
    },
    {
        label: "CHAPTER 02 — THE CELEBRATION",
        title: "Together in White",
        description: "A portrait framed by celebration."
    },
    {
        label: "CHAPTER 03 — THE PROMISE",
        title: "The First Kiss",
        description: "One beautiful moment, a lifetime of meaning."
    },
    {
        label: "CHAPTER 03 — THE PROMISE",
        title: "The Ones Beside Her",
        description: "The people who make every milestone memorable."
    },
    {
        label: "CHAPTER 03 — THE PROMISE",
        title: "A Promise Held",
        description: "The smallest gestures carry the biggest meaning."
    },
    {
        label: "CHAPTER 03 — THE PROMISE",
        title: "Into Your Arms",
        description: "A moment of closeness, held in time."
    },
    {
        label: "CHAPTER 03 — THE PROMISE",
        title: "A Closer Kind of Forever",
        description: "Two hearts, one unforgettable moment."
    },
    {
        label: "CHAPTER 03 — THE PROMISE",
        title: "The Words That Matter",
        description: "A promise spoken in front of the world."
    },
    {
        label: "CHAPTER 03 — THE PROMISE",
        title: "A Moment of Joy",
        description: "The happiness of a promise fulfilled."
    },
    {
        label: "CHAPTER 04 — THE PORTRAITS",
        title: "A New Chapter",
        description: "Two lives, now walking in the same direction."
    },
    {
        label: "CHAPTER 04 — THE PORTRAITS",
        title: "Together, Always",
        description: "A portrait of the beginning of forever."
    },
    {
        label: "CHAPTER 04 — THE PORTRAITS",
        title: "The Walk Into Forever",
        description: "Every step carries the promise of something beautiful."
    },
    {
        label: "CHAPTER 04 — THE PORTRAITS",
        title: "Her Light",
        description: "A bride, a beautiful presence, an unforgettable day."
    },
    {
        label: "CHAPTER 04 — THE PORTRAITS",
        title: "The Man of the Moment",
        description: "A portrait from a day that changed everything."
    },
    {
        label: "CHAPTER 05 — THE DETAILS",
        title: "The Little Details",
        description: "The details that make a promise personal."
    },
    {
        label: "CHAPTER 05 — THE DETAILS",
        title: "Side by Side",
        description: "The beauty of having found your person."
    },
    {
        label: "CHAPTER 05 — THE DETAILS",
        title: "The Promise Made Official",
        description: "A new chapter, signed and celebrated."
    },
    {
        label: "CHAPTER 05 — THE DETAILS",
        title: "A Sweet Beginning",
        description: "A little sweetness to celebrate a lifetime."
    },
    {
        label: "CHAPTER 05 — THE DETAILS",
        title: "Just Us",
        description: "When the rest of the world fades away."
    }

];


let currentIndex = 0;
let isAnimating = false;


/* ELEMENTS */

const viewerImage = document.getElementById("viewer-image");
const previousPreview = document.getElementById("previous-preview");
const nextPreview = document.getElementById("next-preview");

const currentImage = document.getElementById("current-image");
const totalImages = document.getElementById("total-images");

const viewerTitle = document.getElementById("viewer-title");
const viewerCaptionLabel = document.getElementById("viewer-caption-label");
const viewerDescription = document.getElementById("viewer-description");

const previousButton = document.getElementById("previous-image");
const nextButton = document.getElementById("next-image");

const viewerStage = document.querySelector(".viewer-stage");


/* PRELOAD IMAGES */

weddingImages.forEach((src) => {
    const image = new Image();
    image.src = src;
});


/* IMAGE COUNTER */

function updateCounter() {

    currentImage.textContent =
        String(currentIndex + 1).padStart(2, "0");

    totalImages.textContent =
        String(weddingImages.length).padStart(2, "0");
}


/* UPDATE CAPTION */

function updateCaption() {

    const caption = weddingCaptions[currentIndex];

    viewerTitle.textContent = caption.title;
    viewerCaptionLabel.textContent = caption.label;
    viewerDescription.textContent = caption.description;
}


/* SIDE IMAGE PREVIEWS */

function updatePreviews() {

    const previousIndex =
        (currentIndex - 1 + weddingImages.length) % weddingImages.length;

    const nextIndex =
        (currentIndex + 1) % weddingImages.length;

    previousPreview.src = weddingImages[previousIndex];
    nextPreview.src = weddingImages[nextIndex];

    previousPreview.alt = "Previous wedding photograph";
    nextPreview.alt = "Next wedding photograph";
}


/* CINEMATIC IMAGE TRANSITION */

function showImage(index, direction = 1) {

    if (weddingImages.length === 0 || isAnimating) return;

    const nextIndex =
        (index + weddingImages.length) % weddingImages.length;

    if (nextIndex === currentIndex) return;

    const newImage = new Image();

    newImage.onload = () => {

        isAnimating = true;

        viewerImage.style.transition =
            "opacity .65s ease, transform .9s cubic-bezier(.22,.61,.36,1)";

        viewerImage.style.opacity = "0";
        viewerImage.style.transform =
            `translateX(${direction * -35}px) scale(.985)`;

        previousPreview.style.transition =
            "opacity .8s ease, transform .9s cubic-bezier(.22,.61,.36,1)";

        nextPreview.style.transition =
            "opacity .8s ease, transform .9s cubic-bezier(.22,.61,.36,1)";

        previousPreview.style.opacity = "0.2";
        nextPreview.style.opacity = "0.2";

        previousPreview.style.transform = "scale(.96)";
        nextPreview.style.transform = "scale(.96)";

        setTimeout(() => {

            currentIndex = nextIndex;

            viewerImage.src = newImage.src;
            viewerImage.alt =
                `Wedding photograph ${currentIndex + 1}`;

            viewerImage.style.transform =
                `translateX(${direction * 25}px) scale(.985)`;

            updatePreviews();
            updateCounter();
            updateCaption();

            requestAnimationFrame(() => {

                viewerImage.style.opacity = "1";
                viewerImage.style.transform = "translateX(0) scale(1)";

                previousPreview.style.opacity = "";
                nextPreview.style.opacity = "";

                previousPreview.style.transform = "";
                nextPreview.style.transform = "";

            });

            setTimeout(() => {
                isAnimating = false;
            }, 900);

        }, 400);
    };

    newImage.onerror = () => {
        console.error(
            "Could not load wedding image:",
            weddingImages[nextIndex]
        );
    };

    newImage.src = weddingImages[nextIndex];
}


/* SIDE IMAGE NAVIGATION */

previousButton.addEventListener("click", () => {
    showImage(currentIndex - 1, -1);
});

nextButton.addEventListener("click", () => {
    showImage(currentIndex + 1, 1);
});


/* KEYBOARD NAVIGATION */

document.addEventListener("keydown", (event) => {

    if (event.key === "ArrowRight") {
        showImage(currentIndex + 1, 1);
    }

    if (event.key === "ArrowLeft") {
        showImage(currentIndex - 1, -1);
    }

});


/* MOBILE SWIPE NAVIGATION */

let touchStartX = 0;

viewerStage.addEventListener("touchstart", (event) => {

    touchStartX = event.changedTouches[0].screenX;

}, { passive: true });


viewerStage.addEventListener("touchend", (event) => {

    const touchEndX = event.changedTouches[0].screenX;
    const swipeDistance = touchEndX - touchStartX;

    if (Math.abs(swipeDistance) < 50) return;

    if (swipeDistance < 0) {
        showImage(currentIndex + 1, 1);
    } else {
        showImage(currentIndex - 1, -1);
    }

}, { passive: true });


/* INITIALISE VIEWER */

function initialiseViewer() {

    totalImages.textContent =
        String(weddingImages.length).padStart(2, "0");

    viewerImage.src = weddingImages[0];
    viewerImage.alt = "Wedding photograph 1";

    updateCounter();
    updatePreviews();
    updateCaption();
}

initialiseViewer();
