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

    // Apply GSAP animations
    applyAnimation(".intro-text", {
        scrollTrigger: {
            trigger: ".intro-text",
            start: "top 75%",
            toggleActions: "play none none none",
            onEnter: () => gsap.set(".intro-text", { visibility: "visible" })
        },
        opacity: 0,
        y: 50,
        duration: 1
    });

    applyAnimation(".content-text", {
        scrollTrigger: {
            trigger: ".content-text",
            start: "top 75%",
            toggleActions: "play none none none",
            onEnter: () => gsap.set(".content-text", { visibility: "visible" })
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3
    });

    applyAnimation(".content-list li", {
        scrollTrigger: {
            trigger: ".content-list",
            start: "top 75%",
            toggleActions: "play none none none",
            onEnter: () => gsap.set(".content-list li", { visibility: "visible" })
        },
        opacity: 0,
        x: 50,
        duration: 1,
        stagger: 0.2
    });

    applyAnimation("h2, h3, h4", {
        scrollTrigger: {
            trigger: "h2, h3, h4",
            start: "top 75%",
            toggleActions: "play none none none",
            onEnter: () => gsap.set("h2, h3, h4", { visibility: "visible" })
        },
        opacity: 0,
        y: -50,
        duration: 1
    });

    applyAnimation("img", {
        scrollTrigger: {
            trigger: "img",
            start: "top 75%",
            toggleActions: "play none none none",
            onEnter: () => gsap.set("img", { visibility: "visible" })
        },
        opacity: 0,
        scale: 0.8,
        duration: 1
    });

    applyAnimation("#about", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 75%",
            toggleActions: "play none none none",
            onEnter: () => gsap.set("#about", { visibility: "visible" })
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
            onEnter: () => gsap.set("footer", { visibility: "visible" })
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

    // Theme Toggle Button
    const themeToggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light-theme';

    document.body.classList.add(currentTheme);

    themeToggleButton.addEventListener('click', () => {
        if (document.body.classList.contains('light-theme')) {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            localStorage.setItem('theme', 'light-theme');
        }
    });

    // Initial GSAP animations
    gsap.from("header", { duration: 1, y: -100, opacity: 0 });
    gsap.from("main", { duration: 1, x: -100, opacity: 0, delay: 0.5 });
    gsap.from("footer", { duration: 1, y: 100, opacity: 0, delay: 1 });

    document.querySelectorAll("article").forEach((article, index) => {
        gsap.from(article, { duration: 1, y: 50, opacity: 0, delay: index * 0.2 });
    });
});
