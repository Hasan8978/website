/* ========================================
   VERTICAL SLIDING SIDEBAR - COMPLETE
   ======================================== */

(function() {
    'use strict';
    
    window.addEventListener('load', function() {
        
        if (document.getElementById('pageSlideSidebar')) {
            return;
        }
        
        const sidebarHTML = `
            <div id="pageSlideSidebar">
                <div class="sidebar-toggle" id="sidebarToggle">
                    <i class="bi bi-grid-3x3-gap-fill"></i>
                    <span>MENU</span>
                </div>
                
                <div class="sidebar-panel" id="sidebarPanel">
                    <div class="sidebar-header">
                        <div class="sidebar-logo">
                            <i class="bi bi-gem"></i>
                            <h3><span class="gold-text">APEX</span> <span class="white-text">Atelier</span></h3>
                        </div>
                        <button class="sidebar-close" id="sidebarClose">
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </div>
                    
                    <div class="sidebar-search">
                        <i class="bi bi-search"></i>
                        <input type="text" id="sidebarSearch" placeholder="Find a page...">
                    </div>
                    
                    <div class="sidebar-links" id="sidebarLinks">
                        <div class="sidebar-section-title">🏠 MAIN PAGES</div>
                        <a href="index.html" class="sidebar-link"><i class="bi bi-house-door-fill"></i> <span>Home</span></a>
                        <a href="about.html" class="sidebar-link"><i class="bi bi-info-circle-fill"></i> <span>About</span></a>
                        <a href="memberships.html" class="sidebar-link"><i class="bi bi-gem"></i> <span>Memberships</span></a>
                        <a href="classes.html" class="sidebar-link"><i class="bi bi-dumbbell-fill"></i> <span>Classes</span></a>
                        <a href="trainers.html" class="sidebar-link"><i class="bi bi-people-fill"></i> <span>Trainers</span></a>
                        <a href="gallery.html" class="sidebar-link"><i class="bi bi-images"></i> <span>Gallery</span></a>
                        <a href="pricing.html" class="sidebar-link"><i class="bi bi-tag-fill"></i> <span>Pricing</span></a>
                        <a href="schedule.html" class="sidebar-link"><i class="bi bi-calendar-week-fill"></i> <span>Schedule</span></a>
                        <a href="contact.html" class="sidebar-link"><i class="bi bi-envelope-fill"></i> <span>Contact</span></a>
                        
                        <div class="sidebar-divider"></div>
                        <div class="sidebar-section-title">📅 BOOKING & EVENTS</div>
                        <a href="booking-system.html" class="sidebar-link"><i class="bi bi-calendar-check-fill"></i> <span>Book a Class</span></a>
                        <a href="event-calendar.html" class="sidebar-link"><i class="bi bi-calendar-event-fill"></i> <span>Event Calendar</span></a>
                        
                        <div class="sidebar-divider"></div>
                        <div class="sidebar-section-title">⭐ REVIEWS & PROFILE</div>
                        <a href="reviews.html" class="sidebar-link"><i class="bi bi-star-fill"></i> <span>Reviews</span></a>
                        <a href="member-profile.html" class="sidebar-link"><i class="bi bi-person-badge-fill"></i> <span>My Profile</span></a>
                        <a href="payment.html" class="sidebar-link"><i class="bi bi-credit-card-fill"></i> <span>Payment</span></a>
                        
                        <div class="sidebar-divider"></div>
                        <div class="sidebar-section-title">📚 RESOURCES</div>
                        <a href="faq.html" class="sidebar-link"><i class="bi bi-question-circle-fill"></i> <span>FAQ</span></a>
                        <a href="blog.html" class="sidebar-link"><i class="bi bi-newspaper"></i> <span>Blog</span></a>
                        <a href="testimonials.html" class="sidebar-link"><i class="bi bi-star-fill"></i> <span>Testimonials</span></a>
                        <a href="nutrition.html" class="sidebar-link"><i class="bi bi-apple"></i> <span>Nutrition</span></a>
                        <a href="transformation.html" class="sidebar-link"><i class="bi bi-arrow-repeat"></i> <span>Transformations</span></a>
                        <a href="careers.html" class="sidebar-link"><i class="bi bi-briefcase-fill"></i> <span>Careers</span></a>
                        
                        <div class="sidebar-divider"></div>
                        <div class="sidebar-section-title">👤 ACCOUNT</div>
                        <a href="login.html" class="sidebar-link"><i class="bi bi-box-arrow-in-right"></i> <span>Login</span></a>
                        <a href="register.html" class="sidebar-link"><i class="bi bi-person-plus-fill"></i> <span>Register</span></a>
                        <a href="dashboard.html" class="sidebar-link"><i class="bi bi-speedometer2"></i> <span>Dashboard</span></a>
                        <a href="admin-panel.html" class="sidebar-link"><i class="bi bi-shield-lock-fill"></i> <span>Admin Panel</span></a>
                        
                        <div class="sidebar-divider"></div>
                        <div class="sidebar-section-title">⚖️ LEGAL</div>
                        <a href="privacy.html" class="sidebar-link"><i class="bi bi-shield-lock-fill"></i> <span>Privacy</span></a>
                        <a href="terms.html" class="sidebar-link"><i class="bi bi-file-text-fill"></i> <span>Terms</span></a>
                    </div>
                    
                    <div class="sidebar-footer">
                        <div class="sidebar-contact">
                            <i class="bi bi-envelope-fill"></i>
                            <small>concierge@apexatelier.com</small>
                        </div>
                        <div class="sidebar-copyright">
                            <small>© 2025 APEX Atelier</small>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', sidebarHTML);
        
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const allSidebarLinks = document.querySelectorAll('.sidebar-link');
        allSidebarLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage) {
                link.classList.add('active');
            }
        });
        
        const searchInput = document.getElementById('sidebarSearch');
        if (searchInput) {
            searchInput.addEventListener('keyup', function() {
                const searchTerm = this.value.toLowerCase();
                const links = document.querySelectorAll('.sidebar-link');
                links.forEach(link => {
                    const text = link.textContent.toLowerCase();
                    if (text.includes(searchTerm)) {
                        link.style.display = 'flex';
                    } else {
                        link.style.display = 'none';
                    }
                });
            });
        }
        
        const style = document.createElement('style');
        style.textContent = `
            #pageSlideSidebar {
                position: fixed;
                left: 0;
                top: 0;
                height: 100vh;
                z-index: 10000;
                font-family: 'Montserrat', sans-serif;
            }
            .sidebar-toggle {
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                background: linear-gradient(135deg, #E8B4B8, #C4848A);
                color: #1a0f2e;
                width: 45px;
                padding: 20px 0;
                border-radius: 0 20px 20px 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 10px;
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 5px 0 20px rgba(0,0,0,0.3);
                border: 1px solid rgba(255,255,255,0.2);
                border-left: none;
                z-index: 10;
            }
            .sidebar-toggle i { font-size: 22px; }
            .sidebar-toggle span {
                font-size: 10px;
                font-weight: 700;
                letter-spacing: 2px;
                writing-mode: vertical-rl;
                text-orientation: mixed;
            }
            .sidebar-toggle:hover {
                background: linear-gradient(135deg, #F3D5D6, #E8B4B8);
                transform: translateY(-50%) scale(1.02);
                width: 50px;
            }
            .sidebar-panel {
                position: fixed;
                left: -280px;
                top: 0;
                width: 280px;
                height: 100vh;
                background: rgba(15, 10, 26, 0.98);
                backdrop-filter: blur(20px);
                border-right: 1px solid rgba(232, 180, 184, 0.3);
                transition: left 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
                z-index: 9999;
                display: flex;
                flex-direction: column;
                box-shadow: 5px 0 30px rgba(0,0,0,0.5);
            }
            .sidebar-panel.open { left: 0; }
            .sidebar-header {
                padding: 25px 20px;
                border-bottom: 1px solid rgba(232, 180, 184, 0.2);
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .sidebar-logo { display: flex; align-items: center; gap: 10px; }
            .sidebar-logo i { font-size: 28px; color: #E8B4B8; }
            .sidebar-logo h3 { font-size: 1.1rem; font-weight: 700; margin: 0; font-family: 'Playfair Display', serif; }
            .white-text { color: #ffffff; }
            .gold-text { color: #E8B4B8; }
            .sidebar-close {
                background: none;
                border: none;
                color: #E8B4B8;
                font-size: 18px;
                cursor: pointer;
                transition: all 0.3s;
                width: 32px;
                height: 32px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .sidebar-close:hover {
                background: rgba(232, 180, 184, 0.2);
                transform: rotate(90deg);
            }
            .sidebar-search {
                padding: 15px 20px;
                position: relative;
                border-bottom: 1px solid rgba(232, 180, 184, 0.1);
            }
            .sidebar-search i {
                position: absolute;
                left: 30px;
                top: 50%;
                transform: translateY(-50%);
                color: #E8B4B8;
                font-size: 0.9rem;
                z-index: 1;
            }
            .sidebar-search input {
                width: 100%;
                background: rgba(0, 0, 0, 0.5);
                border: 1px solid rgba(232, 180, 184, 0.3);
                border-radius: 30px;
                padding: 10px 15px 10px 35px;
                color: #fff;
                font-size: 0.8rem;
            }
            .sidebar-search input:focus {
                outline: none;
                border-color: #E8B4B8;
            }
            .sidebar-section-title {
                font-size: 0.65rem;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 1.5px;
                color: #E8B4B8;
                padding: 12px 20px 6px 20px;
                margin-top: 5px;
            }
            .sidebar-links {
                flex: 1;
                overflow-y: auto;
                padding: 10px 0;
            }
            .sidebar-links::-webkit-scrollbar { width: 3px; }
            .sidebar-links::-webkit-scrollbar-track { background: rgba(232, 180, 184, 0.1); }
            .sidebar-links::-webkit-scrollbar-thumb { background: #E8B4B8; border-radius: 10px; }
            .sidebar-link {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 10px 20px;
                color: #d4c5f0;
                text-decoration: none;
                transition: all 0.25s ease;
                font-size: 0.85rem;
                font-weight: 500;
                border-left: 3px solid transparent;
            }
            .sidebar-link i { width: 22px; font-size: 1rem; color: #E8B4B8; }
            .sidebar-link span { flex: 1; }
            .sidebar-link:hover {
                background: rgba(232, 180, 184, 0.1);
                padding-left: 25px;
                color: #E8B4B8;
            }
            .sidebar-link.active {
                background: rgba(232, 180, 184, 0.15);
                border-left-color: #E8B4B8;
                color: #E8B4B8;
            }
            .sidebar-divider {
                height: 1px;
                background: rgba(232, 180, 184, 0.1);
                margin: 8px 20px;
            }
            .sidebar-footer {
                padding: 15px 20px;
                border-top: 1px solid rgba(232, 180, 184, 0.1);
            }
            .sidebar-contact {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 10px;
            }
            .sidebar-contact i { color: #E8B4B8; font-size: 0.8rem; }
            .sidebar-contact small { color: rgba(255, 255, 255, 0.5); font-size: 0.7rem; }
            .sidebar-copyright { text-align: center; }
            .sidebar-copyright small { color: rgba(255, 255, 255, 0.3); font-size: 0.65rem; }
            .sidebar-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.6);
                z-index: 9998;
                display: none;
            }
            .sidebar-overlay.active { display: block; }
            @media (max-width: 480px) {
                .sidebar-panel { width: 260px; }
                .sidebar-link { padding: 8px 15px; font-size: 0.8rem; }
                .sidebar-toggle { width: 38px; }
                .sidebar-toggle i { font-size: 18px; }
            }
        `;
        
        document.head.appendChild(style);
        
        const overlay = document.createElement('div');
        overlay.className = 'sidebar-overlay';
        overlay.id = 'sidebarOverlay';
        document.body.appendChild(overlay);
        
        const toggleBtn = document.getElementById('sidebarToggle');
        const sidebarPanel = document.getElementById('sidebarPanel');
        const closeBtn = document.getElementById('sidebarClose');
        const overlayDiv = document.getElementById('sidebarOverlay');
        
        function openSidebar() {
            sidebarPanel.classList.add('open');
            overlayDiv.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        function closeSidebar() {
            sidebarPanel.classList.remove('open');
            overlayDiv.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        if (toggleBtn) toggleBtn.addEventListener('click', openSidebar);
        if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
        if (overlayDiv) overlayDiv.addEventListener('click', closeSidebar);
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && sidebarPanel.classList.contains('open')) {
                closeSidebar();
            }
        });
        
        console.log('✓ Sidebar added successfully');
    });
})();