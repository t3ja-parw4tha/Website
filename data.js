// Portfolio Data - Edit this file to update your website content and resume

const portfolioData = {
    profile: {
        name: "Sai Manikanta Teja Parwatha",
        role: "Cybersecurity Professional",
        heroTitle: "Securing the <span class=\"text-gradient\">Digital Frontier</span>",
        heroSubtitle: "Information Security Analyst & Penetration Tester with 3+ years of experience safeguarding government, healthcare, and enterprise infrastructures.",
        status: "Available for opportunities",
        location: "United States",
        email: "tejaparwatha@gmail.com", // Update with actual email
        phone: "+1 (555) 123-4567", // Update with actual
        linkedin: "linkedin.com/in/tejaparwatha", // Update with actual
        // github: "github.com/yourusername" // Update with actual
    },
    about: {
        summary: "Information Security Analyst with over 3 years of hands-on experience across cloud and on-prem environments. Skilled in SOC operations, incident response, vulnerability management, and secure architecture spanning Azure (Gov/Commercial), AWS, and GCP. Strong background in network monitoring, incident handling, and identity/access management. Experienced embedding security in SDLC, automating SIEM/SOAR detections, and aligning with NIST 800-53, SOC 2, FedRAMP, ISO 27001, and HIPAA.",
        stats: [
            { number: "4+", label: "Years Experience" },
            { number: "10+", label: "Assessments" },
            { number: "50+", label: "Vulnerabilities" },
            { number: "5+", label: "Frameworks" }
        ],
        expertise: [
            {
                icon: "fa-shield-halved",
                title: "Offensive Security",
                description: "Advanced penetration testing, red teaming, and vulnerability assessment for web, mobile, and cloud environments."
            },
            {
                icon: "fa-network-wired",
                title: "Network Defense",
                description: "Robust network hardening, firewall configuration, and intrusion detection system (IDS/IPS) management."
            },
            {
                icon: "fa-code",
                title: "Secure Coding",
                description: "Static/Dynamic Application Security Testing (SAST/DAST) and secure SDLC implementation."
            }
        ]
    },
    skills: [
        {
            category: "Frameworks & Compliance",
            icon: "fa-file-shield",
            items: ["NIST 800-53", "CIS Controls", "SOC 2", "HIPAA", "ISO 27001", "FedRAMP", "PCI-DSS", "COBIT", "SOX"]
        },
        {
            category: "Cloud & Identity Security",
            icon: "fa-cloud-lock",
            items: ["Azure (Gov & Commercial)", "AWS IAM", "GCP IAM", "Entra ID", "Key Vault", "Conditional Access", "DLP", "RBAC", "MFA"]
        },
        {
            category: "DevSecOps & Automation",
            icon: "fa-code-branch",
            items: ["Secure Coding", "SAST/DAST", "Azure DevOps", "CI/CD Security", "Threat Modeling", "ARM Templates", "Python", "PowerShell", "Bash"]
        },
        {
            category: "SIEM & Threat Detection",
            icon: "fa-radar",
            items: ["Microsoft Sentinel", "Splunk", "QRadar", "LogRhythm", "SOAR", "MITRE ATT&CK", "Threat Hunting", "Event Correlation"]
        },
        {
            category: "Vulnerability Management",
            icon: "fa-magnifying-glass-chart",
            items: ["Tenable", "Qualys", "Nessus", "OpenVAS", "OWASP ZAP", "Burp Suite Pro", "Acunetix", "Risk Remediation"]
        },
        {
            category: "Network & Infrastructure",
            icon: "fa-network-wired",
            items: ["IDS/IPS (Snort/Suricata)", "Firewalls", "VLAN Segmentation", "Wireshark", "App Gateway", "Load Balancer", "VPN", "Private DNS"]
        }
    ],
    experience: [
        {
            role: "Security Analyst (State of Michigan)",
            company: "RICEFW Technologies Inc.",
            location: "Lansing, MI",
            date: "May 2023 – Present",
            responsibilities: [
                "Lead Security Analyst for State of Michigan Azure Gov Cloud projects, automating compliance and monitoring.",
                "Implemented PowerShell/Python scripts for control validation and encryption checks, reducing manual audit work by 40%.",
                "Developed DevSecOps workflows integrating vulnerability scanning and policy enforcement in Azure DevOps pipelines.",
                "Built Microsoft Sentinel dashboards centralizing alerts from Tenable, Defender, and IDS for improved visibility.",
                "Standardized NSG rules, WAF baselines, and tagging policies across state infrastructure teams.",
                "Coordinated incident response, log review, and root cause analysis for security events.",
                "Documented SSPs, audit evidence, and incident reports for SOC 2 and NIST 800-53 audits."
            ]
        },
        {
            role: "Security Analyst",
            company: "Genzeon Technologies",
            location: "Remote / On-site",
            date: "Jun 2022 – Nov 2022",
            responsibilities: [
                "Performed HIPAA and PCI DSS assessments for healthcare/dental systems, ensuring ePHI safeguards.",
                "Automated compliance checks using Python to validate log integrity, encryption, and access controls.",
                "Supported DevSecOps by integrating security scanning into Jenkins pipelines and reviewing code for OWASP vulnerabilities.",
                "Configured SIEM tools (Splunk & QRadar) for log ingestion and alert tuning across clinical systems.",
                "Coordinated quarterly penetration tests and tracked remediation of high-severity findings.",
                "Designed user access certification processes to enforce least-privilege and maintain audit trails.",
                "Delivered security training on secure coding, data handling, and incident reporting."
            ]
        },
        {
            role: "Support Analyst",
            company: "Amazon Development Center",
            location: "Hyderabad, India",
            date: "Apr 2021 – Jun 2022",
            responsibilities: [
                "Provided operational support for global Amazon Selling Partners, advising on account authentication, secure access, and fraud prevention.",
                "Identified recurring patterns in suspicious logins and escalated systemic risks to security and compliance teams.",
                "Partnered with investigations teams to improve fraud controls and access management processes.",
                "Authored process documentation and knowledge base articles that reduced repeat issues and improved operational efficiency.",
                "Collaborated with engineering and risk teams to strengthen account recovery workflows, reducing unauthorized access cases.",
                "Performed case investigations with a pentest-minded approach, analyzing attack vectors such as credential stuffing and phishing.",
                "Educated sellers on secure password management and two-factor authentication, reducing account takeover incidents.",
                "Participated in internal CTF-style exercises and tabletop attack simulations to improve incident detection and response playbooks."
            ]
        }
    ],
    certifications: [
        {
            name: "CompTIA Security+",
            issuer: "CompTIA",
            year: "2023",
            icon: "fa-certificate",
            status: "Active"
        },
        {
            name: "Master's in Cybersecurity", // Placeholder - Update or Remove
            issuer: "Central Michigan University",
            year: "2023",
            icon: "fa-graduation-cap",
            status: "Degree"
        },
        {
            name: "Network Defense Essentials", // Placeholder
            issuer: "Training Course",
            year: "2023",
            icon: "fa-laptop-code",
            status: "Completed"
        },
        {
            name: "Certified Ethical Hacker", // Placeholder
            issuer: "EC-Council",
            year: "2024",
            icon: "fa-spinner",
            status: "In Progress"
        }
    ],
    contact: {
        title: "Initialize Connection",
        text: "Ready to secure your infrastructure? Reach out for collaboration or opportunities.",
        methods: [
            {
                icon: "fa-envelope",
                label: "Email",
                value: "tejaparwatha@gmail.com",
                action: "mailto:tejaparwatha@gmail.com"
            },
            {
                icon: "fa-linkedin",
                label: "LinkedIn",
                value: "linkedin.com/in/tejaparwatha",
                action: "https://linkedin.com/in/tejaparwatha"
            },
            {
                icon: "fa-phone",
                label: "Phone",
                value: "+1 (989) 824-6552", // Update with actual
                action: "tel:+19898246552"
            },
            {
                icon: "fa-location-dot",
                label: "Location",
                value: "United States",
                action: "#"
            }
        ]
    }
};
