const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement; //para pegar a raiz do projeto.
const accordionHeaders = document.querySelectorAll(".accordion-header");
const menuLinks = document.querySelectorAll(".menu-link");

// inicio Função de alterar o tema do site
function changeTheme(){
    const currentTheme = rootHtml.getAttribute("data-theme");
    //  teste === teste ? sim : não
    currentTheme === "dark" ? rootHtml.setAttribute("data-theme","light") : rootHtml.setAttribute("data-theme","dark");
    
    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);
// Fim da função

// Função acordion 
accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const accordionActive = accordionItem.classList.contains("active");

        accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active")
    })
})
// Fim função accordion

//Função menu links

menuLinks.forEach(item => {
    item.addEventListener("click", () => {
        menuLinks.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    })
})
