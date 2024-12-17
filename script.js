<!-- JavaScript -->
    <script>
        // script.js

        document.addEventListener('DOMContentLoaded', () => {
            // Loading Screen
            const loadingScreen = document.getElementById('loading-screen');
            window.addEventListener('load', () => {
                loadingScreen.classList.add('loaded');
            });

            // Navbar Scroll Effect
            const navbar = document.getElementById('navbar');
            let lastScrollTop = 0;
            window.addEventListener('scroll', () => {
                const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
                if (currentScroll > lastScrollTop && currentScroll > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
            });

            // Navbar Navigation
            window.showSection = function(sectionId) {
                const sections = document.querySelectorAll('.section');
                sections.forEach(section => section.classList.remove('active'));
                document.getElementById(sectionId).classList.add('active');
            };

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
                    minorTicks: 5
                };

                const chart = new google.visualization.Gauge(document.getElementById('skillsChart'));
                chart.draw(data, options);

                // Responsiveness
                window.addEventListener('resize', () => {
                    chart.draw(data, options);
                });
            }
        });
    </script>
