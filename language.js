document.addEventListener("DOMContentLoaded", () => {
    const langToggle = document.getElementById("language-toggle")

    let currentLang = localStorage.getItem("lang") || "pt"
    fetch("lang.json")
        .then(response => response.json())
        .then(data => {
            applyLanguage(data, currentLang)
            changeResume(currentLang)

            langToggle.addEventListener("click", () => {
                currentLang = currentLang === "pt" ? "en" : "pt"
                localStorage.setItem("lang", currentLang)

                fadeOut(() =>{
                    applyLanguage(data, currentLang)
                    changeResume(currentLang)
                    fadeIn()
                })

                window.scrollTo({top: 0, behavior: "smooth"})
            })
        })
        .catch(error => console.error("Erro ao carregar JSON:", error))

    function applyLanguage(texts, lang) {
        document.querySelectorAll("[data-lang]").forEach((element, index) => {
            const key = element.getAttribute("data-lang")

            if (Array.isArray(texts[lang][key])) {
                element.textContent = texts[lang][key][index]
            } else {
                element.textContent = texts[lang][key]
            }
        })

        langToggle.textContent = lang.toUpperCase()
    }

    function fadeOut(callback){
        document.body.style.transition = "opacity 0.5s"
        document.body.style.opacity = "0"

        setTimeout(() =>{
            callback()
        }, 500)
    }

    function fadeIn(){
        setTimeout(() =>{
            document.body.style.opacity = "1"
        }, 100)
    }

    function changeResume(currentLang){
        const resumeBtn = document.querySelector(".resume-btn")

        if(!resumeBtn) return

        const resumePaths = {
            pt: "/assets/documents/FelipeOjo_cv.docx.pdf",
            en: "/assets/documents/FelipeOjo_resume.docx.pdf"
        }

        resumeBtn.setAttribute("href", resumePaths[currentLang])

    }
})
