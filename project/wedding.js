
/* TBOY VISUALS — WEDDING PAGE INTERACTIONS */

document.addEventListener("DOMContentLoaded", () => {

    const revealElements = document.querySelectorAll(
        ".wedding-photo, .wedding-intro-content, .wedding-stories-heading, .wedding-viewer-cta, .wedding-closing-content"
    );

    // Respect visitors who prefer reduced motion
    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
        revealElements.forEach(element => {
            element.classList.add("wedding-visible");
        });
        return;
    }

    revealElements.forEach(element => {
        element.classList.add("wedding-reveal");
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("wedding-visible");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.12
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

});
