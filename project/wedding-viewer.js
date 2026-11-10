
/* ==========================================
   TBOY VISUALS — THE WEDDING FILM
   CINEMATIC THREE IMAGE VIEWER
   ONE TWO-PHOTO SPREAD
   MOBILE LANDSCAPE OPTIMISATION
   INTERACTIVE THUMBNAIL GALLERY
========================================== */


/* WEDDING IMAGES */

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

    // ONE COMBINED TWO-PHOTO SPREAD
    // First image: LEFT
    // Second image: RIGHT
    [
        "../images-webp/wedding/DSC_1996.jpg1.webp",
        "../images-webp/wedding/DSC_1994.jpg1.webp"
    ],

    
    "../images-webp/wedding/DSC_2044.webp",
    "../images-webp/wedding/DSC_2054.webp",
    "../images-webp/wedding/DSC_2072.jpg1.webp",
    "../images-webp/wedding/DSC_2163.webp",
    "../images-webp/wedding/DSC02636.webp",
    "../images-webp/wedding/FSGD6787.webp",
    "../images-webp/wedding/ULKZ7497.webp",
    "../images-webp/wedding/ULKZ7497.webp",

    // REMAINING WEDDING PHOTOGRAPHS
    "../images-webp/wedding/11.webp",
    "../images-webp/wedding/2v.webp",
    "../images-webp/wedding/3v.webp",
    "../images-webp/wedding/DSC_1965.webp",
    "../images-webp/wedding/DSC_2056.webp",
    "../images-webp/wedding/DSC_2058.webp",
    "../images-webp/wedding/DSC_2076.webp",
    "../images-webp/wedding/ENGAGEMENT.jpg02.webp",
    "../images-webp/wedding/ENGAGEMENT.jpg03.webp",
    "../images-webp/wedding/ENGAGEMENT.jpg04.webp",
    "../images-webp/wedding/ENGAGEMENT.jpg05.webp",
    "../images-webp/wedding/ENGAGEMENT.jpg06.webp",
    "../images-webp/wedding/ENGAGEMENT.jpg09.webp",
    "../images-webp/wedding/ENGAGEMENT.jpg2.webp",
    "../images-webp/wedding/ENGAGEMENT.jpg3.webp",
    "../images-webp/wedding/ENGAGEMENT.jpg4.webp",
    "../images-webp/wedding/ENGAGEMENT.jpg5.webp",
    "../images-webp/wedding/ENGAGEMENT.jpg6.webp",
    "../images-webp/wedding/ENGAGEMENT.jpg8.webp",
    "../images-webp/wedding/ENGAGEMENT.jpg9.webp"
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

    // CAPTION FOR THE COMBINED SPREAD
    {
        label: "CHAPTER 04 — THE PORTRAITS",
        title: "Two Sides of the Story",
        description: "Two photographs, brought together in one moment."
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
    },
        {
        label: "CHAPTER 05 — THE DETAILS",
        title: "A Moment to Remember",
        description: "Another beautiful memory from the celebration."
    },
    {
        label: "CHAPTER 05 — THE DETAILS",
        title: "The Story Continues",
        description: "Two more moments preserved in time."
    },


    {
        label: "CHAPTER 05 — THE DETAILS",
        title: "Another Beautiful Moment",
        description: "A memory worth keeping, just as it happened."
    },
    {
        label: "CHAPTER 05 — THE DETAILS",
        title: "A Day to Remember",
        description: "Another frame from a celebration filled with meaning."
    },
    {
        label: "CHAPTER 05 — THE DETAILS",
        title: "The Beauty Between",
        description: "The little moments that complete the story."
    },
    {
        label: "CHAPTER 05 — THE DETAILS",
        title: "A Memory Preserved",
        description: "A beautiful moment, held beyond the day."
    },
    {
        label: "CHAPTER 05 — THE DETAILS",
        title: "In Good Company",
        description: "The people and moments that make a celebration."
    },
    {
        label: "CHAPTER 05 — THE DETAILS",
        title: "A Little More Joy",
        description: "The celebration continues through every frame."
    },
    {
        label: "CHAPTER 05 — THE DETAILS",
        title: "The Moments We Keep",
        description: "A collection of memories from their special day."
    },
    {
        label: "CHAPTER 06 — THE ENGAGEMENT",
        title: "Before the Wedding",
        description: "The beginning of a beautiful story together."
    },
    {
        label: "CHAPTER 06 — THE ENGAGEMENT",
        title: "A Promise in the Making",
        description: "A chapter filled with anticipation and affection."
    },
    {
        label: "CHAPTER 06 — THE ENGAGEMENT",
        title: "The Two of Us",
        description: "Celebrating the connection that started it all."
    },
    {
        label: "CHAPTER 06 — THE ENGAGEMENT",
        title: "A Love Worth Celebrating",
        description: "A beautiful beginning, captured in photographs."
    },
    {
        label: "CHAPTER 06 — THE ENGAGEMENT",
        title: "The Beginning of Forever",
        description: "The moments leading up to a lifetime together."
    },
    {
        label: "CHAPTER 06 — THE ENGAGEMENT",
        title: "A Story Before the Day",
        description: "The memories that came before the celebration."
    },
    {
        label: "CHAPTER 06 — THE ENGAGEMENT",
        title: "Together in This Moment",
        description: "Two people and a story worth telling."
    },
    {
        label: "CHAPTER 06 — THE ENGAGEMENT",
        title: "The Way We Remember",
        description: "A collection of moments filled with warmth."
    },
    {
        label: "CHAPTER 06 — THE ENGAGEMENT",
        title: "A Beautiful Connection",
        description: "The joy of finding someone to share life with."
    },
    {
        label: "CHAPTER 06 — THE ENGAGEMENT",
        title: "The Story Begins",
        description: "Every forever has a beginning."
    },
    {
        label: "CHAPTER 06 — THE ENGAGEMENT",
        title: "A Moment Together",
        description: "A quiet celebration of two hearts."
    },
    {
        label: "CHAPTER 06 — THE ENGAGEMENT",
        title: "Before the Forever",
        description: "One more memory from the journey to forever."
    },
    {
        label: "CHAPTER 06 — THE ENGAGEMENT",
        title: "The Road to Forever",
        description: "The beginning of everything still to come."
    },
    {
        label: "CHAPTER 06 — THE ENGAGEMENT",
        title: "A Forever Begins",
        description: "One final moment from the beginning of their story."
    }
];



/* ==========================================
   VIEWER STATE
========================================== */

let currentIndex = 0;
let isAnimating = false;


/* ==========================================
   ELEMENTS
========================================== */

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
const mainImageContainer = document.querySelector(".viewer-main-image");

const thumbnailContainer =
    document.getElementById("viewer-thumbnails");


/* ==========================================
   CREATE SECOND IMAGE FOR THE SPREAD
========================================== */

const secondViewerImage = document.createElement("img");

secondViewerImage.className = "viewer-spread-image";
secondViewerImage.alt = "Second photograph in wedding spread";
secondViewerImage.style.display = "none";

mainImageContainer.appendChild(secondViewerImage);


/* ==========================================
   GET IMAGES FOR EACH SLIDE
========================================== */

function getSlideImages(index) {

    const slide = weddingImages[index];

    return Array.isArray(slide) ? slide : [slide];

}


/* ==========================================
   PRELOAD IMAGES
========================================== */

weddingImages.forEach((slide) => {

    const images = Array.isArray(slide) ? slide : [slide];

    images.forEach((src) => {

        const image = new Image();
        image.src = src;

    });

});


/* ==========================================
   IMAGE COUNTER
========================================== */

function updateCounter() {

    currentImage.textContent =
        String(currentIndex + 1).padStart(2, "0");

    totalImages.textContent =
        String(weddingImages.length).padStart(2, "0");

}


/* ==========================================
   UPDATE CAPTION
========================================== */


function updateCaption() {

    const caption = weddingCaptions[currentIndex] || {
        label: "THE WEDDING STORY",
        title: "A Moment Preserved",
        description: "Another beautiful memory from the celebration."
    };

    viewerTitle.textContent = caption.title;
    viewerCaptionLabel.textContent = caption.label;
    viewerDescription.textContent = caption.description;

}


/* ==========================================
   SIDE IMAGE PREVIEWS
========================================== */

function updatePreviews() {

    const previousIndex =
        (currentIndex - 1 + weddingImages.length) % weddingImages.length;

    const nextIndex =
        (currentIndex + 1) % weddingImages.length;

    previousPreview.src = getSlideImages(previousIndex)[0];
    nextPreview.src = getSlideImages(nextIndex)[0];

    previousPreview.alt = "Previous wedding photograph";
    nextPreview.alt = "Next wedding photograph";

}


/* ==========================================
   MOBILE THUMBNAIL GALLERY
========================================== */

function buildThumbnails() {

    thumbnailContainer.innerHTML = "";

    weddingImages.forEach((slide, index) => {

        const images = getSlideImages(index);

        const thumbnail = document.createElement("button");

        thumbnail.className = "viewer-thumbnail";
        thumbnail.type = "button";

        thumbnail.setAttribute(
            "aria-label",
            `View wedding photograph ${index + 1}`
        );

        const image = document.createElement("img");

        image.src = images[0];
        image.alt = `Wedding thumbnail ${index + 1}`;
        image.loading = "lazy";

        thumbnail.appendChild(image);

        thumbnail.addEventListener("click", () => {

            if (isAnimating || index === currentIndex) return;

            const direction = index > currentIndex ? 1 : -1;

            showImage(index, direction);

        });

        thumbnailContainer.appendChild(thumbnail);

    });

    updateThumbnailState();

}


/* ==========================================
   UPDATE ACTIVE THUMBNAIL
========================================== */

function updateThumbnailState() {

    const thumbnails =
        thumbnailContainer.querySelectorAll(".viewer-thumbnail");

    thumbnails.forEach((thumbnail, index) => {

        const isActive = index === currentIndex;

        thumbnail.classList.toggle("active", isActive);

        if (isActive) {

            thumbnail.setAttribute("aria-current", "true");

            thumbnail.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center"
            });

        } else {

            thumbnail.removeAttribute("aria-current");

        }

    });

}


/* ==========================================
   DISPLAY CURRENT SLIDE
   WITH ORIENTATION DETECTION
========================================== */

function displayCurrentSlide() {

    const images = getSlideImages(currentIndex);

    // FIRST IMAGE
    viewerImage.src = images[0];
    viewerImage.alt = `Wedding photograph ${currentIndex + 1}`;

    // DETECT LANDSCAPE OR PORTRAIT
    const image = new Image();

    image.onload = function () {

        const isLandscape =
            image.naturalWidth > image.naturalHeight;

        viewerStage.classList.toggle(
            "has-landscape",
            isLandscape && images.length === 1
        );

    };

    image.src = images[0];

    // CHECK IF THIS IS A TWO-IMAGE SPREAD
    if (images.length === 2) {

        mainImageContainer.classList.add("is-spread");

        secondViewerImage.src = images[1];
        secondViewerImage.style.display = "block";

        viewerStage.classList.remove("has-landscape");

    } else {

        mainImageContainer.classList.remove("is-spread");

        secondViewerImage.removeAttribute("src");
        secondViewerImage.style.display = "none";

    }

}


/* ==========================================
   CINEMATIC IMAGE TRANSITION
========================================== */

function showImage(index, direction = 1) {

    if (weddingImages.length === 0 || isAnimating) return;

    const nextIndex =
        (index + weddingImages.length) % weddingImages.length;

    if (nextIndex === currentIndex) return;

    const nextImages = getSlideImages(nextIndex);

    // LOAD ALL IMAGES BEFORE TRANSITION
    const loadedImages = nextImages.map((src) => {

        return new Promise((resolve, reject) => {

            const image = new Image();

            image.onload = () => resolve(image);

            image.onerror = () => reject(src);

            image.src = src;

        });

    });

    Promise.all(loadedImages)

        .then((images) => {

            isAnimating = true;

            viewerImage.style.transition =
                "opacity .65s ease, transform .9s cubic-bezier(.22,.61,.36,1)";

            secondViewerImage.style.transition =
                "opacity .65s ease, transform .9s cubic-bezier(.22,.61,.36,1)";

            viewerImage.style.opacity = "0";
            secondViewerImage.style.opacity = "0";

            viewerImage.style.transform =
                `translateX(${direction * -35}px) scale(.985)`;

            secondViewerImage.style.transform =
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

                displayCurrentSlide();

                // RESET IMAGE POSITIONS
                viewerImage.style.transform =
                    `translateX(${direction * 25}px) scale(.985)`;

                secondViewerImage.style.transform =
                    `translateX(${direction * 25}px) scale(.985)`;

                updatePreviews();
                updateCounter();
                updateCaption();
                updateThumbnailState();


                requestAnimationFrame(() => {

                    viewerImage.style.opacity = "1";

                    secondViewerImage.style.opacity =
                        nextImages.length === 2 ? "1" : "0";

                    viewerImage.style.transform =
                        "translateX(0) scale(1)";

                    secondViewerImage.style.transform =
                        "translateX(0) scale(1)";

                    previousPreview.style.opacity = "";
                    nextPreview.style.opacity = "";

                    previousPreview.style.transform = "";
                    nextPreview.style.transform = "";

                });


                setTimeout(() => {

                    isAnimating = false;

                }, 900);

            }, 400);

        })

        .catch((failedImage) => {

            console.error(
                "Could not load wedding image:",
                failedImage
            );

            isAnimating = false;

        });

}


/* ==========================================
   SIDE IMAGE NAVIGATION
========================================== */

previousButton.addEventListener("click", () => {

    showImage(currentIndex - 1, -1);

});

nextButton.addEventListener("click", () => {

    showImage(currentIndex + 1, 1);

});


/* ==========================================
   KEYBOARD NAVIGATION
========================================== */

document.addEventListener("keydown", (event) => {

    if (event.key === "ArrowRight") {
        showImage(currentIndex + 1, 1);
    }

    if (event.key === "ArrowLeft") {
        showImage(currentIndex - 1, -1);
    }

});


/* ==========================================
   MOBILE SWIPE NAVIGATION
========================================== */

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


/* ==========================================
   INITIALISE VIEWER
========================================== */

function initialiseViewer() {

    totalImages.textContent =
        String(weddingImages.length).padStart(2, "0");

    buildThumbnails();

    displayCurrentSlide();

    updateCounter();
    updatePreviews();
    updateCaption();

}

initialiseViewer();
