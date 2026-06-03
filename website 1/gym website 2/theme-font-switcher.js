/**
 * APEX ATELIER - THEME & FONT SWITCHER
 * Adds theme and font selector buttons to your website
 * No HTML changes needed - just add this script
 */

(function() {
    'use strict';
    
    // Wait for page to load
    window.addEventListener('load', function() {
        
        // Check if already added
        if (document.getElementById('apexThemeFontSwitcher')) {
            return;
        }
        
        // ========================================
        // CREATE STYLES FOR THE SWITCHER
        // ========================================
        
        const styles = document.createElement('style');
        styles.textContent = `
            /* Switcher Container */
            .switchers-container {
                position: fixed;
                bottom: 30px;
                right: 30px;
                display: flex;
                flex-direction: column;
                gap: 12px;
                z-index: 9999;
            }
            
            /* Theme & Font Switcher Buttons */
            .theme-switcher, .font-switcher {
                background: rgba(0, 0, 0, 0.85);
                backdrop-filter: blur(10px);
                border-radius: 50px;
                padding: 10px 20px;
                border: 1px solid var(--gold, #D4AF37);
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 8px;
                transition: all 0.3s ease;
                font-family: 'Inter', sans-serif;
            }
            .theme-switcher:hover, .font-switcher:hover {
                background: var(--gold, #D4AF37);
                transform: scale(1.05);
            }
            .theme-switcher:hover i, .theme-switcher:hover span,
            .font-switcher:hover i, .font-switcher:hover span { color: #000; }
            .theme-switcher i, .font-switcher i { font-size: 1.2rem; color: var(--gold, #D4AF37); }
            .theme-switcher span, .font-switcher span { font-size: 0.8rem; color: #fff; font-weight: 500; }
            
            /* Dropdowns */
            .theme-dropdown, .font-dropdown {
                position: fixed;
                bottom: 100px;
                right: 30px;
                background: rgba(0, 0, 0, 0.95);
                backdrop-filter: blur(16px);
                border-radius: 20px;
                padding: 10px 0;
                border: 1px solid var(--gold, #D4AF37);
                min-width: 220px;
                display: none;
                flex-direction: column;
                z-index: 9998;
            }
            .font-dropdown { bottom: 160px; }
            .theme-dropdown.show, .font-dropdown.show { display: flex; }
            
            .theme-option, .font-option {
                padding: 10px 20px;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 12px;
                transition: all 0.2s;
                font-size: 0.85rem;
                color: #fff;
                font-family: 'Inter', sans-serif;
            }
            .theme-option:hover, .font-option:hover {
                background: rgba(212, 175, 55, 0.2);
                color: var(--gold, #D4AF37);
            }
            
            /* Color Dots */
            .color-dot { width: 16px; height: 16px; border-radius: 50%; display: inline-block; }
            .dot-default { background: #D4AF37; }
            .dot-royal { background: #FFD700; }
            .dot-sapphire { background: #C0C0C0; }
            .dot-emerald { background: #E8C48A; }
            .dot-amethyst { background: #F5E6D3; }
            .dot-obsidian { background: #7DD4E8; }
            .dot-rosegold { background: #E8B4B8; }
            .dot-platinum { background: #E5E4E8; }
            .dot-sunset { background: #FF6B4A; }
            .dot-arctic { background: #A8D8EA; }
            
            /* Font Previews */
            .font-preview-inter { font-family: 'Inter', sans-serif; }
            .font-preview-playfair { font-family: 'Playfair Display', serif; }
            .font-preview-montserrat { font-family: 'Montserrat', sans-serif; }
            .font-preview-poppins { font-family: 'Poppins', sans-serif; }
            .font-preview-space { font-family: 'Space Grotesk', sans-serif; }
            .font-preview-cormorant { font-family: 'Cormorant Garamond', serif; }
            .font-preview-dm { font-family: 'DM Sans', sans-serif; }
            .font-preview-raleway { font-family: 'Raleway', sans-serif; }
            .font-preview-marcellus { font-family: 'Marcellus', serif; }
            .font-preview-lato { font-family: 'Lato', sans-serif; }
            .font-preview-oswald { font-family: 'Oswald', sans-serif; }
            .font-preview-merriweather { font-family: 'Merriweather', serif; }
            .font-preview-josefin { font-family: 'Josefin Sans', sans-serif; }
            .font-preview-cinzel { font-family: 'Cinzel', serif; }
            .font-preview-manrope { font-family: 'Manrope', sans-serif; }
            
            @media (max-width: 768px) {
                .switchers-container { bottom: 20px; right: 20px; }
                .theme-dropdown, .font-dropdown { right: 20px; min-width: 180px; }
                .font-dropdown { bottom: 145px; }
                .theme-switcher, .font-switcher { padding: 8px 16px; }
                .theme-switcher span, .font-switcher span { font-size: 0.7rem; }
            }
        `;
        document.head.appendChild(styles);
        
        // ========================================
        // CREATE BUTTONS AND DROPDOWNS
        // ========================================
        
        const container = document.createElement('div');
        container.className = 'switchers-container';
        container.id = 'apexThemeFontSwitcher';
        
        // Theme Button
        const themeBtn = document.createElement('div');
        themeBtn.className = 'theme-switcher';
        themeBtn.id = 'themeSwitcherBtn';
        themeBtn.innerHTML = '<i class="bi bi-palette-fill"></i><span>Themes</span>';
        
        // Font Button
        const fontBtn = document.createElement('div');
        fontBtn.className = 'font-switcher';
        fontBtn.id = 'fontSwitcherBtn';
        fontBtn.innerHTML = '<i class="bi bi-type"></i><span>Fonts</span>';
        
        // Theme Dropdown
        const themeDropdown = document.createElement('div');
        themeDropdown.className = 'theme-dropdown';
        themeDropdown.id = 'themeDropdown';
        themeDropdown.innerHTML = `
            <div class="theme-option" data-theme="default"><span class="color-dot dot-default"></span> Black & Gold</div>
            <div class="theme-option" data-theme="royal"><span class="color-dot dot-royal"></span> Midnight Royal</div>
            <div class="theme-option" data-theme="sapphire"><span class="color-dot dot-sapphire"></span> Midnight Sapphire</div>
            <div class="theme-option" data-theme="emerald"><span class="color-dot dot-emerald"></span> Midnight Emerald</div>
            <div class="theme-option" data-theme="amethyst"><span class="color-dot dot-amethyst"></span> Midnight Amethyst</div>
            <div class="theme-option" data-theme="obsidian"><span class="color-dot dot-obsidian"></span> Midnight Obsidian</div>
            <div class="theme-option" data-theme="rosegold"><span class="color-dot dot-rosegold"></span> Rose Gold Blush</div>
            <div class="theme-option" data-theme="platinum"><span class="color-dot dot-platinum"></span> Platinum Edge</div>
            <div class="theme-option" data-theme="sunset"><span class="color-dot dot-sunset"></span> Sunset Burnt</div>
            <div class="theme-option" data-theme="arctic"><span class="color-dot dot-arctic"></span> Arctic Ice</div>
        `;
        
        // Font Dropdown
        const fontDropdown = document.createElement('div');
        fontDropdown.className = 'font-dropdown';
        fontDropdown.id = 'fontDropdown';
        fontDropdown.innerHTML = `
            <div class="font-option" data-font="inter"><span class="font-preview-inter">Inter (Modern Sans)</span></div>
            <div class="font-option" data-font="playfair"><span class="font-preview-playfair">Playfair Display (Elegant Serif)</span></div>
            <div class="font-option" data-font="montserrat"><span class="font-preview-montserrat">Montserrat (Clean Sans)</span></div>
            <div class="font-option" data-font="poppins"><span class="font-preview-poppins">Poppins (Friendly Sans)</span></div>
            <div class="font-option" data-font="space"><span class="font-preview-space">Space Grotesk (Tech Modern)</span></div>
            <div class="font-option" data-font="cormorant"><span class="font-preview-cormorant">Cormorant (Classic Serif)</span></div>
            <div class="font-option" data-font="dm"><span class="font-preview-dm">DM Sans (Neutral Sans)</span></div>
            <div class="font-option" data-font="raleway"><span class="font-preview-raleway">Raleway (Elegant Sans)</span></div>
            <div class="font-option" data-font="marcellus"><span class="font-preview-marcellus">Marcellus (Luxury Serif)</span></div>
            <div class="font-option" data-font="lato"><span class="font-preview-lato">Lato (Friendly Sans)</span></div>
            <div class="font-option" data-font="oswald"><span class="font-preview-oswald">Oswald (Bold Impact)</span></div>
            <div class="font-option" data-font="merriweather"><span class="font-preview-merriweather">Merriweather (Traditional Serif)</span></div>
            <div class="font-option" data-font="josefin"><span class="font-preview-josefin">Josefin Sans (Stylish Sans)</span></div>
            <div class="font-option" data-font="cinzel"><span class="font-preview-cinzel">Cinzel (Luxury Serif)</span></div>
            <div class="font-option" data-font="manrope"><span class="font-preview-manrope">Manrope (Modern Sans)</span></div>
        `;
        
        container.appendChild(themeBtn);
        container.appendChild(fontBtn);
        document.body.appendChild(container);
        document.body.appendChild(themeDropdown);
        document.body.appendChild(fontDropdown);
        
        // ========================================
        // ADD BOOTSTRAP ICONS IF MISSING
        // ========================================
        
        if (!document.querySelector('link[href*="bootstrap-icons"]')) {
            const iconsLink = document.createElement('link');
            iconsLink.rel = 'stylesheet';
            iconsLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css';
            document.head.appendChild(iconsLink);
        }
        
        // ========================================
        // THEME SWITCHER FUNCTIONALITY
        // ========================================
        
        const themes = ['default', 'royal', 'sapphire', 'emerald', 'amethyst', 'obsidian', 'rosegold', 'platinum', 'sunset', 'arctic'];
        
        function applyTheme(theme) {
            themes.forEach(t => document.body.classList.remove(`theme-${t}`));
            if(theme !== 'default') document.body.classList.add(`theme-${theme}`);
            localStorage.setItem('apex-theme', theme);
        }
        
        themeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            themeDropdown.classList.toggle('show');
            fontDropdown.classList.remove('show');
        });
        
        document.querySelectorAll('.theme-option').forEach(opt => {
            opt.addEventListener('click', () => {
                const theme = opt.getAttribute('data-theme');
                applyTheme(theme);
                themeDropdown.classList.remove('show');
            });
        });
        
        // ========================================
        // FONT SWITCHER FUNCTIONALITY
        // ========================================
        
        const fonts = ['inter', 'playfair', 'montserrat', 'poppins', 'space', 'cormorant', 'dm', 'raleway', 'marcellus', 'lato', 'oswald', 'merriweather', 'josefin', 'cinzel', 'manrope'];
        
        function applyFont(font) {
            fonts.forEach(f => document.body.classList.remove(`font-${f}`));
            document.body.classList.add(`font-${font}`);
            localStorage.setItem('apex-font', font);
        }
        
        fontBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            fontDropdown.classList.toggle('show');
            themeDropdown.classList.remove('show');
        });
        
        document.querySelectorAll('.font-option').forEach(opt => {
            opt.addEventListener('click', () => {
                const font = opt.getAttribute('data-font');
                applyFont(font);
                fontDropdown.classList.remove('show');
            });
        });
        
        // ========================================
        // CLOSE DROPDOWNS WHEN CLICKING OUTSIDE
        // ========================================
        
        document.addEventListener('click', (e) => {
            if (!themeBtn.contains(e.target) && !themeDropdown.contains(e.target)) {
                themeDropdown.classList.remove('show');
            }
            if (!fontBtn.contains(e.target) && !fontDropdown.contains(e.target)) {
                fontDropdown.classList.remove('show');
            }
        });
        
        // ========================================
        // LOAD SAVED PREFERENCES
        // ========================================
        
        const savedTheme = localStorage.getItem('apex-theme');
        if(savedTheme && savedTheme !== 'default') {
            document.body.classList.add(`theme-${savedTheme}`);
        }
        
        const savedFont = localStorage.getItem('apex-font');
        if(savedFont && savedFont !== 'inter') {
            document.body.classList.add(`font-${savedFont}`);
        } else {
            document.body.classList.add('font-inter');
        }
        
        console.log('✓ Theme & Font Switcher loaded - No HTML changes needed');
    });
})();