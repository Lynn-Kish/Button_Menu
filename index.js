const btnMenu = Array.from(document.querySelectorAll('.btn-menu'));

btnMenu.forEach((btns) => {
    btns.addEventListener('click', () => {
        btnMenu.forEach((btns) => {
            btns.classList.remove('selected');
        });
        btns.classList.add('selected');
    });
});