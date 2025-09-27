# Sai Manikanta Teja Parwatha - Portfolio Website

A modern, responsive portfolio website showcasing cybersecurity expertise, built with HTML5, CSS3, and vanilla JavaScript.

## 🚀 Features

### Design & User Experience
- **Dark Cybersecurity Theme** - Professional dark theme with green accent colors
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations** - Scroll-triggered animations and transitions
- **Interactive Terminal** - Animated terminal window with cycling commands
- **Modern Typography** - Inter and JetBrains Mono fonts for professional appearance

### Functionality
- **Smooth Scrolling Navigation** - Seamless navigation between sections
- **Mobile Menu** - Hamburger menu for mobile devices
- **Contact Form** - Interactive contact form with validation
- **Counter Animations** - Animated statistics counters
- **Typing Effects** - Terminal-style typing animations
- **Parallax Effects** - Subtle parallax scrolling for visual depth

### Performance
- **Optimized Loading** - Efficient CSS and JavaScript loading
- **Intersection Observer** - Performance-optimized scroll animations
- **Debounced Events** - Optimized scroll event handling
- **Modern Web Standards** - Semantic HTML5 and accessible design

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md          # Project documentation
```

## 🛠️ Setup Instructions

### Local Development

1. **Clone or download** the portfolio files to your local machine

2. **Open the project** in your preferred code editor

3. **Launch a local server** (recommended):
   
   **Option A: Using Python**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -SimpleHTTPServer 8000
   ```
   
   **Option B: Using Node.js (http-server)**
   ```bash
   npm install -g http-server
   http-server
   ```
   
   **Option C: Using VS Code Live Server**
   - Install the "Live Server" extension
   - Right-click on `index.html` and select "Open with Live Server"

4. **View the website** at `http://localhost:8000` (or the port shown in your terminal)

### Direct File Opening

You can also open `index.html` directly in your browser, though some features may work better with a local server.

## 🎨 Customization

### Colors
The color scheme is defined in CSS custom properties at the top of `styles.css`:

```css
:root {
    --primary-color: #00ff88;      /* Main accent color */
    --secondary-color: #ff6b6b;    /* Error/warning color */
    --accent-color: #4ecdc4;       /* Secondary accent */
    --bg-primary: #0a0a0a;         /* Main background */
    /* ... more colors */
}
```

### Content
- **Personal Information**: Update contact details in the HTML
- **Skills**: Modify the skills sections to match your expertise
- **Experience**: Update the timeline with your work history
- **Certifications**: Add or modify certifications and achievements

### Fonts
The website uses:
- **Inter** - Primary font for body text
- **JetBrains Mono** - Monospace font for code/terminal elements

## 📱 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technical Details

### CSS Features
- CSS Grid and Flexbox for layouts
- Custom properties for theming
- Intersection Observer API for animations
- CSS transforms and transitions
- Media queries for responsive design

### JavaScript Features
- ES6+ modern JavaScript
- Intersection Observer for performance
- Event delegation and debouncing
- Smooth scrolling API
- Form validation and handling

### Performance Optimizations
- Debounced scroll events
- Lazy loading animations
- Efficient DOM queries
- Minimal external dependencies

## 📞 Contact Form

The contact form includes:
- Client-side validation
- Loading states and feedback
- Success/error notifications
- Responsive design

**Note**: The form currently uses a simulation function. To make it functional, you'll need to:
1. Set up a backend service (Node.js, PHP, etc.)
2. Update the form submission logic in `script.js`
3. Configure email sending functionality

## 🚀 Deployment

### GitHub Pages
1. Push files to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Select the main branch as source

### Netlify
1. Drag and drop the project folder to Netlify
2. Your site will be live instantly with a custom URL

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts to deploy

### Traditional Web Hosting
Upload all files to your web host's public folder (usually `public_html` or `www`).

## 🔒 Security Features

The portfolio demonstrates security awareness through:
- **Content Security Policy** headers (can be added)
- **HTTPS-ready** design and assets
- **No external dependencies** for core functionality
- **Secure form handling** structure

## 📈 SEO Optimization

- Semantic HTML5 structure
- Meta descriptions and titles
- Proper heading hierarchy
- Alt text for images (when added)
- Structured data potential

## 🎯 Future Enhancements

Potential additions:
- Blog section for security articles
- Project showcase with detailed case studies
- Certifications verification links
- Dark/light theme toggle
- Multi-language support
- Analytics integration

## 📄 License

This portfolio template is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## 👨‍💻 Developer

**Sai Manikanta Teja Parwatha**
- Email: tejaparwatha@gmail.com
- LinkedIn: [linkedin.com/in/tejaparwatha](https://linkedin.com/in/tejaparwatha)
- Location: Lansing, MI

---

*Built with 💚 for the cybersecurity community*