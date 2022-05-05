document.body.addEventListener('click', function (e) {
    const burgerMenu = document.querySelector('.hamburger__menu');
    const burgerChecked = document.querySelector('.hamburger__toggle');
    const masc = document.querySelector('.mask');
    let target = e.target;

    if (target.className === 'hamburger__btn-lines' || e.target.className === 'hamburger__btn') {
        masc.classList.add('show');
    }

    if (target === masc) {
        masc.classList.remove('show');
        burgerMenu.classList.remove('show');
        burgerMenu.classList.add('hide');
        burgerChecked.checked = false;
    } else {
        burgerMenu.classList.remove('hide');
        burgerMenu.classList.add('show');
    }
});
