document.addEventListener('DOMContentLoaded', function() {
    const showLangagesBtn = document.getElementById('showLangagesBtn');
    const showOutilsBtn = document.getElementById('showOutilsBtn');
    const langagesContainer = document.getElementById('langages-container');
    const outilsContainer = document.getElementById('outils-container');

    showLangagesBtn.addEventListener('click', function() {
        langagesContainer.style.display = 'flex';
        outilsContainer.style.display = 'none';
    });

    showOutilsBtn.addEventListener('click', function() {
        langagesContainer.style.display = 'none';
        outilsContainer.style.display = 'flex';
    });
});
