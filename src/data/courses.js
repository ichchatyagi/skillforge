import { Layout, Database, Cpu, Shield, Activity, BarChart, Code, CheckCircle, Smartphone } from 'lucide-react';

export const COURSES_DATA = [
    {
        id: "cyber-security",
        title: "Cyber Security",
        category: "Technology Courses",
        shortDescription: "Master ethical hacking, SOC analyst roles, and pentesting.",
        level: "Intermediate",
        duration: "3 Months",
        mode: "Online",
        language: "English",
        price: 12000,
        pricingType: "Paid",
        hasDiscount: false,
        image: "/courses/cybersecurity.png",
        overview: "Master the technical aspects of Cyber Security. This course covers everything from Ethical Hacking and Security Operations Center (SOC) analysis to advanced Pentesting techniques to protect systems and networks.",
        outcomes: [
            "Perform Ethical Hacking and Penetration Testing",
            "Operate as a SOC Analyst",
            "Conduct vulnerability assessments",
            "Understand advanced network security",
            "Defend against modern cyber threats"
        ],
        curriculum: [
            { title: "Module 1: Cybersecurity Fundamentals", content: "Introduction to technical security concepts." },
            { title: "Module 2: Ethical Hacking", content: "Reconnaissance, scanning, and exploitation." },
            { title: "Module 3: SOC Analyst", content: "Monitoring, log analysis, and incident response." },
            { title: "Module 4: Pentesting", content: "Advanced penetration testing methodologies." },
            { title: "Module 5: Practical Labs", content: "Real-world simulations and threat mitigation." }
        ],
        tools: ["Wireshark", "Nmap", "Metasploit", "Burp Suite", "Kali Linux"],
        careerBenefits: [
            "High demand technical role",
            "Careers as SOC Analyst, Pentester, or Security Engineer",
            "Vital for organizational security"
        ],
        projects: [
            { title: "Vulnerability Assessment", description: "Conduct a full assessment in a lab environment." },
            { title: "SOC Operations Simulation", description: "Respond to a simulated cyber attack." }
        ],
        prerequisites: ["Basic IT and Networking knowledge"],
        certification: "Cyber Security Specialist Certification"
    }
];
