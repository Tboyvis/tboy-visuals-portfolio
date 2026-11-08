
/* TBOY VISUALS — LIFESTYLE ARCHIVE */

const lifestyleImages = document.querySelectorAll(
    '.lifestyle-item img'
);

// OPEN SHARED VIEWER

lifestyleImages.forEach((image, index) => {

    image.addEventListener('click', () => {

        window.location.href =
            `viewer.html?archive=lifestyle&image=${index}`;

    });

});
