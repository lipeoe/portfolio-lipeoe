let lastScrollY = window.scrollY

window.addEventListener("scroll", () => {
    const header = document.querySelector("header")
    const currentScrollY = window.scrollY

    if (currentScrollY === 0) {
        header.classList.remove("fixed")
        header.classList.remove("hidden")
    } else {
        if (currentScrollY > 0) {
            header.classList.add("fixed")

            if (currentScrollY > lastScrollY) {
                header.classList.add("hidden")
            } else {
                header.classList.remove("hidden")
            }
        }
    }

    lastScrollY = currentScrollY
})

document.addEventListener("DOMContentLoaded", () => {
    if (window.scrollY > 0) {
        document.querySelector("header").classList.add("fixed")
    }
})

document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.getElementById("hamburger-menu")
    const groupButtons = document.getElementById("group-buttons")

    hamburgerMenu.addEventListener("click", () => {
        groupButtons.classList.toggle("active")
    })

    groupButtons.querySelectorAll(".section-btn, .resume-btn, #language-toggle").forEach(item => {
        item.addEventListener("click", () => {
            groupButtons.classList.remove("active")
        })
    })
})
