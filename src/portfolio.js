// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba",
    hashColor: "##2bf0ab"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
    intro: "Hello 👋, my name is",
    name: "Sharath M",
    message: "I'm a SharePoint Solution Architect with 10 years of experiance.",
    basedLocation: "Bengaluru, IN",
    resumeLink: "https://drive.google.com/file/d/1wJAYaw2d3i0sPILqqqjFlHY30j95AC66/view?usp=sharing", // recommended: google drive file share link (change to "anyone on the internet can view")
    logo: {
        link: "images/initials.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/portrait.jpg'
}

const socialMediaLinks = {
    github: "https://github.com/sharathnaik",
    linkedin: "https://www.linkedin.com/in/sharath-m-62a2444b",
    medium: "",
    stackoverflow: "",
    medal:"",
    xtwitter: "https://twitter.com/sharu"
} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "My name is Sharath M and I'm a Senior Technical Specialist at Coforge, Bengaluru with 10 years of Experiance.As a SharePoint Expert explored SharePoint 2010, SharePoint 2013, SharePoint Online.",
        ""
    ], // Separated items are paragraphs
    techStack: [
        "SharePoint Online",
        "SPFx",
        "NodeJS",
        "Power Apps",
        "Power Automate",
        "SharePoint 2013",
        "HTML",
        "CSS",
        "JavaScript",
        "SharePoint 2010",
    ],
    photo1Link: "",//"images/portrait1.jpeg",
    photo2Link: "",//"images/portrait2.jpeg",
    photo3Link: "",//"images/portrait3.jpeg"
}

// --- 🛡️ Experience Section ---
const experiences = [
    {
        position: "Senior Technical Specialist",
        company: {
            name: "Coforge",
            link: "https://www.coforge.com/"
        },
        duration: "Nov 2022 - Present",
        bulletPoints: [
            "Member of SharePoint CoE, MUFG",
            "Developed and Maintained SPFx Applications with Power Automate",
            "Developed PowerShell Scripts to automate Report generation for MUFG Management."
        ],
        hashtags: [
            "SharePoint Online",
            "SPFx",
            "PowerApps",
            "Power Automate",
            "PowerShell"
        ]
    },
    {
        position: "Manager",
        company: {
            name: "Genpact",
            link: "https://www.genpact.com/"
        },
        duration: "Dec 2019 - Oct 2022",
        bulletPoints: [
            "Member of SharePoint CoE, Pfizer",
            "Implemented SPFx reusable solutions for Web-part using React and Extensions based on client requirements.",
            "Implemented Dashboards, Reports using SPFx React Implemented Custom Solutions using 3rd party JS libraries"
        ],
        hashtags: [
            "SharePoint Online",
            "SPFx",
            "PowerApps",
            "Power Automate",
            "Sharepoint Online Classic Sites",
            "HTML",
            "CSS",
            "Javascript"
        ]
    },
    {
        position: "Consultant B2",
        company: {
            name: "Capgemini",
            link: "https://www.capgemini.com/"
        },
        duration: "Apr 2018 - Dec 2019",
        bulletPoints: [
            "Member of SharePoint CoE, StoraEnso",
            "Implemented SPFx web part to meet reusability of the component and explored on Termstore, UserProfifile, Search Queries, Pagination and DOM Manipulation.",
            "Implemented the MS Graph API to get information from the OneDrive."
        ],
        hashtags: [
            "SharePoint Online",
            "SPFx",
            "PowerApps",
            "Power Automate",
            "Sharepoint Online Classic Sites",
            "HTML",
            "CSS",
            "Javascript"
        ]
    },
    {
        position: "Programmer Analyst",
        company: {
            name: "Cognizant Technologies Solutions",
            link: "https://www.cognizant.com/in/en"
        },
        duration: "Jan 2016 - Apr 2018",
        bulletPoints: [
            "I have been a SharePoint Developer and designer with maintainer for SharePoint 2013 Sites.",
            "I was involved in bug fixing and minor development, designer work.",
            "Script Injection in Sharepoint 2013 Sites to achieve requirements."
        ],
        hashtags: [
            "SharePoint 2013",
            "SharePoint Hosted Apps",
            "Script Injection",
            "HTML",
            "CSS",
            "Javascript"
        ]
    },
    {
        position: "Technical Associate",
        company: {
            name: "Unisys Corp.",
            link: "https://www.unisys.com/"
        },
        duration: "Nov 2013 - Jan 2016",
        bulletPoints: [
            "Unisys Portfolio Center is a Unisys Internal Project for showcasing the necessary Information to Global Marketing and Employees.",
            "Sharepoint Custom development using Visual Studio, Sharepoint UI development using Sharepoint Designer",
            "Project has provided opportunity to learn the insights of SharePoint in all aspects.",
        ],
        hashtags: [
            "SharePoint 2010",
            "Script Injection",
            "HTML",
            "CSS",
            "Javascript"
        ]
    }
]

// --- 🛡️ Achieve Section ---
const achievements = [
    {
        type: "Certification",
        title: "Microsoft Certified: Power Platform Fundamentals",
        examCode: "PL 900",
        issuedBy: "Microsoft",
        issueDate: "June 2021",
        credentialLink: "https://www.credly.com/badges/f6261a18-6231-4a1a-9e85-6ba58060c215?source=linked_in_profile",
        hashtags: [
            "Powerapps",
            "Power Automate"
        ]
    },
    {
        type: "Applied Skills",
        title: "Create and manage model-driven apps with Power Apps and Dataverse",
        examCode: "",
        issuedBy: "Microsoft",
        issueDate: "October 2024",
        credentialLink: "https://learn.microsoft.com/api/credentials/share/en-us/SharathM-2163/53B9E8252771D554?sharingId=F9C12AC0400A0B6F",
        hashtags: [
            "Model Driven Apps",
            "Canvas Apps",
            "Dataverse"
        ]
    },
    {
        type: "Applied Skills",
        title: "Create and manage canvas apps with Power Apps",
        examCode: "",
        issuedBy: "Microsoft",
        issueDate: "October 2024",
        credentialLink: "https://learn.microsoft.com/api/credentials/share/en-us/SharathM-2163/FCD56AB488C53E4?sharingId=F9C12AC0400A0B6F",
        hashtags: [
            "Canvas Apps",
            "PowerFx"
        ]
    },
    {
        type: "Applied Skills",
        title: "Create and manage automated processes by using Power Automate",
        examCode: "",
        issuedBy: "Microsoft",
        issueDate: "October 2024",
        credentialLink: "https://learn.microsoft.com/api/credentials/share/en-us/SharathM-2163/3173A141048E803E?sharingId=F9C12AC0400A0B6F",
        hashtags: [
            "Power Automate"
        ]
    },
    {
        type: "Certificate",
        title: "Lean Six Sigma Yellow Belt",
        examCode: "",
        issuedBy: "Genpact",
        issueDate: "June 2020",
        credentialLink: "",
        hashtags: [
            "Define",
            "Measure",
            "Analyze",
            "Control"
        ]
    },
    {
        type: "Certificate",
        title: "Lean Six Sigma Green Belt",
        examCode: "",
        issuedBy: "Genpact",
        issueDate: "August 2021",
        credentialLink: "",
        hashtags: [
            "Kaizen",
            "Improve Existing Process",
            "1 FTE"
        ]
    },
    {
        type: "Certification",
        title: "Programming in HTML5 with JavaScript and CSS3",
        examCode: "MS 70-480",
        issuedBy: "Microsoft",
        issueDate: "April 2013",
        credentialLink: "",
        hashtags: [
            "HTML5",
            "JavaScript",
            "CSS"
        ]
    },
    {
        type: "Certification",
        title: "Microsoft Certified Professional",
        examCode: "",
        issuedBy: "Microsoft",
        issueDate: "April 2013",
        credentialLink: "",
        hashtags: [
            "MS 70-480"
        ]
    }
]

// --- 💻 Work Section (Projects) ---
const works = [
    {
        projectName: "Regional Document Management System",
        yearCompleted: "11/2022 to 04/2024",
        role: "Solution Architect",
        client: "MGS, MUFG",
        clientLink: "https://www.bk.mufg.jp/global/",
        description: "MUFG Bank in Asia Pacific, one of Japan's leading financial companies. As part of MGS, i was involved in Solution Development on SharePoint front. i've extensively used SPFx to develop and maintain applications built to cater regional document management system. Delivered PoC's related to Product Catelogue using Power Platform. Generated Reports on Regional Document Management System beased on criteria defined by business using PowerShell.",
        techStack: "SPFx, Power Automate, PowerShell, PowerApps",
        alignLeft: false
    },
    {
        projectName: "Pfizer Digital Solutions, Pfizer",
        yearCompleted: "12/2019 to 11/2022",
        client: "Pfizer",
        clientLink: "https://www.pfizer.com/",
        role: "Tech Lead",
        description: "Pfizer is one of the world's leading pharmaceutical companies, founded more than 170 years ago. In Pfizer, I was involved in Whole life cycle of Requirement Gathering, Application Development, Demo and Project Closure. I've provided custom solutions using SPFx Webparts, SPFx Extensions, SharePoint Classic Development with Third-Party Libraries along with Power Platform.",
        techStack: "SPFx, Power Automate, PowerApps, Sharepoint Classic Development using AngularJS, Third Party JS Libraries",
        alignLeft: true
    },
    {
        projectName: "WeShare Custom Migration, StoraEnso",
        yearCompleted: "01/2019 to 12/2019",
        client: "StoraEnso",
        clientLink: "https://www.storaenso.com/",
        role: "Senior SharePoint Developer",
        description: "Part of the global bioeconomy, Stora Enso is a leading provider of renewable products in packaging, biomaterials, and wooden construction. I was involved in SharePoint 2013 Re-structure to SharePoint Online using SPFx and Power Platform.",
        techStack: "SharePoint Online, SPFx, SharePoint Hosted Apps developed using KnockoutJS, Script Injection",
        alignLeft: false
    },
    {
        projectName: "WeShare Intranet, StoraEnso",
        yearCompleted: "05/2018 to 12/2018",
        client: "StoraEnso",
        clientLink: "https://www.storaenso.com/",
        role: "Senior SharePoint Developer",
        description: "Part of the global bioeconomy, Stora Enso is a leading provider of renewable products in packaging, biomaterials, and wooden construction. I have been a part of SharePoint Classic Site development using Third Party libraries. SharePoint Hosted App Development.",
        techStack: "SharePoint Online, SPFx, SharePoint Hosted Apps, Script Injection",
        alignLeft: true
    },
    {
        projectName: "Merck",
        yearCompleted: "01/2016 to 04/2018",
        client: "Merck",
        clientLink: "https://www.merckgroup.com/en",
        role: "SharePoint Developer",
        description: "Merck KGaA, Darmstadt, Germany, a leading science and technology company, operates across Healthcare, Life Science and Electronics. I was part of SharePoint Team working on SharePoint 2013 Page and Master Page Customizations. got an opportunity to work on SharePoint Hosted App and modern OOTB Customizations.",
        techStack: "SharePoint 2013, Master Page Customization, Page Customization, SharePoint Hosted Apps, Script Injection",
        alignLeft: false
    },
    {
        projectName: "Unisys Global Portal",
        yearCompleted: "11/2013 to 01/2016",
        role: "SharePoint Developer",
        description: "Unisys is a global technology solutions company for digital workplace, cloud, application, infrastructure, enterprise computing and business process. As a New Joinee, I have learn't and developed SharePoint Customizations to meet client expectation.",
        techStack: "SharePoint 2010, Visual Webparts, Event Receivers, Workflow, SharePoint Designer,Master Page Customization, Page Customization, Script Injection",
        alignLeft: true
    }
]

const archiveLink = "https://github.com/sharathnaik?tab=repositories"

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "Currently seeking Solution Architect position in the SharePoint Domain.",
        ], // paragraph breaks will be entered after each item,
        link: {
            email: "nayak.sharath81@gmail.com", // email takes precedance
            other: ""
        },
        responseTimeMessage: ""//"...and I'll resopnd within the next 24hrs"
    },
    formEmbedLink: "" // inclusion of this link will take precedance
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    achievements,
    works,
    archiveLink,
    contact
}