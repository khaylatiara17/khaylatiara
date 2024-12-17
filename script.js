// Mengubah antara tampilan section
function changeSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}

// Menambah atau menghapus mode gelap
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const themeButton = document.getElementById('theme-toggle');
    if (body.classList.contains('dark-mode')) {
        themeButton.textContent = '🌞'; // Ubah ke ikon matahari untuk mode terang
    } else {
        themeButton.textContent = '🌙'; // Ubah ke ikon bulan untuk mode gelap
    }
}

// Mengelola loading screen
window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    loadingScreen.classList.add('loaded');
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
});

// Menangani tombol Scroll to Top
const scrollTopButton = document.querySelector('.scroll-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopButton.classList.add('show');
    } else {
        scrollTopButton.classList.remove('show');
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
