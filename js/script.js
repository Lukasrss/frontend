// inicio Função de alterar o tema do site
const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement; //para pegar a raiz do projeto.
const accordionHeaders = document.querySelectorAll(".accordion-header");
const menuLinks = document.querySelectorAll(".menu-link");

function changeTheme(){
    const currentTheme = rootHtml.getAttribute("data-theme");
    //  teste === teste ? sim : não
    currentTheme === "dark" ? rootHtml.setAttribute("data-theme","light") : rootHtml.setAttribute("data-theme","dark");
    
    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);
// Fim da função
