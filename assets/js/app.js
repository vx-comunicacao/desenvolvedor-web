const btnMobile = document.getElementById('btn-mobile')

const handleClicBtn = () => {

    var menu = document.getElementById("menu");
    const logo = document.getElementById("logo");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }

    if (logo.style.display === "none") {
        logo.style.display = "block";
    } else {
        logo.style.display = "none";
    }
}

btnMobile.addEventListener('click', handleClicBtn)