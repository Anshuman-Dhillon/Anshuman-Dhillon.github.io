// Load Particles.js
particlesJS.load('particles-js', 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.json', function () {
    console.log('Particles.js loaded.');
});

document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll for menu links
    document.querySelectorAll('.dropdown-menu a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

function toggleMenu() {
    const nav = document.querySelector('.mobile-nav');
    nav.classList.toggle('active');
}

// Fetch Server Status
fetch('https://api.uptimerobot.com/v2/getMonitors', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        api_key: 'your_api_key',
        format: 'json',
    }),
})
    .then((response) => response.json())
    .then((data) => {
        const status = data.monitors[0].status === 2 ? 'Online' : 'Offline';
        document.getElementById('status').textContent = status;
        document.getElementById('status').style.color = status === 'Online' ? '#4caf50' : '#e53935';
    })
    .catch((error) => {
        document.getElementById('status').textContent = 'Error fetching status';
        console.error('Error:', error);
    });

    