// Toggle between light and dark mode
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    themeToggle.textContent = document.body.classList.contains("dark-theme") ? "☀️" : "🌙";
});

// Show the appropriate section when clicked on the navigation menu
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Show scroll to top button
window.addEventListener('scroll', function () {
    const scrollTopButton = document.getElementById('scroll-top');
    if (window.scrollY > 300) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

// Scroll to the top of the page
document.getElementById('scroll-top').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Initialize the Google Chart for Skill Level
google.charts.load("current", {
    packages: ["corechart", "bar"]
});
google.charts.setOnLoadCallback(drawSkillChart);

function drawSkillChart() {
    var data = google.visualization.arrayToDataTable([
        ['Skill', 'Level'],
        ['Programming', 80],
        ['Web Development', 70],
        ['Data Science', 60],
        ['Mobile Development', 50],
        ['Databases', 60],
    ]);

    var options = {
        chart: {
            title: 'Skill Level',
        },
        hAxis: {
            title: 'Level (%)'
        },
        vAxis: {
            title: 'Skills'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('skillsChart'));
    chart.draw(data, options);
}

// Loading screen fade out after 2 seconds
window.onload = function () {
    setTimeout(function () {
        document.querySelector('.loading-screen').style.display = 'none';
    }, 2000);
};
