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
