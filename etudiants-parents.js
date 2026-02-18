document.addEventListener('DOMContentLoaded', function() {
    const choices = document.querySelectorAll('.ep-choice');
    const contents = document.querySelectorAll('.ep-content');
    const hero = document.querySelector('.ep-hero');
    const backButtons = document.querySelectorAll('.ep-back');

    choices.forEach(choice => {
        choice.addEventListener('click', function() {
            const target = this.dataset.target;
            
            hero.style.display = 'none';
            contents.forEach(c => { c.hidden = true; });
            
            const targetContent = document.getElementById(target);
            if (targetContent) {
                targetContent.hidden = false;
                targetContent.style.opacity = '0';
                targetContent.style.transform = 'translateY(20px)';
                targetContent.offsetHeight;
                targetContent.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                targetContent.style.opacity = '1';
                targetContent.style.transform = 'translateY(0)';
                targetContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    backButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            hero.style.display = 'block';
            hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
            contents.forEach(c => { c.hidden = true; });
        });
    });

    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => navMenu.classList.toggle('active'));
    }
});
