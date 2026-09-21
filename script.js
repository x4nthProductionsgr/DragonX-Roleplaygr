/* =========================================
   DRAGONX ROLEPLAY - MAIN SCRIPT
   ========================================= */


/* =========================================
   WELCOME TEXT ANIMATION
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const welcomeText = document.getElementById("welcomeText");

    if (welcomeText) {

        const text = "WELCOME TO DRAGONX ROLEPLAY";
        let index = 0;

        function typeText() {

            if (index < text.length) {

                welcomeText.textContent += text.charAt(index);
                index++;

                setTimeout(typeText, 80);

            }

        }

        typeText();

    }

});


/* =========================================
   NAVBAR SCROLL EFFECT
   ========================================= */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================================
   PAGE FADE-IN
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("page-loaded");

});


/* =========================================
   DISCORD BUTTON CLICK EFFECT
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const discordButtons =
        document.querySelectorAll(
            ".discord-button, .discord-nav"
        );

    discordButtons.forEach(button => {

        button.addEventListener("click", () => {

            button.classList.add("clicked");

            setTimeout(() => {
                button.classList.remove("clicked");
            }, 300);

        });

    });

});


/* =========================================
   SMOOTH PAGE LINKS
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const links =
        document.querySelectorAll(
            'a[href$=".html"]'
        );

    links.forEach(link => {

        link.addEventListener("click", event => {

            const destination =
                link.getAttribute("href");

            if (
                !destination ||
                destination.startsWith("#") ||
                link.target === "_blank"
            ) {
                return;
            }

            event.preventDefault();

            document.body.classList.add("page-exit");

            setTimeout(() => {
                window.location.href = destination;
            }, 180);

        });

    });

});


/* =========================================
   BUTTON RIPPLE EFFECT
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const buttons =
        document.querySelectorAll(
            ".discord-button, .application-main-button, .private-chat-button, .role-button"
        );

    buttons.forEach(button => {

        button.addEventListener("click", function(event) {

            const ripple =
                document.createElement("span");

            ripple.classList.add("button-ripple");

            const rect =
                this.getBoundingClientRect();

            ripple.style.left =
                `${event.clientX - rect.left}px`;

            ripple.style.top =
                `${event.clientY - rect.top}px`;

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);

        });

    });

});


/* =========================================
   MOBILE NAVBAR
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const navLinks =
        document.querySelector(".nav-links");

    const navbar =
        document.querySelector(".navbar");

    if (!navLinks || !navbar) return;


    const mobileButton =
        document.createElement("button");

    mobileButton.className =
        "mobile-menu-button";

    mobileButton.innerHTML = "☰";

    navbar.appendChild(mobileButton);


    mobileButton.addEventListener("click", () => {

        navLinks.classList.toggle("mobile-open");

        mobileButton.classList.toggle("active");

    });


    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("mobile-open");

            mobileButton.classList.remove("active");

        });

    });

});


/* =========================================
   IMAGE PROTECTION / DRAG PREVENTION
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const images =
        document.querySelectorAll("img");

    images.forEach(image => {

        image.addEventListener(
            "dragstart",
            event => event.preventDefault()
        );

    });

});


/* =========================================
   CONSOLE MESSAGE
   ========================================= */

console.log(
    "%cDRAGONX ROLEPLAY",
    "font-size: 25px; font-weight: bold;"
);

console.log(
    "%cWelcome to DragonX Roleplay.",
    "font-size: 14px;"
);
