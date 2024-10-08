document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll('.navigation-link');
    const sections = document.querySelectorAll('div[id]');
    function removeActiveClass() {
        menuLinks.forEach(link => link.classList.remove('navigation-link-active'));
    }
    function addActiveClass(sectionId) {
        const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
        if (activeLink) {
            removeActiveClass();
            activeLink.classList.add('navigation-link-active');
        }
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                addActiveClass(sectionId);
            }
        });
    }, {
        threshold: 0.3
    });
    sections.forEach(section => {
        observer.observe(section);
    });
});

function show() {
    id = document.getElementById("email");    
    id.innerHTML = '<a href="mailto:mail@mciacchi.it" title="Send me an e-mail"><h3>mail@mciacchi.it</h3></a>';
}