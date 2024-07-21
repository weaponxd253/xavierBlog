document.addEventListener('DOMContentLoaded', () => {
    console.log('Blog layout loaded successfully');

    gsap.registerPlugin(ScrollTrigger);

    // Function to apply GSAP animations if elements exist
    const applyAnimation = (selector, animation) => {
        const elements = document.querySelectorAll(selector);
        if (elements.length > 0) {
            gsap.from(selector, animation);
        }
    };

    // Animate intro texts
    applyAnimation(".intro-text", {
        scrollTrigger: {
            trigger: ".intro-text",
            start: "top 75%",
            toggleActions: "play none none none",
            onEnter: () => gsap.set(".intro-text", { visibility: "visible" }) // Make visible before animation starts
        },
        opacity: 0,
        y: 50,
        duration: 1
    });

    // Animate content texts
    applyAnimation(".content-text", {
        scrollTrigger: {
            trigger: ".content-text",
            start: "top 75%",
            toggleActions: "play none none none",
            onEnter: () => gsap.set(".content-text", { visibility: "visible" }) // Make visible before animation starts
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3
    });

    // Animate content lists
    applyAnimation(".content-list li", {
        scrollTrigger: {
            trigger: ".content-list",
            start: "top 75%",
            toggleActions: "play none none none",
            onEnter: () => gsap.set(".content-list li", { visibility: "visible" }) // Make visible before animation starts
        },
        opacity: 0,
        x: 50,
        duration: 1,
        stagger: 0.2
    });

    // Animate headings
    applyAnimation("h2, h3, h4", {
        scrollTrigger: {
            trigger: "h2, h3, h4",
            start: "top 75%",
            toggleActions: "play none none none",
            onEnter: () => gsap.set("h2, h3, h4", { visibility: "visible" }) // Make visible before animation starts
        },
        opacity: 0,
        y: -50,
        duration: 1
    });

    // Animate images
    applyAnimation("img", {
        scrollTrigger: {
            trigger: "img",
            start: "top 75%",
            toggleActions: "play none none none",
            onEnter: () => gsap.set("img", { visibility: "visible" }) // Make visible before animation starts
        },
        opacity: 0,
        scale: 0.8,
        duration: 1
    });

    // Animate specific sections
    applyAnimation("#about", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 75%",
            toggleActions: "play none none none",
            onEnter: () => gsap.set("#about", { visibility: "visible" }) // Make visible before animation starts
        },
        opacity: 0,
        x: -100,
        duration: 1
    });

    applyAnimation("footer", {
        scrollTrigger: {
            trigger: "footer",
            start: "top 75%",
            toggleActions: "play none none none",
            onEnter: () => gsap.set("footer", { visibility: "visible" }) // Make visible before animation starts
        },
        opacity: 0,
        y: 100,
        duration: 1
    });

    // Back to Top Button
    const backToTopButton = document.getElementById("backToTop");

    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    }

    backToTopButton.addEventListener('click', function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});
