document.addEventListener('DOMContentLoaded', function () {
    const logo = document.querySelector('.footer .logo');
    const socialLinks = document.querySelectorAll('.social-list li');
    const copyright = document.querySelector('.footer p');


    setTimeout(() => {
        logo.classList.add('visible');
    }, 500);

    socialLinks.forEach((link, index) => {
        setTimeout(() => {
            link.classList.add('visible');
        }, 700 + index * 200);
    });

    setTimeout(() => {
        copyright.classList.add('visible');
    }, 1500);
});