document.addEventListener('DOMContentLoaded', function() {
    const aboutButton = document.querySelector('#about-button');
    const modal = document.querySelector('#modal');
    const closeButton = document.querySelector('#close-button');
    aboutButton.addEventListener('click', function() {
        modal.classList.add('show');
    });
    closeButton.addEventListener('click', function() {
        modal.classList.remove('show');
    });
});