/* =========================================
   DRAGONX ROLEPLAY
   MAIN JAVASCRIPT
   ========================================= */


/* =========================================
   HOME WELCOME ANIMATION
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const welcomeText =
        document.getElementById("welcomeText");

    if (welcomeText) {

        const text =
            "WELCOME TO DRAGONX ROLEPLAY";

        let index = 0;

        function typeText() {

            if (index < text.length) {

                welcomeText.textContent +=
                    text.charAt(index);

                index++;

                setTimeout(typeText, 80);

            }

        }

        typeText();

    }

});


/* =========================================
   NAVBAR SCROLL
   ========================================= */

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================
   FAQ
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const questions =
        document.querySelectorAll(".faq-question");

    questions.forEach(question => {

        question.addEventListener("click", () => {

            const item =
                question.closest(".faq-item");

            const answer =
                item.querySelector(".faq-answer");

            const icon =
                question.querySelector("span");


            document
                .querySelectorAll(".faq-item")
                .forEach(otherItem => {

                    if (otherItem !== item) {

                        otherItem.classList.remove("open");

                        const otherAnswer =
                            otherItem.querySelector(".faq-answer");

                        otherAnswer.style.maxHeight = null;

                        const otherIcon =
                            otherItem.querySelector(".faq-question span");

                        if (otherIcon) {
                            otherIcon.textContent = "+";
                        }

                    }

                });


            item.classList.toggle("open");


            if (item.classList.contains("open")) {

                answer.style.maxHeight =
                    answer.scrollHeight + "px";

                icon.textContent = "−";

            } else {

                answer.style.maxHeight = null;

                icon.textContent = "+";

            }

        });

    });

});


/* =========================================
   APPLICATIONS
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const openTicketButton =
        document.getElementById("openTicketButton");

    const roleSelection =
        document.getElementById("roleSelection");

    const applicationForm =
        document.getElementById("applicationForm");

    const selectedRole =
        document.getElementById("selectedRole");

    const openPrivateChat =
        document.getElementById("openPrivateChat");

    const privateChat =
        document.getElementById("privateChat");

    const closeChat =
        document.getElementById("closeChat");

    const chatInput =
        document.getElementById("chatInput");

    const sendMessage =
        document.getElementById("sendMessage");

    const chatMessages =
        document.getElementById("chatMessages");

    const photoUpload =
        document.getElementById("photoUpload");


    /* OPEN TICKET */

    if (openTicketButton) {

        openTicketButton.addEventListener(
            "click",
            () => {

                roleSelection.classList.remove("hidden");

                openTicketButton.style.display =
                    "none";

            }
        );

    }


    /* SELECT ROLE */

    const roleButtons =
        document.querySelectorAll(".role-button");

    roleButtons.forEach(button => {

        button.addEventListener("click", () => {

            const role =
                button.dataset.role;

            selectedRole.textContent =
                role;

            roleSelection.classList.add("hidden");

            applicationForm.classList.remove(
                "hidden"
            );

        });

    });


    /* OPEN PRIVATE CHAT */

    if (openPrivateChat) {

        openPrivateChat.addEventListener(
            "click",
            () => {

                const reason =
                    document
                        .getElementById("applicationReason")
                        .value
                        .trim();


                if (!reason) {

                    alert(
                        "Please explain why you want this role before opening the private chat."
                    );

                    return;

                }


                applicationForm.classList.add(
                    "hidden"
                );

                privateChat.classList.remove(
                    "hidden"
                );

            }
        );

    }


    /* CLOSE CHAT */

    if (closeChat) {

        closeChat.addEventListener(
            "click",
            () => {

                privateChat.classList.add(
                    "hidden"
                );

                applicationForm.classList.remove(
                    "hidden"
                );

            }
        );

    }


    /* SEND MESSAGE */

    if (sendMessage) {

        sendMessage.addEventListener(
            "click",
            () => {

                const message =
                    chatInput.value.trim();

                if (!message) return;


                const messageElement =
                    document.createElement("div");

                messageElement.className =
                    "chat-message user-message";


                messageElement.innerHTML = `
                    <strong>YOU</strong>
                    <p>${escapeHTML(message)}</p>
                `;


                chatMessages.appendChild(
                    messageElement
                );


                chatInput.value = "";


                chatMessages.scrollTop =
                    chatMessages.scrollHeight;

            }
        );

    }


    /* PHOTO UPLOAD */

    if (photoUpload) {

        photoUpload.addEventListener(
            "change",
            () => {

                const file =
                    photoUpload.files[0];

                if (!file) return;


                if (
                    !file.type.startsWith(
                        "image/"
                    )
                ) {

                    alert(
                        "Only photos are allowed."
                    );

                    photoUpload.value = "";

                    return;

                }


                const reader =
                    new FileReader();


                reader.onload = () => {

                    const messageElement =
                        document.createElement("div");

                    messageElement.className =
                        "chat-message user-message";


                    messageElement.innerHTML = `
                        <strong>YOU</strong>
                        <br>
                        <img
                            src="${reader.result}"
                            class="chat-photo"
                            alt="Uploaded photo"
                        >
                    `;


                    chatMessages.appendChild(
                        messageElement
                    );


                    chatMessages.scrollTop =
                        chatMessages.scrollHeight;

                };


                reader.readAsDataURL(file);

            }
        );

    }

});


/* =========================================
   ESCAPE HTML
   ========================================= */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


/* =========================================
   APPLICATIONS LOADING SCREEN
   ========================================= */

window.addEventListener("load", () => {

    const loadingScreen =
        document.getElementById("loading-screen");

    if (!loadingScreen) return;


    setTimeout(() => {

        loadingScreen.classList.add(
            "loaded"
        );

    }, 900);

});


/* =========================================
   MOBILE MENU
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const navbar =
        document.querySelector(".navbar");

    const navLinks =
        document.querySelector(".nav-links");

    if (!navbar || !navLinks) return;


    const mobileButton =
        document.createElement("button");

    mobileButton.className =
        "mobile-menu-button";

    mobileButton.innerHTML =
        "☰";


    navbar.appendChild(
        mobileButton
    );


    mobileButton.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle(
                "mobile-open"
            );

            mobileButton.classList.toggle(
                "active"
            );

        }
    );


    navLinks
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove(
                        "mobile-open"
                    );

                    mobileButton.classList.remove(
                        "active"
                    );

                }
            );

        });

});
