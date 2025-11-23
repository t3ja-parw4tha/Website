// Portfolio Website JavaScript
// Author: Sai Manikanta Teja Parwatha

document.addEventListener('DOMContentLoaded', function () {
    // Render Content from Data
    renderContent();

    // Initialize all functionality
    initNavigation();
    initScrollAnimations();
    initTypingAnimations();
    initCounterAnimations();
    initSmoothScrolling();
    initSplashCursor();
    initTerminalAnimation();
});

// Render Content Function
function renderContent() {
    if (typeof portfolioData === 'undefined') {
        console.error('Portfolio data not found!');
        return;
    }

    // Profile - NAME IS NOW THE MAIN TITLE
    document.getElementById('hero-status').textContent = portfolioData.profile.status;
    document.getElementById('hero-title').textContent = portfolioData.profile.name;  // Changed: name is now the main title
    document.getElementById('hero-name').textContent = portfolioData.profile.heroSubtitle;  // Changed: subtitle goes here


    // About
    document.getElementById('about-summary').textContent = portfolioData.about.summary;

    const statsContainer = document.getElementById('about-stats');
    statsContainer.innerHTML = portfolioData.about.stats.map(stat => `
        <div class="stat-item">
            <div class="stat-number" data-target="${stat.number.replace('+', '')}">${stat.number}</div>
            <div class="stat-label">${stat.label}</div>
        </div>
    `).join('');

    const expertiseContainer = document.getElementById('about-expertise');
    expertiseContainer.innerHTML = portfolioData.about.expertise.map(item => `
        <div class="expertise-card">
            <div class="card-icon"><i class="fas ${item.icon}"></i></div>
            <div>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        </div>
    `).join('');

    // Skills
    const skillsContainer = document.getElementById('skills-container');
    skillsContainer.innerHTML = portfolioData.skills.map(group => `
        <div class="skill-group">
            <div class="skill-group-title">
                <i class="fas ${group.icon}"></i>
                <span>${group.category}</span>
            </div>
            <div class="skill-tags">
                ${group.items.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        </div>
    `).join('');

    // Experience
    const experienceContainer = document.getElementById('experience-container');
    experienceContainer.innerHTML = portfolioData.experience.map(job => `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content glass-panel">
                <div class="timeline-date">${job.date}</div>
                <h3 class="timeline-role">${job.role}</h3>
                <h4 class="timeline-company">${job.company} | ${job.location}</h4>
                <ul class="timeline-list">
                    ${job.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');

    // Certifications
    const certsContainer = document.getElementById('certifications-container');
    certsContainer.innerHTML = portfolioData.certifications.map(cert => `
        <div class="cert-card glass-panel">
            <div class="cert-icon"><i class="fas ${cert.icon}"></i></div>
            <h3>${cert.name}</h3>
            <div class="cert-issuer">${cert.issuer} • ${cert.year}</div>
            <div class="cert-status">${cert.status}</div>
        </div>
    `).join('');

    // Contact
    document.getElementById('contact-title').textContent = portfolioData.contact.title;
    document.getElementById('contact-text').textContent = portfolioData.contact.text;

    const contactContainer = document.getElementById('contact-container');
    contactContainer.innerHTML = portfolioData.contact.methods.map(method => `
        <a href="${method.action}" class="contact-method">
            <div class="method-icon"><i class="fas ${method.icon}"></i></div>
            <div class="method-details">
                <span>${method.label}</span>
                <strong>${method.value}</strong>
            </div>
        </a>
    `).join('');
}

// Navigation functionality
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');

    // Mobile menu toggle
    hamburger?.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');

        // Animate hamburger bars
        const bars = hamburger.querySelectorAll('.bar');
        if (hamburger.classList.contains('active')) {
            bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger?.classList.remove('active');
            navMenu.classList.remove('active');

            // Reset hamburger bars
            const bars = hamburger.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active nav link highlighting
    updateActiveNavLink();
    window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            current = sectionId;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Smooth scrolling functionality
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate
    // Wait for dynamic content to load before selecting
    setTimeout(() => {
        const animatedElements = document.querySelectorAll('.glass-panel, .section-title, .skill-tag, .contact-method');
        animatedElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

            // Stagger delay for grouped elements
            if (element.classList.contains('skill-tag')) {
                element.style.transitionDelay = `${(index % 10) * 0.05}s`;
            }

            observer.observe(element);
        });
    }, 100);
}

// Typing animation for hero section
function initTypingAnimations() {
    const commandElement = document.querySelector('.typing-command');
    if (!commandElement) return;

    const commands = ['whoami', 'cat skills.txt', './run_pentest.sh', 'ping 8.8.8.8'];
    let commandIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentCommand = commands[commandIndex];

        if (isDeleting) {
            commandElement.textContent = currentCommand.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            commandElement.textContent = currentCommand.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentCommand.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            commandIndex = (commandIndex + 1) % commands.length;
            typeSpeed = 500; // Pause before new command
        }

        setTimeout(type, typeSpeed);
    }

    // Start typing
    setTimeout(type, 1000);
}

// Counter animation for stats
function initCounterAnimations() {
    // Wait for dynamic content
    setTimeout(() => {
        const counters = document.querySelectorAll('.stat-number');
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }, 100);
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };

    updateCounter();
}

// Splash cursor effect
function initSplashCursor() {
    const canvas = document.getElementById('splash-cursor');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    window.addEventListener('mousemove', (e) => {
        particles.push({
            x: e.clientX,
            y: e.clientY,
            size: Math.random() * 5 + 1,
            speedX: Math.random() * 3 - 1.5,
            speedY: Math.random() * 3 - 1.5,
            life: 1
        });
    });

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.x += p.speedX;
            p.y += p.speedY;
            p.life -= 0.02;

            if (p.life <= 0) {
                particles.splice(i, 1);
                continue;
            }

            ctx.fillStyle = `rgba(59, 130, 246, ${p.life * 0.5})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        }

        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Terminal animation
function initTerminalAnimation() {
    const outputLines = document.querySelectorAll('.output-line');
    outputLines.forEach((line, index) => {
        line.style.animationDelay = `${index * 0.3}s`;
    });
}

// Console Easter Egg
console.log(
    '%cSMTP Portfolio',
    'background: #3b82f6; color: white; padding: 5px; border-radius: 3px 0 0 3px; font-weight: bold;',
    'background: #1e293b; color: white; padding: 5px; border-radius: 0 3px 3px 0;'
);
console.log('Looking for vulnerabilities? Keep looking! 😉');
