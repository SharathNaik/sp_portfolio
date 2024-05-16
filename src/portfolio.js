// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
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
    message: "I'm a SharePoint Developer with 10 years of experiance.",
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
    xtwitter: "https://twitter.com/sharu"
} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "My name is Sharath M and I'm a Senior Technical Specialist at Coforge, Bengaluru with 10 years of Experiance.As a SharePoint Developer explored SharePoint 2010, SharePoint 2013, SharePoint Online.",
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
            link: ""
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
            link: ""
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
            link: ""
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
            link: ""
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
            link: ""
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

// --- 💻 Work Section ---
const works = [
    {
        projectName: "TrackYourSubs IOS App",
        yearCompleted: "2022",
        description: "An IOS app to track you subscriptions and expenses, all the while presenting in a clean and professional look with a load of features. Some of the more evident features are: Budgeting (monthly / yearly option available), Current monthly & yearly total expense at a glance, Custom suggestions to meet budget, Organize (Categorization & Importance) and filter through subscriptions, Reminders via scheduled notifications, Stats page: pie chart visual, bar chart visual, and streak indicator.",
        techStack: "Swift, SwiftUI",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/sharathnaik/TrackYourSubsDemo/"
            },
            {
                label: "",
                type: "external",
                url: "https://youtu.be/KsTx-F70OOk"
            }
        ],
        imageLink: "images/tracksubs_pic.png",
        alignLeft: false
    },
    {
        projectName: "Dynamic Portfolio Website",
        yearCompleted: "2021",
        description: "Developed a personal portfolio website with Python backend using the Django web development framework. Incorporated HTML, CSS, and JavaScript to construct the frontend of the website.",
        techStack: "Django, Python, HTML, CSS, JS",
        links: [
            {
                label: "",
                type: "external",
                url: "https://maximshelepov.com"
            }
        ],
        imageLink: "images/portfolio_pic.png",
        alignLeft: true
    },
    {
        projectName: "Sudoku Game & Solver",
        yearCompleted: "2021",
        description: "Built a Sudoku game UI incorporating the Java Swing library. Randomly generates a Sudoku puzzle and solves itself using the backtracking algorithm written in Java..",
        techStack: "Java",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/sharathnaik/sudokusolver"
            },
            {
                label: "",
                type: "external",
                url: "https://youtu.be/lXOjOrjf5hU"
            }
        ],
        imageLink: "images/sudoku_pic.png",
        alignLeft: false
    },
    {
        projectName: "Trivia Quiz",
        yearCompleted: "2020",
        description: "Interested in taking a fun and interactive pop quiz? Using the HTML, CSS3, JavaScript, and jQuery I created a quiz that can be taken on numerous topics of your choice and gives instant feedback. The entire project is built mostly on JavaScript and all the functionality and events are controlled through functions such as ReadDisplay and Validate. The HTML portion of the online quiz only serves as the skeleton and template for elements that will be created via JS.",
        techStack: "JS, HTML, CSS",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/sharathnaik/JS-API-Quiz"
            },
            {
                label: "",
                type: "external",
                url: "https://codepen.io/Max_the_coder/pen/yLXZOYL" //https://codepen.io/Max_the_coder/pen/yLXZOYL
            }
        ],
        imageLink: "images/trivia_pic.png",
        alignLeft: true
    },
    {
        projectName: "Coronavirus Report",
        yearCompleted: "2020",
        description: "Created a program that displays up-to-date COVID-19 data and shows results in a graphical / visual representation. Coded with the Python programming language and libraries such as Matplotlib, Requests, and CSV.",
        techStack: "Python",
        links: [
            {
                label: "",
                type: "git",
                url: "https://youtu.be/gw5kb1QKVp0"
            },
            {
                label: "",
                type: "external",
                url: "https://github.com/sharathnaik/Covid-Cases-Visual"
            }
        ],
        imageLink: "images/covid_pic.png",
        alignLeft: false
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
    works,
    archiveLink,
    contact
}