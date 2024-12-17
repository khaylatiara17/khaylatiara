// Elemen yang digunakan
const body = document.body;
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const hamburger = document.querySelector('.hamburger');
const mainNav = document.querySelector('.main-nav');

// Toggle mode gelap
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Hamburger menu untuk mobile
hamburger.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

// Fungsi untuk generate warna pastel acak (HSL)
function generatePastelColor() {
    // Pastel: Hue acak, Saturation 70%, Lightness 85%
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 85%)`;
}

// Fungsi untuk mengupdate background gradient
function updateBackgroundGradient() {
    const color1 = generatePastelColor();
    const color2 = generatePastelColor();
    const color3 = generatePastelColor();
    body.style.background = `linear-gradient(to right, ${color1}, ${color2}, ${color3})`;
}

// Interval untuk mengubah gradient tiap 5 detik
setInterval(updateBackgroundGradient, 5000);

// Inisialisasi gradient pertama saat load
updateBackgroundGradient();
