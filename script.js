// Loading Screen
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Menambahkan event listener untuk scroll
let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Jika pengguna menggulir ke bawah, tambahkan kelas 'small' untuk mengecilkan header
    if (currentScroll > lastScrollTop) {
        navbar.classList.add("small");
    } else {
        navbar.classList.remove("small");
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Navbar Navigation
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

// JavaScript untuk Navbar Dinamis
window.onscroll = function() {toggleNavbar()};

function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled'); // Menambahkan efek saat digulir
    } else {
        navbar.classList.remove('scrolled'); // Menghilangkan efek saat di atas
    }
}

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Scroll to Top
const scrollTopBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('show', window.scrollY > 100);
});
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Google Charts - Skill Level Chart
google.charts.load('current', {
    packages: ['corechart', 'gauge']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Web Dev', 20],
        ['Mobile Dev', 10],
        ['Data Science', 30],
        ['Algorithm', 30]
    ]);

    var options = {
        width: 400, height: 400,
        redFrom: 0, redTo: 40,
        yellowFrom: 40, yellowTo: 70,
        greenFrom: 70, greenTo: 100,
        minorTicks: 5
    };

    var chart = new google.visualization.Gauge(document.getElementById('skillsChart'));
    chart.draw(data, options);
}
