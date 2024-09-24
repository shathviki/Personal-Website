document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');

    function checkScroll() {
        const triggerBottom = window.innerHeight / 1.1;

        projects.forEach(project => {
            const boxTop = project.getBoundingClientRect().top;

            if(boxTop < triggerBottom) {
                project.classList.add('in-view');
            } else {
                project.classList.remove('in-view');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check
});

function toggleDetails(element) {
    const details = element.querySelector('.experience-details');
    const isVisible = details.style.display === 'block';
    details.style.display = isVisible ? 'none' : 'block';
}

function toggleDetails(element) {
    const isOpen = element.classList.contains('open');
    
    // Close all open items
    document.querySelectorAll('.experience-item').forEach(item => {
        item.classList.remove('open');
    });
    
    // Open the clicked item if it was not already open
    if (!isOpen) {
        element.classList.add('open');
    }
}

