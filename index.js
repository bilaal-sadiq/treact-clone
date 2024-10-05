function openMenu() {
    document.body.classList += " menu--open"
}

function closeMenu() {
    document.body.classList.remove('menu--open')
}


const openFAQ1 = () => {
    document.getElementById('faq1').classList.toggle("faq__expand");
    document.getElementById('arrow1').classList.toggle("faq__arrow--up");
}

const openFAQ2 = () => {
    document.getElementById('faq2').classList.toggle("faq__expand");
    document.getElementById('arrow2').classList.toggle("faq__arrow--up");
}

const openFAQ3 = () => {
    document.getElementById('faq3').classList.toggle("faq__expand");
    document.getElementById('arrow3').classList.toggle("faq__arrow--up");
}