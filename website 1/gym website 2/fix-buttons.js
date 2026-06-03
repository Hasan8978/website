// Fix all broken links
document.querySelectorAll('a[href="#"], a[href="javascript:void(0)"]').forEach(link => {
    const text = link.innerText.toLowerCase();
    if(text.includes('join') || text.includes('start') || text.includes('trial')) link.href = 'register.html';
    else if(text.includes('login') || text.includes('sign in')) link.href = 'login.html';
    else if(text.includes('membership') || text.includes('explore') || text.includes('plans')) link.href = 'memberships.html';
    else if(text.includes('schedule') || text.includes('book')) link.href = 'schedule.html';
    else if(text.includes('contact') || text.includes('concierge')) link.href = 'contact.html';
    else if(text.includes('about')) link.href = 'about.html';
    else if(text.includes('trainer')) link.href = 'trainers.html';
    else if(text.includes('gallery')) link.href = 'gallery.html';
    else if(text.includes('pricing')) link.href = 'pricing.html';
    else if(text.includes('faq')) link.href = 'faq.html';
    else if(text.includes('blog')) link.href = 'blog.html';
    else if(text.includes('testimonial')) link.href = 'testimonials.html';
    else if(text.includes('nutrition')) link.href = 'nutrition.html';
    else if(text.includes('career')) link.href = 'careers.html';
    else if(text.includes('privacy')) link.href = 'privacy.html';
    else if(text.includes('terms')) link.href = 'terms.html';
    else if(text.includes('dashboard')) link.href = 'dashboard.html';
    else if(text.includes('admin')) link.href = 'admin-panel.html';
    else link.href = 'index.html';
});