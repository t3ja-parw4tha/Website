// Portfolio Website JavaScript
// Author: Sai Manikanta Teja Parwatha

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initScrollAnimations();
    initTypingAnimations();
    initCounterAnimations();
    initContactForm();
    initSmoothScrolling();
    initParallaxEffects();
    initTerminalAnimation();
    initTimelineCar();
    initSplashCursor();
});

// Navigation functionality
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');

    // Mobile menu toggle
    hamburger?.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger?.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar.style.background = 'rgba(17, 17, 17, 0.95)';
            navbar.style.backdropFilter = 'blur(15px)';
        } else {
            navbar.style.background = 'rgba(30, 30, 30, 0.8)';
            navbar.style.backdropFilter = 'blur(10px)';
        }

        // Hide/show navbar on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
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
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                
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
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add animation classes and observe elements
    const animatedElements = document.querySelectorAll([
        '.about-content > *',
        '.skill-category',
        '.timeline-item',
        '.cert-card',
        '.education-item',
        '.achievement-item',
        '.contact-item',
        '.stat-item'
    ].join(', '));

    animatedElements.forEach((element, index) => {
        // Add staggered animation delay
        element.style.animationDelay = `${index * 0.1}s`;
        
        // Add appropriate animation class based on element type
        if (element.classList.contains('timeline-item')) {
            const isEven = Array.from(element.parentNode.children).indexOf(element) % 2 === 1;
            element.classList.add(isEven ? 'slide-in-right' : 'slide-in-left');
        } else {
            element.classList.add('fade-in');
        }
        
        observer.observe(element);
    });
}

// Typing animation for hero section
function initTypingAnimations() {
    const typingElements = document.querySelectorAll('.typing-text, .typing-command');
    
    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        element.style.borderRight = '2px solid var(--primary-color)';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50 + Math.random() * 50);
            } else {
                // Blinking cursor animation
                setInterval(() => {
                    element.style.borderRightColor = 
                        element.style.borderRightColor === 'transparent' ? 
                        'var(--primary-color)' : 'transparent';
                }, 750);
            }
        };
        
        // Start typing after a delay
        setTimeout(typeWriter, 1000);
    });
}

// Counter animation for stats
function initCounterAnimations() {
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
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };

    updateCounter();
}

// Terminal animation
function initTerminalAnimation() {
    const terminalOutput = document.querySelector('.terminal-output');
    if (!terminalOutput) return;

    const lines = terminalOutput.querySelectorAll('div');
    
    // Hide all lines initially
    lines.forEach(line => {
        line.style.opacity = '0';
        line.style.transform = 'translateX(-20px)';
    });

    // Animate lines with delay
    lines.forEach((line, index) => {
        setTimeout(() => {
            line.style.transition = 'all 0.5s ease';
            line.style.opacity = '1';
            line.style.transform = 'translateX(0)';
        }, 2000 + (index * 300));
    });
}

// Contact form functionality
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.innerHTML = '<span class="loading"></span> Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual form handling)
        try {
            await simulateFormSubmission(new FormData(form));
            
            // Success state
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.style.background = 'var(--primary-color)';
            
            // Reset form
            form.reset();
            
            // Show success message
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            
        } catch (error) {
            // Error state
            submitBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Error';
            submitBtn.style.background = 'var(--secondary-color)';
            
            showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
        }
        
        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
        }, 3000);
    });
}

// Simulate form submission (replace with actual backend integration)
function simulateFormSubmission(formData) {
    return new Promise((resolve, reject) => {
        // Simulate network delay
        setTimeout(() => {
            // Simulate random success/failure for demo
            if (Math.random() > 0.1) {
                resolve('Success');
            } else {
                reject('Error');
            }
        }, 2000);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">&times;</button>
    `;
    
    // Add notification styles
    const styles = {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? 'var(--primary-color)' : 'var(--secondary-color)',
        color: 'var(--bg-primary)',
        padding: 'var(--spacing-md)',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-lg)',
        zIndex: '10000',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-sm)',
        maxWidth: '400px',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease'
    };
    
    Object.assign(notification.style, styles);
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    });
    
    // Auto close after 5 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
}

// Parallax effects
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.hero::before');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        parallaxElements.forEach(element => {
            element.style.transform = `translateY(${rate}px)`;
        });
    });
}

// Skill tag interactions
document.addEventListener('DOMContentLoaded', function() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Terminal command cycling
function initTerminalCommandCycling() {
    const commands = [
        'nmap -sS -O target.com',
        'sqlmap -u "http://target.com/page?id=1" --dbs',
        'python3 exploit.py --target 192.168.1.100',
        'burpsuite --project-file pentest.burp',
        'metasploit -q -x "use exploit/multi/handler"'
    ];
    
    const commandElement = document.querySelector('.typing-command');
    if (!commandElement) return;
    
    let currentCommand = 0;
    
    setInterval(() => {
        currentCommand = (currentCommand + 1) % commands.length;
        
        // Clear current command
        commandElement.style.opacity = '0';
        
        setTimeout(() => {
            commandElement.textContent = commands[currentCommand];
            commandElement.style.opacity = '1';
        }, 500);
        
    }, 5000);
}

// Initialize terminal command cycling after initial animation
setTimeout(initTerminalCommandCycling, 8000);

// Performance optimization: Debounced scroll handler
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll-heavy functions
const debouncedScrollHandler = debounce(() => {
    updateActiveNavLink();
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger?.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Loading screen (optional)
function initLoadingScreen() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="terminal-loader">
                <div class="loader-text">root@security:~# </div>
                <div class="loading-dots">
                    <span>.</span><span>.</span><span>.</span>
                </div>
            </div>
            <div class="loader-progress">
                <div class="progress-bar"></div>
            </div>
        </div>
    `;
    
    const loaderStyles = `
        .page-loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--bg-primary);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            transition: opacity 0.5s ease;
        }
        
        .loader-content {
            text-align: center;
            font-family: var(--font-mono);
        }
        
        .terminal-loader {
            color: var(--primary-color);
            font-size: 1.2rem;
            margin-bottom: 2rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .loading-dots span {
            animation: blink 1.5s infinite;
        }
        
        .loading-dots span:nth-child(2) { animation-delay: 0.5s; }
        .loading-dots span:nth-child(3) { animation-delay: 1s; }
        
        .loader-progress {
            width: 300px;
            height: 4px;
            background: var(--bg-tertiary);
            border-radius: 2px;
            overflow: hidden;
        }
        
        .progress-bar {
            height: 100%;
            background: var(--primary-color);
            width: 0%;
            animation: progress 3s ease-in-out forwards;
        }
        
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
        
        @keyframes progress {
            to { width: 100%; }
        }
    `;
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = loaderStyles;
    document.head.appendChild(style);
    
    document.body.appendChild(loader);
    
    // Remove loader after page load
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                if (document.body.contains(loader)) {
                    document.body.removeChild(loader);
                }
                if (document.head.contains(style)) {
                    document.head.removeChild(style);
                }
            }, 500);
        }, 1000);
    });
}

// Initialize loading screen
// initLoadingScreen();

// Error handling
window.addEventListener('error', function(e) {
    console.error('Portfolio Error:', e.error);
    // You could add error reporting here
});

// Console easter egg for fellow developers
console.log(`
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║  🛡️  Welcome to Sai Manikanta Teja Parwatha's Portfolio  🛡️   ║
║                                                              ║
║  Penetration Tester & Security Analyst                      ║
║  Specializing in Offensive Security & Compliance            ║
║                                                              ║
║  📧 tejaparwatha@gmail.com                                   ║
║  🔗 linkedin.com/in/tejaparwatha                             ║
║                                                              ║
║  Thanks for checking out the console! 👨‍💻                    ║
║                                                              ║
║  🎨 Try: toggleSplashColorMode() to switch splash colors    ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
`);

// Make toggle function globally available for testing
window.toggleSplashColorMode = toggleSplashColorMode;

// Timeline Car Animation
function initTimelineCar() {
    const car = document.querySelector('.timeline-car');
    const timeline = document.querySelector('.timeline');
    const experienceSection = document.querySelector('#experience');
    
    if (!car || !timeline || !experienceSection) return;
    
    let lastScrollY = 0;
    let isMoving = false;
    let movingTimeout;
    
    // Car movement based on scroll
    function updateCarPosition() {
        const sectionRect = experienceSection.getBoundingClientRect();
        const timelineRect = timeline.getBoundingClientRect();
        
        // Check if experience section is in view
        if (sectionRect.bottom < 0 || sectionRect.top > window.innerHeight) {
            return;
        }
        
        // Calculate scroll progress within the timeline
        const sectionTop = sectionRect.top;
        const sectionHeight = sectionRect.height;
        const windowHeight = window.innerHeight;
        
        // Calculate the progress (0 to 1) based on how much of the section is visible
        let progress = 0;
        
        if (sectionTop <= 0) {
            // Section is scrolled past the top
            progress = Math.min(Math.abs(sectionTop) / (sectionHeight - windowHeight), 1);
        } else {
            // Section is coming into view
            progress = Math.max(0, (windowHeight - sectionTop) / windowHeight * 0.3);
        }
        
        // Clamp progress between 0 and 1
        progress = Math.max(0, Math.min(1, progress));
        
        // Calculate car position along timeline
        const timelineHeight = timelineRect.height - 100; // Leave some space at bottom
        const carPosition = progress * timelineHeight;
        
        // Update car position
        car.style.top = `${carPosition}px`;
        
        // Detect if scrolling (for movement animations)
        const currentScrollY = window.pageYOffset;
        const scrollDelta = Math.abs(currentScrollY - lastScrollY);
        
        if (scrollDelta > 2) {
            if (!isMoving) {
                car.classList.add('moving');
                isMoving = true;
            }
            
            // Clear previous timeout
            clearTimeout(movingTimeout);
            
            // Set timeout to stop moving animation
            movingTimeout = setTimeout(() => {
                car.classList.remove('moving');
                isMoving = false;
            }, 150);
        }
        
        lastScrollY = currentScrollY;
        
        // Add extra effects based on scroll speed
        if (scrollDelta > 10) {
            car.style.transform = `translateX(-50%) scale(1.1)`;
            setTimeout(() => {
                car.style.transform = `translateX(-50%) scale(1)`;
            }, 100);
        }
    }
    
    // Throttled scroll handler for performance
    let ticking = false;
    function handleScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateCarPosition();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    // Attach scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial position
    updateCarPosition();
    
    // Add click interaction for fun
    car.addEventListener('click', () => {
        car.style.animation = 'none';
        car.style.transform = 'translateX(-50%) scale(1.2) rotate(5deg)';
        
        setTimeout(() => {
            car.style.animation = '';
            car.style.transform = 'translateX(-50%) scale(1)';
        }, 300);
        
        // Add temporary sparkle effect
        createSparkleEffect(car);
    });
}

// Sparkle effect for car interaction
function createSparkleEffect(element) {
    const sparkles = [];
    const sparkleCount = 8;
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: var(--primary-color);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            animation: sparkleAnimation 0.8s ease-out forwards;
        `;
        
        // Position sparkles around the car
        const angle = (i / sparkleCount) * 2 * Math.PI;
        const distance = 30 + Math.random() * 20;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
        
        element.appendChild(sparkle);
        sparkles.push(sparkle);
        
        // Remove sparkle after animation
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 800);
    }
    
    // Add sparkle animation keyframes if not already present
    if (!document.querySelector('#sparkle-animation')) {
        const style = document.createElement('style');
        style.id = 'sparkle-animation';
        style.textContent = `
            @keyframes sparkleAnimation {
                0% {
                    opacity: 1;
                    transform: scale(0) rotate(0deg);
                }
                50% {
                    opacity: 1;
                    transform: scale(1) rotate(180deg);
                }
                100% {
                    opacity: 0;
                    transform: scale(0) rotate(360deg);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Enhanced timeline markers with car interaction
function enhanceTimelineMarkers() {
    const markers = document.querySelectorAll('.timeline-marker');
    const car = document.querySelector('.timeline-car');
    
    markers.forEach((marker, index) => {
        // Add hover effect that affects the car
        marker.addEventListener('mouseenter', () => {
            if (car) {
                car.style.filter = 'drop-shadow(0 4px 16px rgba(0, 255, 136, 0.8)) hue-rotate(30deg)';
            }
        });
        
        marker.addEventListener('mouseleave', () => {
            if (car) {
                car.style.filter = 'drop-shadow(0 2px 8px rgba(0, 255, 136, 0.4))';
            }
        });
    });
}

// Initialize enhanced timeline features
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(enhanceTimelineMarkers, 1000); // Wait for DOM to be fully ready
});

// Car sound effects (optional - can be enabled later)
function playCarSound(type) {
    // This would play car sounds if audio files are added
    // For now, we'll use visual feedback only
    const car = document.querySelector('.timeline-car');
    if (!car) return;
    
    switch(type) {
        case 'accelerate':
            car.style.filter = 'drop-shadow(0 4px 12px rgba(0, 255, 136, 0.8)) brightness(1.2)';
            setTimeout(() => {
                car.style.filter = 'drop-shadow(0 2px 8px rgba(0, 255, 136, 0.4))';
            }, 200);
            break;
        case 'brake':
            car.style.transform = 'translateX(-50%) scaleX(0.9)';
            setTimeout(() => {
                car.style.transform = 'translateX(-50%) scaleX(1)';
            }, 150);
            break;
    }
}

// Enhanced Splash Cursor Effect - Fluid Simulation
function initSplashCursor() {
    const canvas = document.getElementById('splash-cursor');
    if (!canvas) {
        console.warn('Splash cursor canvas not found');
        return;
    }
    
    console.log('Initializing enhanced splash cursor...');
    
    const ctx = canvas.getContext('2d');
    let animationId;
    let isAnimating = false;
    
    // Enhanced configuration for smooth fluid-like effect
    const config = {
        // Fluid simulation parameters
        SIM_RESOLUTION: 64,
        DYE_RESOLUTION: 512,
        DENSITY_DISSIPATION: 0.98,
        VELOCITY_DISSIPATION: 0.99,
        PRESSURE: 0.8,
        PRESSURE_ITERATIONS: 4,
        CURL: 30,
        SPLAT_RADIUS: 0.25,
        SPLAT_FORCE: 6000,
        SHADING: true,
        COLOR_UPDATE_SPEED: 0.5,
        
        // Color palette - green theme
        colors: [
            { r: 0, g: 255, b: 136 },    // Primary green
            { r: 0, g: 204, b: 106 },    // Dark green
            { r: 78, g: 205, b: 196 },   // Accent green
            { r: 0, g: 255, b: 159 },    // Light green
            { r: 0, g: 230, b: 118 }     // Material green
        ],
        
        // Performance settings
        maxParticles: 200,
        particleLifetime: 3000,
        trailLength: 30,
        smoothing: 0.8
    };
    
    // Fluid simulation variables
    let dye, velocity, divergence, curl, pressure;
    let particles = [];
    let mousePos = { x: 0, y: 0 };
    let prevMousePos = { x: 0, y: 0 };
    let isMouseDown = false;
    let colorIndex = 0;
    let lastColorUpdate = 0;
    
    // Resize canvas with high DPI support
    function resizeCanvas() {
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        
        ctx.scale(dpr, dpr);
        canvas.style.width = rect.width + 'px';
        canvas.style.height = rect.height + 'px';
        
        // Reinitialize fluid simulation
        initFluidSimulation();
    }
    
    // Initialize fluid simulation textures
    function initFluidSimulation() {
        const width = canvas.width;
        const height = canvas.height;
        
        // Create off-screen canvases for fluid simulation
        dye = createOffscreenCanvas(width, height);
        velocity = createOffscreenCanvas(width, height);
        divergence = createOffscreenCanvas(width, height);
        curl = createOffscreenCanvas(width, height);
        pressure = createOffscreenCanvas(width, height);
    }
    
    // Create off-screen canvas for fluid simulation
    function createOffscreenCanvas(width, height) {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        return {
            canvas: canvas,
            ctx: canvas.getContext('2d'),
            width: width,
            height: height
        };
    }
    
    // Particle class for smooth trails
    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.vx = (Math.random() - 0.5) * 2;
            this.vy = (Math.random() - 0.5) * 2;
            this.life = 1.0;
            this.decay = Math.random() * 0.015 + 0.008;
            this.size = Math.random() * 4 + 2;
            this.color = getCurrentColor();
            this.trail = [];
        }
        
        update() {
            // Add to trail
            this.trail.push({ x: this.x, y: this.y, life: this.life });
            if (this.trail.length > config.trailLength) {
                this.trail.shift();
            }
            
            // Update position
            this.x += this.vx;
            this.y += this.vy;
            
            // Apply fluid-like movement
            this.vx *= 0.99;
            this.vy *= 0.99;
            
            // Add some randomness
            this.vx += (Math.random() - 0.5) * 0.1;
            this.vy += (Math.random() - 0.5) * 0.1;
            
            // Update life
            this.life -= this.decay;
            
            // Boundary check
            if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                this.life = 0;
            }
        }
        
        draw() {
            if (this.life <= 0) return;
            
            ctx.save();
            
            // Draw trail
            for (let i = 0; i < this.trail.length; i++) {
                const point = this.trail[i];
                const alpha = (point.life * this.life) / this.trail.length;
                const size = (this.size * alpha) / 2;
                
                if (size > 0.1) {
                    const gradient = ctx.createRadialGradient(
                        point.x, point.y, 0,
                        point.x, point.y, size
                    );
                    
                    gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha * 1.2})`);
                    gradient.addColorStop(0.5, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha * 0.8})`);
                    gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);
                    
                    ctx.fillStyle = gradient;
                    ctx.beginPath();
                    ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            
            // Draw main particle
            const gradient = ctx.createRadialGradient(
                this.x, this.y, 0,
                this.x, this.y, this.size
            );
            
            gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.life * 1.2})`);
            gradient.addColorStop(0.5, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.life * 0.8})`);
            gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.restore();
        }
        
        isDead() {
            return this.life <= 0;
        }
    }
    
    // Get current color with smooth transitions
    function getCurrentColor() {
        const now = Date.now();
        if (now - lastColorUpdate > 1000 / config.COLOR_UPDATE_SPEED) {
            colorIndex = (colorIndex + 1) % config.colors.length;
            lastColorUpdate = now;
        }
        
        const currentColor = config.colors[colorIndex];
        const nextColor = config.colors[(colorIndex + 1) % config.colors.length];
        
        const progress = ((now - lastColorUpdate) / (1000 / config.COLOR_UPDATE_SPEED));
        
        return {
            r: Math.floor(currentColor.r + (nextColor.r - currentColor.r) * progress),
            g: Math.floor(currentColor.g + (nextColor.g - currentColor.g) * progress),
            b: Math.floor(currentColor.b + (nextColor.b - currentColor.b) * progress)
        };
    }
    
    // Add particles at mouse position
    function addParticles(x, y, count = 3) {
        for (let i = 0; i < count; i++) {
            if (particles.length >= config.maxParticles) {
                particles.shift();
            }
            
            const offsetX = (Math.random() - 0.5) * 10;
            const offsetY = (Math.random() - 0.5) * 10;
            particles.push(new Particle(x + offsetX, y + offsetY));
        }
    }
    
    // Smooth mouse movement interpolation
    function lerp(start, end, factor) {
        return start + (end - start) * factor;
    }
    
    // Main animation loop
    function animate() {
        if (!isAnimating) return;
        
        // Clear canvas completely to prevent trailing
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        for (let i = particles.length - 1; i >= 0; i--) {
            const particle = particles[i];
            particle.update();
            
            if (particle.isDead()) {
                particles.splice(i, 1);
            } else {
                particle.draw();
            }
        }
        
        // Add continuous particles for smooth effect
        if (isMouseDown || (Math.abs(mousePos.x - prevMousePos.x) > 1 || Math.abs(mousePos.y - prevMousePos.y) > 1)) {
            addParticles(mousePos.x, mousePos.y, 2);
        }
        
        // Update previous mouse position
        prevMousePos.x = lerp(prevMousePos.x, mousePos.x, config.smoothing);
        prevMousePos.y = lerp(prevMousePos.y, mousePos.y, config.smoothing);
        
        animationId = requestAnimationFrame(animate);
    }
    
    // Event handlers
    function handleMouseMove(e) {
        const rect = canvas.getBoundingClientRect();
        mousePos.x = e.clientX - rect.left;
        mousePos.y = e.clientY - rect.top;
        
        if (!isAnimating) {
            isAnimating = true;
            animate();
        }
    }
    
    function handleMouseDown(e) {
        isMouseDown = true;
        const rect = canvas.getBoundingClientRect();
        mousePos.x = e.clientX - rect.left;
        mousePos.y = e.clientY - rect.top;
        
        // Create burst effect on click
        for (let i = 0; i < 15; i++) {
            const angle = (Math.PI * 2 * i) / 15;
            const distance = Math.random() * 30 + 10;
            const x = mousePos.x + Math.cos(angle) * distance;
            const y = mousePos.y + Math.sin(angle) * distance;
            addParticles(x, y, 1);
        }
    }
    
    function handleMouseUp() {
        isMouseDown = false;
    }
    
    // Touch support
    function handleTouchMove(e) {
        e.preventDefault();
        const touch = e.touches[0];
        handleMouseMove({ clientX: touch.clientX, clientY: touch.clientY });
    }
    
    function handleTouchStart(e) {
        e.preventDefault();
        const touch = e.touches[0];
        handleMouseDown({ clientX: touch.clientX, clientY: touch.clientY });
    }
    
    function handleTouchEnd(e) {
        e.preventDefault();
        handleMouseUp();
    }
    
    // Initialize
    resizeCanvas();
    
    // Event listeners
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchend', handleTouchEnd, { passive: false });
    window.addEventListener('resize', resizeCanvas);
    
    console.log('Enhanced splash cursor initialized successfully');
    
    // Cleanup function
    return function cleanup() {
        isAnimating = false;
        cancelAnimationFrame(animationId);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchend', handleTouchEnd);
        window.removeEventListener('resize', resizeCanvas);
    };
}

// Function to toggle between single color and multicolor splash
function toggleSplashColorMode() {
    // This function can be called to switch between single blue and multicolor
    const canvas = document.getElementById('splash-cursor');
    if (canvas && canvas.splashConfig) {
        canvas.splashConfig.singleColor = !canvas.splashConfig.singleColor;
        console.log('Splash color mode:', canvas.splashConfig.singleColor ? 'Single Blue' : 'Multicolor');
    }
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initNavigation,
        initScrollAnimations,
        initTypingAnimations,
        initCounterAnimations,
        showNotification,
        initTimelineCar,
        initSplashCursor,
        toggleSplashColorMode
    };
}