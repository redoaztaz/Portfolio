document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentProject = 0;

    function showProject(index) {
        projectCards.forEach((card, i) => {
            card.style.display = i === index ? 'block' : 'none';
        });
    }

    prevBtn.addEventListener('click', () => {
        currentProject = (currentProject > 0) ? currentProject - 1 : projectCards.length - 1;
        showProject(currentProject);
    });

    nextBtn.addEventListener('click', () => {
        currentProject = (currentProject < projectCards.length - 1) ? currentProject + 1 : 0;
        showProject(currentProject);
    });

    // Initialize with the first project displayed
    showProject(currentProject);
});
