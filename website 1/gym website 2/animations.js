/* ========================================
   MASTER ANIMATIONS
   ======================================== */

(function() {
    'use strict';
    
    document.addEventListener('DOMContentLoaded', function() {
        
        // Page fade in
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.6s ease';
        setTimeout(() => { document.body.style.opacity = '1'; }, 100);
        
        // Animation styles
        const animationStyles = document.createElement('style');
        animationStyles.textContent = `
            @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(40px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes fadeInLeft {
                from { opacity: 0; transform: translateX(-40px); }
                to { opacity: 1; transform: translateX(0); }
            }
            @keyframes fadeInRight {
                from { opacity: 0; transform: translateX(40px); }
                to { opacity: 1; transform: translateX(0); }
            }
            @keyframes fadeInScale {
                from { opacity: 0; transform: scale(0.9); }
                to { opacity: 1; transform: scale(1); }
            }
            @keyframes slideInUp {
                from { opacity: 0; transform: translateY(60px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes glowPulse {
                0%, 100% { text-shadow: 0 0 0px rgba(232,180,184,0); }
                50% { text-shadow: 0 0 20px rgba(232,180,184,0.5); }
            }
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-8px); }
            }
            @keyframes rippleAnim { to { transform: scale(4); opacity: 0; } }
            
            .animate-fade-up { animation: fadeInUp 0.6s ease forwards; }
            .glow-text { animation: glowPulse 2s ease-in-out infinite; }
            .floating-icon { animation: float 3s ease-in-out infinite; display: inline-block; }
            .card-hover { transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1); }
            .card-hover:hover { transform: translateY(-12px) scale(1.02); box-shadow: 0 25px 40px rgba(0,0,0,0.4); }
            .hover-scale { transition: transform 0.5s ease; }
            .hover-scale:hover { transform: scale(1.05); }
            .scroll-reveal { opacity: 0; transform: translateY(30px); transition: all 0.6s ease; }
            .scroll-reveal.revealed { opacity: 1; transform: translateY(0); }
            .ripple-btn { position: relative; overflow: hidden; }
            .ripple { position: absolute; border-radius: 50%; background: rgba(255,255,255,0.5); transform: scale(0); animation: rippleAnim 0.6s linear; }
        `;
        document.head.appendChild(animationStyles);
        
        // Scroll reveal
        const revealElements = document.querySelectorAll('section, .glass-card, .pricing-card, .trainer-card, .testimonial-card, .class-card, .blog-card');
        revealElements.forEach(el => el.classList.add('scroll-reveal'));
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        revealElements.forEach(el => revealObserver.observe(el));
        
        // Add hover effects to cards
        const allCards = document.querySelectorAll('.glass-card, .pricing-card, .trainer-card, .testimonial-card, .class-card');
        allCards.forEach(card => card.classList.add('card-hover'));
        
        // Add glow effect to gold text
        const goldTexts = document.querySelectorAll('.gold-text');
        goldTexts.forEach(text => text.classList.add('glow-text'));
        
        // Add floating effect to icons
        const icons = document.querySelectorAll('.bi-gem, .bi-trophy, .bi-dumbbell, .bi-bicycle, .bi-fire, .bi-star-fill');
        icons.forEach(icon => icon.classList.add('floating-icon'));
        
        // Add hover scale to images
        const images = document.querySelectorAll('img');
        images.forEach(img => img.classList.add('hover-scale'));
        
        // Button ripple effect
        const buttons = document.querySelectorAll('.btn-gold, .btn-outline-gold');
        buttons.forEach(btn => {
            btn.classList.add('ripple-btn');
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
        
        // Smooth scroll for anchor links
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
        
        // Navbar scroll effect
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
        
        // Count up effect for stat numbers
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
        
        console.log('✓ Animations loaded successfully');
    });
})();