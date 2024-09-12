document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active'); // Ensure other links do not have the active class
        }
    });
});

function nextPage() {
    const currentPage = document.querySelector('.nav-link.active');
    const allPages = document.querySelectorAll('.nav-link');
    let nextPageIndex = Array.from(allPages).indexOf(currentPage) + 1;

    if (nextPageIndex >= allPages.length) {
        nextPageIndex = 0;  // Loop back to first page
    }

    const nextPageLink = allPages[nextPageIndex];
    window.location.href = nextPageLink.href;
}

