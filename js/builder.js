var skillsGlance = [
    {
        "name": "Frontend",
        "values": [
            "Selenium",
            "JavaScript",
            "HTML/CSS"
        ]
    },
    {
        "name": "Backend",
        "values": [
            "APIs",
            "Databases"
        ]
    },
    {
        "name": "Deployment",
        "values": [
            "AWS",
            "Docker"
        ]
    }
]

var employment = [
    {
        "company": "Xedo Software",
        "role": "Automation Engineer",
        "image": "http://placehold.it/400x100"
    },
    {
        "company": "Skyscanner",
        "role": "Software Engineer",
        "image": "http://placehold.it/400x100"
    }
]

var university = [
    "Advanced Topics in Software Engineering",
    "Advanced Programming (Java)",
    "Logic & Algorithms",
    "Theory of Computation",
    "Building Software Systems",
    "Artificial Intelligence",
    "Computer Security",
    "Embedded Systems"
]

addSkillsGlance($("#skillsGlance"), skillsGlance)
addEmployment($("#employment"), employment);
addEmploymentModals($("body"), employment);
addEducation($("#education"), university);