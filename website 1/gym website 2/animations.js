/**
 * APEX ATELIER - COMPLETE ANIMATIONS
 * Glowing headings + Fade-in text as you scroll
 */

(function() {
    'use strict';
    
    document.addEventListener('DOMContentLoaded', function() {
        
        // ========================================
        // 1. PAGE FADE IN
        // ========================================
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.6s ease';
        setTimeout(() => { document.body.style.opacity = '1'; }, 100);
        
        // ========================================
        // 2. ADD ALL ANIMATION STYLES
        // ========================================
        
        const animationStyles = document.createElement('style');
        animationStyles.textContent = `
            /* ========== GLOWING HEADINGS ========== */
            @keyframes headingGlow {
                0% {
                    text-shadow: 0 0 5px #E8B4B8, 0 0 10px #E8B4B8, 0 0 15px #E8B4B8;
                    opacity: 0.8;
                }
                50% {
                    text-shadow: 0 0 15px #E8B4B8, 0 0 25px #E8B4B8, 0 0 35px #E8B4B8;
                    opacity: 1;
                }
                100% {
                    text-shadow: 0 0 5px #E8B4B8, 0 0 10px #E8B4B8, 0 0 15px #E8B4B8;
                    opacity: 0.8;
                }
            }
            
            @keyframes headingGlowGold {
                0% {
                    text-shadow: 0 0 5px #D4AF37, 0 0 10px #D4AF37, 0 0 15px #D4AF37;
                }
                50% {
                    text-shadow: 0 0 15px #D4AF37, 0 0 25px #D4AF37, 0 0 35px #D4AF37;
                }
                100% {
                    text-shadow: 0 0 5px #D4AF37, 0 0 10px #D4AF37, 0 0 15px #D4AF37;
                }
            }
            
            @keyframes headingGlowPulse {
                0%, 100% {
                    text-shadow: 0 0 5px #E8B4B8, 0 0 10px #E8B4B8;
                    transform: scale(1);
                }
                50% {
                    text-shadow: 0 0 20px #E8B4B8, 0 0 30px #E8B4B8, 0 0 40px #E8B4B8;
                    transform: scale(1.02);
                }
            }
            
            /* Glowing heading classes */
            .glow-heading {
                animation: headingGlow 2s ease-in-out infinite;
                display: inline-block;
            }
            
            .glow-heading-gold {
                animation: headingGlowGold 2s ease-in-out infinite;
                display: inline-block;
            }
            
            .glow-heading-pulse {
                animation: headingGlowPulse 2.5s ease-in-out infinite;
                display: inline-block;
            }
            
            /* All headings get glow effect */
            h1, h2, h3, .display-1, .display-2, .display-3, .display-4, .display-5 {
                animation: headingGlow 3s ease-in-out infinite;
            }
            
            .gold-text {
                animation: headingGlowGold 2.5s ease-in-out infinite;
            }
            
            /* ========== TEXT FADE IN ON SCROLL ========== */
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes fadeInDown {
                from {
                    opacity: 0;
                    transform: translateY(-30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes fadeInLeft {
                from {
                    opacity: 0;
                    transform: translateX(-30px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            
            @keyframes fadeInRight {
                from {
                    opacity: 0;
                    transform: translateX(30px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            
            @keyframes fadeInScale {
                from {
                    opacity: 0;
                    transform: scale(0.95);
                }
                to {
                    opacity: 1;
                    transform: scale(1);
                }
            }
            
            /* Fade classes for all text elements */
            .fade-text {
                opacity: 0;
                transition: all 0.6s ease;
            }
            
            .fade-text.revealed {
                opacity: 1;
            }
            
            .fade-up {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.6s ease;
            }
            
            .fade-up.revealed {
                opacity: 1;
                transform: translateY(0);
            }
            
            .fade-down {
                opacity: 0;
                transform: translateY(-30px);
                transition: all 0.6s ease;
            }
            
            .fade-down.revealed {
                opacity: 1;
                transform: translateY(0);
            }
            
            .fade-left {
                opacity: 0;
                transform: translateX(-30px);
                transition: all 0.6s ease;
            }
            
            .fade-left.revealed {
                opacity: 1;
                transform: translateX(0);
            }
            
            .fade-right {
                opacity: 0;
                transform: translateX(30px);
                transition: all 0.6s ease;
            }
            
            .fade-right.revealed {
                opacity: 1;
                transform: translateX(0);
            }
            
            .fade-scale {
                opacity: 0;
                transform: scale(0.95);
                transition: all 0.6s ease;
            }
            
            .fade-scale.revealed {
                opacity: 1;
                transform: scale(1);
            }
            
            /* Stagger delays */
            .delay-100 { transition-delay: 0.1s; }
            .delay-200 { transition-delay: 0.2s; }
            .delay-300 { transition-delay: 0.3s; }
            .delay-400 { transition-delay: 0.4s; }
            .delay-500 { transition-delay: 0.5s; }
            .delay-600 { transition-delay: 0.6s; }
            .delay-700 { transition-delay: 0.7s; }
            .delay-800 { transition-delay: 0.8s; }
            
            /* ========== ADDITIONAL ANIMATIONS ========== */
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }
            
            @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-8px); }
            }
            
            .pulse {
                animation: pulse 2s ease-in-out infinite;
            }
            
            .float {
                animation: float 3s ease-in-out infinite;
            }
            
            /* Card hover effects */
            .card-hover {
                transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
            }
            
            .card-hover:hover {
                transform: translateY(-8px);
                box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
            }
            
            /* Button hover effects */
            .btn-hover {
                transition: all 0.3s ease;
            }
            
            .btn-hover:hover {
                transform: translateY(-3px);
                box-shadow: 0 8px 20px rgba(232, 180, 184, 0.3);
            }
            
            /* Image hover */
            .img-hover {
                transition: transform 0.5s ease;
            }
            
            .img-hover:hover {
                transform: scale(1.05);
            }
            
            /* Loading spinner */
            .loading-spinner {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #0f0a1a;
                z-index: 99999;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: opacity 0.5s ease;
            }
            
            .spinner {
                width: 50px;
                height: 50px;
                border: 3px solid rgba(232, 180, 184, 0.3);
                border-top-color: #E8B4B8;
                border-radius: 50%;
                animation: spin 0.8s linear infinite;
            }
            
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            
            /* Ripple effect */
            .ripple-btn {
                position: relative;
                overflow: hidden;
            }
            
            .ripple {
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.5);
                transform: scale(0);
                animation: rippleAnim 0.6s linear;
                pointer-events: none;
            }
            
            @keyframes rippleAnim {
                to { transform: scale(4); opacity: 0; }
            }
        `;
        
        document.head.appendChild(animationStyles);
        
        // ========================================
        // 3. APPLY GLOW TO ALL HEADINGS
        // ========================================
        
        const headings = document.querySelectorAll('h1, h2, h3, .display-1, .display-2, .display-3, .display-4, .display-5, .hero-title');
        headings.forEach(heading => {
            heading.style.animation = 'headingGlow 3s ease-in-out infinite';
        });
        
        const goldTexts = document.querySelectorAll('.gold-text');
        goldTexts.forEach(text => {
            text.style.animation = 'headingGlowGold 2.5s ease-in-out infinite';
        });
        
        // ========================================
        // 4. APPLY FADE IN TO ALL TEXT ELEMENTS
        // ========================================
        
        // All text elements that should fade in
        const fadeElements = document.querySelectorAll(
            'p, .lead, .text-white-70, .hero-subtitle, .hero-description, ' +
            '.card-text, .testimonial-text, .about-text, .description, ' +
            '.class-description, .trainer-bio, .faq-answer, .blog-excerpt'
        );
        
        fadeElements.forEach(el => {
            el.classList.add('fade-up');
        });
        
        // Apply fade to paragraphs in specific sections
        document.querySelectorAll('section p, section .lead').forEach(el => {
            el.classList.add('fade-up');
        });
        
        // Apply different fade directions based on position
        document.querySelectorAll('.row .col-md-4:first-child p, .row .col-lg-4:first-child p').forEach(el => {
            el.classList.add('fade-left');
        });
        
        document.querySelectorAll('.row .col-md-4:last-child p, .row .col-lg-4:last-child p').forEach(el => {
            el.classList.add('fade-right');
        });
        
        // ========================================
        // 5. SCROLL REVEAL OBSERVER
        // ========================================
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
        
        // Observe all fade elements
        document.querySelectorAll('.fade-up, .fade-down, .fade-left, .fade-right, .fade-scale').forEach(el => {
            revealObserver.observe(el);
        });
        
        // ========================================
        // 6. STAGGERED FADE FOR CARDS
        // ========================================
        
        const cards = document.querySelectorAll('.glass-card, .pricing-card, .trainer-card, .testimonial-card, .class-card');
        cards.forEach((card, index) => {
            card.classList.add('fade-scale');
            if (index % 6 === 0) card.classList.add('delay-100');
            if (index % 6 === 1) card.classList.add('delay-200');
            if (index % 6 === 2) card.classList.add('delay-300');
            if (index % 6 === 3) card.classList.add('delay-400');
            if (index % 6 === 4) card.classList.add('delay-500');
            if (index % 6 === 5) card.classList.add('delay-600');
            revealObserver.observe(card);
        });
        
        // ========================================
        // 7. ADD HOVER EFFECTS
        // ========================================
        
        // Card hover effect
        cards.forEach(card => {
            card.classList.add('card-hover');
        });
        
        // Button hover effect
        const buttons = document.querySelectorAll('.btn-gold, .btn-outline-gold, .btn-login, .btn-register');
        buttons.forEach(btn => {
            btn.classList.add('btn-hover', 'ripple-btn');
            
            // Add ripple effect
            btn.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                ripple.className = 'ripple';
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                this.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
            });
        });
        
        // Image hover effect
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.classList.add('img-hover');
        });
        
        // ========================================
        // 8. ADD FLOATING EFFECT TO ICONS
        // ========================================
        
        const icons = document.querySelectorAll('.bi-gem, .bi-trophy, .bi-dumbbell, .bi-bicycle, .bi-fire, .bi-star-fill');
        icons.forEach(icon => {
            icon.classList.add('float');
        });
        
        // ========================================
        // 9. NAVBAR SCROLL EFFECT
        // ========================================
        
        const navbar = document.getElementById('luxNavbar');
        if (navbar) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.style.background = 'rgba(15, 10, 26, 0.98)';
                    navbar.style.backdropFilter = 'blur(16px)';
                } else {
                    navbar.style.background = 'rgba(15, 10, 26, 0.95)';
                    navbar.style.backdropFilter = 'blur(12px)';
                }
            });
        }
        
        // ========================================
        // 10. SMOOTH SCROLL FOR ANCHORS
        // ========================================
        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId !== '#' && targetId !== '#!') {
                    const target = document.querySelector(targetId);
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            });
        });
        
        // ========================================
        // 11. COUNT-UP FOR STAT NUMBERS
        // ========================================
        
        const statNumbers = document.querySelectorAll('.stat-number');
        const countUpObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const originalText = element.innerText;
                    const targetNumber = parseInt(originalText);
                    if (!isNaN(targetNumber)) {
                        let current = 0;
                        const increment = targetNumber / 50;
                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= targetNumber) {
                                element.innerText = originalText;
                                clearInterval(timer);
                            } else {
                                element.innerText = Math.floor(current);
                            }
                        }, 30);
                    }
                    countUpObserver.unobserve(element);
                }
            });
        }, { threshold: 0.5 });
        
        statNumbers.forEach(stat => countUpObserver.observe(stat));
        
        // ========================================
        // 12. LOADING SPINNER
        // ========================================
        
        const spinner = document.createElement('div');
        spinner.className = 'loading-spinner';
        spinner.innerHTML = '<div class="spinner"></div><p style="color:#E8B4B8; margin-top:20px; font-family:Montserrat">Loading Experience...</p>';
        document.body.appendChild(spinner);
        
        window.addEventListener('load', () => {
            setTimeout(() => {
                spinner.style.opacity = '0';
                setTimeout(() => spinner.remove(), 500);
            }, 500);
        });
        
        // ========================================
        // 13. ADD BACKGROUND PARTICLES TO HERO
        // ========================================
        
        const hero = document.querySelector('.hero-section');
        if (hero) {
            hero.style.position = 'relative';
            hero.style.overflow = 'hidden';
            
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.style.cssText = `
                    position: absolute;
                    width: ${Math.random() * 3 + 1}px;
                    height: ${Math.random() * 3 + 1}px;
                    background: #E8B4B8;
                    border-radius: 50%;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    opacity: ${Math.random() * 0.3 + 0.1};
                    animation: float ${Math.random() * 10 + 5}s ease-in-out infinite;
                    animation-delay: ${Math.random() * 5}s;
                    pointer-events: none;
                `;
                hero.appendChild(particle);
            }
        }
        
        // ========================================
        // 14. LOG COMPLETION
        // ========================================
        
        console.log('✓ Glowing headings and fade-in text animations loaded!');
        
    });
    
})();