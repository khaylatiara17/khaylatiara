document.addEventListener('DOMContentLoaded', () => {
    // Loading Screen
    const loadingScreen = document.getElementById('loading-screen');
    window.addEventListener('load', () => {
        loadingScreen.classList.add('loaded');
    });

    // Debounce Function untuk Mengoptimalkan Event Scroll
    function debounce(func, wait = 100) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    // Navbar Scroll Effect dengan Debounce
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', debounce(() => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > lastScrollTop && currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }, 100)); // Delay 100ms

    // Navbar Navigation
    window.showSection = function(sectionId) {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => section.classList.remove('active'));
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            // Scroll ke atas setelah navigasi
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // Dark Mode Toggle dengan Persistensi
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    });

    // Scroll to Top dengan Debounced Event
    const scrollTopBtn = document.getElementById('scroll-top');

    window.addEventListener('scroll', debounce(() => {
        scrollTopBtn.classList.toggle('show', window.scrollY > 100);
    }, 100));

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Google Charts - Skill Level Chart
    google.charts.load('current', { packages: ['corechart', 'gauge'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        const data = google.visualization.arrayToDataTable([
            ['Label', 'Value'],
            ['Web Dev', 80],
            ['Mobile Dev', 60],
            ['Data Science', 70],
            ['Algorithm', 75]
        ]);

        const options = {
            width: '100%',
            height: 400,
            redFrom: 0,
            redTo: 40,
            yellowFrom: 40,
            yellowTo: 70,
            greenFrom: 70,
            greenTo: 100,
            minorTicks: 5,
            animation: {
                duration: 1000,
                easing: 'out',
            }
        };

        const chart = new google.visualization.Gauge(document.getElementById('skillsChart'));
        chart.draw(data, options);

        // Responsiveness dengan Debounce
        window.addEventListener('resize', debounce(() => {
            chart.draw(data, options);
        }, 200));
    }
});
