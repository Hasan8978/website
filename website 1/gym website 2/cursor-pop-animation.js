/**
 * APEX ATELIER - CURSOR POP ANIMATION
 * Elements pop up smoothly when cursor hovers over them
 */

(function() {
    'use strict';
    
    // ========================================
    // CONFIGURATION
    // ========================================
    
    const CONFIG = {
        // Animation duration in milliseconds
        animationDuration: 300,
        
        // How much to scale up (1.05 = 5% larger)
        scaleAmount: 1.05,
        
        // Elements to animate (add more classes as needed)
        elements: [
            '.glass-card',
            '.pricing-card',
            '.trainer-card',
            '.testimonial-card',
            '.class-card',
            '.blog-card',
            '.article-card',
            '.job-card',
            '.benefit-card',
            '.faq-item',
            '.contact-info-card',
            '.btn-gold',
            '.btn-outline-gold',
            '.nav-link',
            '.social-icons a',
            '.gallery-item',
            '.recipe-card',
            '.meal-card',
            '.supplement-card',
            '.featured-card',
            '.category-pill',
            '.filter-btn',
            '.theme-card',
            '.price-card',
            '.ba-card',
            '.story-card',
            '.value-pill',
            '.stat-card',
            '.goal-card',
            '.notification-item'
        ],
        
        // Exclude elements (don't animate these)
        exclude: [
            'body',
            'html',
            '.no-pop'
        ]
    };
    
    // ========================================
    // CREATE ANIMATION STYLES
    // ========================================
    
    const styles = `
        @keyframes popAnimation {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.08);
            }
            100% {
                transform: scale(1.05);
            }
        }
        
        @keyframes popGlow {
            0% {
                box-shadow: 0 0 0px rgba(232, 180, 184, 0);
            }
            50% {
                box-shadow: 0 0 25px rgba(232, 180, 184, 0.5);
            }
            100% {
                box-shadow: 0 0 15px rgba(232, 180, 184, 0.3);
            }
        }
        
        @keyframes popBounce {
            0% {
                transform: translateY(0px);
            }
            30% {
                transform: translateY(-8px);
            }
            70% {
                transform: translateY(2px);
            }
            100% {
                transform: translateY(0px);
            }
        }
        
        @keyframes popSpin {
            0% {
                transform: rotate(0deg) scale(1);
            }
            50% {
                transform: rotate(2deg) scale(1.05);
            }
            100% {
                transform: rotate(0deg) scale(1.05);
            }
        }
        
        @keyframes popPulse {
            0% {
                transform: scale(1);
                opacity: 1;
            }
            50% {
                transform: scale(1.1);
                opacity: 0.9;
            }
            100% {
                transform: scale(1.05);
                opacity: 1;
            }
        }
        
        @keyframes popShake {
            0%, 100% {
                transform: translateX(0) scale(1.05);
            }
            25% {
                transform: translateX(-3px) scale(1.05);
            }
            75% {
                transform: translateX(3px) scale(1.05);
            }
        }
        
        .pop-effect {
            animation-duration: 0.3s;
            animation-fill-mode: forwards;
            animation-timing-function: cubic-bezier(0.2, 0.9, 0.4, 1.1);
            display: inline-block;
            transition: all 0.3s ease;
        }
        
        .pop-scale {
            animation-name: popAnimation;
        }
        
        .pop-glow {
            animation-name: popGlow;
        }
        
        .pop-bounce {
            animation-name: popBounce;
        }
        
        .pop-spin {
            animation-name: popSpin;
        }
        
        .pop-pulse {
            animation-name: popPulse;
        }
        
        .pop-shake {
            animation-name: popShake;
        }
        
        /* Different effects for different element types */
        .pop-card {
            transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
        
        .pop-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 35px rgba(0, 0, 0, 0.3);
        }
        
        .pop-button:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 20px rgba(232, 180, 184, 0.4);
        }
        
        .pop-link:hover {
            color: #E8B4B8;
            transform: translateX(3px);
        }
        
        .pop-image:hover {
            transform: scale(1.05);
            filter: brightness(1.05);
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
    
    // ========================================
    // APPLY DIFFERENT POP EFFECTS
    // ========================================
    
    // Cards (lift and scale)
    function applyCardEffects() {
        const cards = document.querySelectorAll('.glass-card, .pricing-card, .trainer-card, .testimonial-card, .class-card, .blog-card, .article-card, .job-card, .benefit-card');
        
        cards.forEach(card => {
            card.classList.add('pop-card');
            card.style.transition = 'all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1)';
            card.style.cursor = 'pointer';
        });
    }
    
    // Buttons (scale with glow)
    function applyButtonEffects() {
        const buttons = document.querySelectorAll('.btn-gold, .btn-outline-gold, .btn-login, .btn-register');
        
        buttons.forEach(btn => {
            btn.classList.add('pop-button');
            btn.style.transition = 'all 0.2s ease';
        });
    }
    
    // Navigation links (slide and color change)
    function applyNavEffects() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.classList.add('pop-link');
            link.style.transition = 'all 0.2s ease';
        });
    }
    
    // Images (zoom and brighten)
    function applyImageEffects() {
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            img.classList.add('pop-image');
            img.style.transition = 'all 0.3s ease';
            img.style.cursor = 'pointer';
        });
    }
    
    // Gallery items (special effect)
    function applyGalleryEffects() {
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        galleryItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.03)';
                this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)';
            });
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = 'none';
            });
        });
    }
    
    // Social icons (bounce effect)
    function applySocialEffects() {
        const socialIcons = document.querySelectorAll('.social-icons a');
        
        socialIcons.forEach(icon => {
            icon.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.1)';
                this.style.display = 'inline-block';
            });
            icon.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
    
    // FAQ items (slide left)
    function applyFaqEffects() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(8px)';
                this.style.borderLeftColor = '#E8B4B8';
            });
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0)';
                this.style.borderLeftColor = 'rgba(232, 180, 184, 0.2)';
            });
        });
    }
    
    // Stat numbers (pulse effect)
    function applyStatEffects() {
        const stats = document.querySelectorAll('.stat-number');
        
        stats.forEach(stat => {
            stat.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
                this.style.textShadow = '0 0 15px rgba(232, 180, 184, 0.5)';
                this.style.display = 'inline-block';
            });
            stat.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.textShadow = 'none';
            });
        });
    }
    
    // Gold text (glow effect)
    function applyGoldTextEffects() {
        const goldTexts = document.querySelectorAll('.gold-text');
        
        goldTexts.forEach(text => {
            text.addEventListener('mouseenter', function() {
                this.style.textShadow = '0 0 10px rgba(232, 180, 184, 0.6)';
                this.style.letterSpacing = '0.5px';
            });
            text.addEventListener('mouseleave', function() {
                this.style.textShadow = 'none';
                this.style.letterSpacing = 'normal';
            });
        });
    }
    
    // ========================================
    // PARTICLE EFFECT ON CURSOR (Optional)
    // Creates floating particles when mouse moves
    // ========================================
    
    let particleEnabled = true;
    
    function createParticle(x, y) {
        if (!particleEnabled) return;
        
        const particle = document.createElement('div');
        particle.className = 'cursor-particle';
        
        const size = Math.random() * 6 + 2;
        const colors = ['#E8B4B8', '#F3D5D6', '#D4AF37', '#ffffff'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            pointer-events: none;
            z-index: 99999;
            opacity: 0.8;
            animation: particleFloat 1s ease-out forwards;
        `;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
    
    // Add particle animation CSS
    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        @keyframes particleFloat {
            0% {
                transform: translate(0, 0) scale(1);
                opacity: 0.8;
            }
            100% {
                transform: translate(${Math.random() * 40 - 20}px, -40px) scale(0);
                opacity: 0;
            }
        }
        
        .cursor-particle {
            position: fixed;
            pointer-events: none;
            z-index: 99999;
        }
    `;
    document.head.appendChild(particleStyle);
    
    // Track mouse movement for particles (reduced frequency for performance)
    let lastX = 0, lastY = 0;
    let particleTimeout;
    
    document.addEventListener('mousemove', function(e) {
        if (!particleEnabled) return;
        
        // Create particle every few pixels (throttled)
        const dx = Math.abs(e.clientX - lastX);
        const dy = Math.abs(e.clientY - lastY);
        
        if (dx > 15 || dy > 15) {
            createParticle(e.clientX, e.clientY);
            lastX = e.clientX;
            lastY = e.clientY;
        }
    });
    
    // ========================================
    // CURSOR TRAIL EFFECT (Optional)
    // ========================================
    
    let trailEnabled = true;
    let trailElements = [];
    
    function createTrailDot(x, y) {
        if (!trailEnabled) return;
        
        const dot = document.createElement('div');
        dot.className = 'cursor-trail';
        dot.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 6px;
            height: 6px;
            background: #E8B4B8;
            border-radius: 50%;
            pointer-events: none;
            z-index: 99998;
            opacity: 0.6;
            transition: opacity 0.3s;
        `;
        
        document.body.appendChild(dot);
        trailElements.push(dot);
        
        // Remove old trail dots (keep max 15)
        if (trailElements.length > 15) {
            const oldest = trailElements.shift();
            oldest.remove();
        }
        
        // Fade out and remove after 0.5 seconds
        setTimeout(() => {
            dot.style.opacity = '0';
            setTimeout(() => {
                if (dot.parentNode) dot.remove();
                const index = trailElements.indexOf(dot);
                if (index > -1) trailElements.splice(index, 1);
            }, 300);
        }, 500);
    }
    
    // Mouse move for trail (throttled)
    let lastTrailX = 0, lastTrailY = 0;
    document.addEventListener('mousemove', function(e) {
        const dx = Math.abs(e.clientX - lastTrailX);
        const dy = Math.abs(e.clientY - lastTrailY);
        
        if (dx > 8 || dy > 8) {
            createTrailDot(e.clientX, e.clientY);
            lastTrailX = e.clientX;
            lastTrailY = e.clientY;
        }
    });
    
    // ========================================
    // TOGGLE CONTROLS (Floating button)
    // ========================================
    
    function createToggleButton() {
        const toggleBtn = document.createElement('div');
        toggleBtn.id = 'popEffectToggle';
        toggleBtn.style.cssText = `
            position: fixed;
            bottom: 110px;
            left: 30px;
            z-index: 10002;
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(12px);
            border-radius: 50px;
            padding: 10px 18px;
            border: 1px solid #E8B4B8;
            cursor: pointer;
            font-family: 'Montserrat', sans-serif;
            font-size: 12px;
            font-weight: 600;
            color: white;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 0.3s ease;
        `;
        toggleBtn.innerHTML = `
            <i class="bi bi-magic" style="color: #E8B4B8;"></i>
            <span>POP EFFECTS: ON</span>
        `;
        
        let effectsEnabled = true;
        
        toggleBtn.addEventListener('click', function() {
            effectsEnabled = !effectsEnabled;
            
            if (effectsEnabled) {
                toggleBtn.innerHTML = `<i class="bi bi-magic" style="color: #E8B4B8;"></i><span>POP EFFECTS: ON</span>`;
                toggleBtn.style.borderColor = '#E8B4B8';
                enableAllEffects();
            } else {
                toggleBtn.innerHTML = `<i class="bi bi-magic" style="color: #888;"></i><span>POP EFFECTS: OFF</span>`;
                toggleBtn.style.borderColor = '#555';
                disableAllEffects();
            }
        });
        
        document.body.appendChild(toggleBtn);
    }
    
    function enableAllEffects() {
        particleEnabled = true;
        trailEnabled = true;
        
        // Re-apply all CSS classes
        document.querySelectorAll('.pop-card, .pop-button, .pop-link, .pop-image').forEach(el => {
            el.style.transform = '';
            el.style.boxShadow = '';
        });
        
        console.log('✓ Pop effects enabled');
    }
    
    function disableAllEffects() {
        particleEnabled = false;
        trailEnabled = false;
        
        // Clear all trails
        trailElements.forEach(dot => dot.remove());
        trailElements = [];
        
        console.log('✓ Pop effects disabled');
    }
    
    // ========================================
    // INITIALIZE ALL EFFECTS
    // ========================================
    
    function init() {
        // Apply all effects
        applyCardEffects();
        applyButtonEffects();
        applyNavEffects();
        applyImageEffects();
        applyGalleryEffects();
        applySocialEffects();
        applyFaqEffects();
        applyStatEffects();
        applyGoldTextEffects();
        
        // Create toggle button
        createToggleButton();
        
        console.log('✓ Cursor pop animation loaded');
    }
    
    // Run when page loads
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();