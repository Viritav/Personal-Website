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

function showit() {
    id = document.getElementById("emailit");    
    id.innerHTML = '<a href="mailto:mail@mciacchi.it" title="Inviami un e-mail"><h3>mail@mciacchi.it</h3></a>';
}

function showen() {
    id = document.getElementById("emailen");    
    id.innerHTML = '<a href="mailto:mail@mciacchi.it" title="Send me an e-mail"><h3>mail@mciacchi.it</h3></a>';
}

let lang = navigator.language.slice(0, 2);

if (lang === 'it') {
	document.querySelectorAll('.en').forEach(elem => elem.style.display = 'none');
} else {
    document.querySelectorAll('.it').forEach(elem => elem.style.display = 'none');
}

var itaB = document.getElementById("ita");
itaB.addEventListener("click", function() {
	document.querySelectorAll('.it').forEach(elem => elem.style.display = 'block');
	document.querySelectorAll('.en').forEach(elem => elem.style.display = 'none');
});

var engB = document.getElementById("eng");
engB.addEventListener("click", function() {
	document.querySelectorAll('.en').forEach(elem => elem.style.display = 'block');
	document.querySelectorAll('.it').forEach(elem => elem.style.display = 'none');
});