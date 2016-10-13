var employment = [
    {
        "company": "Xedo Software",
        "role": "Automation Engineer",
        "image": "images/xedo.png"
    },
    {
        "company": "Skyscanner",
        "role": "Software Engineer",
        "image": "images/skyscanner.png"
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

addEmploymentModals($("body"), employment);
addEducation($("#education"), university);