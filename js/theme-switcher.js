// Theme Switcher - Modular & Extensible

const themes = {
    'vedic-earth': 'Vedic Earth',
    'mystic-purple': 'Mystic Purple',
    'celestial-blue': 'Celestial Blue',
    'sacred-saffron': 'Sacred Saffron',
    'moonlight-serenity': 'Moonlight Serenity',
    'solar-fire': 'Solar Fire'
};

// Load saved theme or default
function loadTheme() {
    const savedTheme = localStorage.getItem('numerology-theme') || 'vedic-earth';
    applyTheme(savedTheme);
}

// Apply theme
function applyTheme(themeName) {
    if (themeName === 'vedic-earth') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', themeName);
    }
    localStorage.setItem('numerology-theme', themeName);
    updateThemeSelector(themeName);
}

// Update selector UI
function updateThemeSelector(currentTheme) {
    const selector = document.getElementById('theme-select');
    if (selector) {
        selector.value = currentTheme;
    }
}

// Initialize theme switcher
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    
    const selector = document.getElementById('theme-select');
    if (selector) {
        selector.addEventListener('change', (e) => {
            applyTheme(e.target.value);
        });
    }
});
