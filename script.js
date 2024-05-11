// JavaScript code for dynamically generating content

// Function to fetch and populate projects
function populateProjects() {
    // Example of fetching projects from an API or local data
    const projectsData = [
        { name: 'Project 1', description: 'Description of Project 1', image: 'project1.jpg', link: 'project1.html' },
        { name: 'Project 2', description: 'Description of Project 2', image: 'project2.jpg', link: 'project2.html' },
        // Add more project objects as needed
    ];

    const projectsGrid = document.querySelector('.projects-grid');

    projectsData.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');
        projectItem.innerHTML = `
            <img src="${project.image}" alt="${project.name}">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" class="btn">View Project</a>
        `;
        projectsGrid.appendChild(projectItem);
    });
}

// Function to populate skills
function populateSkills() {
    // Example of skills data
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'SQL', 'Git', 'Responsive Design'];

    const skillsList = document.querySelector('.skills-list');

    skills.forEach(skill => {
        const skillItem = document.createElement('li');
        skillItem.textContent = skill;
        skillsList.appendChild(skillItem);
    });
}

// Function to populate experience
function populateExperience() {
    // Example of experience data
    const experienceData = [
        { title: 'Frontend Developer', company: 'ABC Company', duration: 'Jan 2020 - Present', description: 'Responsibilities and achievements...' },
        { title: 'Intern', company: 'XYZ Agency', duration: 'Jun 2019 - Dec 2019', description: 'Tasks and projects completed...' },
        // Add more experience objects as needed
    ];

    const experienceList = document.querySelector('.experience-list');

    experienceData.forEach(exp => {
        const expItem = document.createElement('div');
        expItem.classList.add('experience-item');
        expItem.innerHTML = `
            <h3>${exp.title}</h3>
            <p><strong>${exp.company}</strong> (${exp.duration})</p>
            <p>${exp.description}</p>
        `;
        experienceList.appendChild(expItem);
    });
}

// Function to populate education
function populateEducation() {
    // Example of education data
    const educationData = [
        { degree: 'Bachelor of Science in Computer Science', institution: 'University XYZ', duration: '2016 - 2020' },
        { degree: 'Diploma in Web Development', institution: 'Online Course Provider', duration: '2018 - 2019' },
        // Add more education objects as needed
    ];

    const educationList = document.querySelector('.education-list');

    educationData.forEach(edu => {
        const eduItem = document.createElement('div');
        eduItem.classList.add('education-item');
        eduItem.innerHTML = `
            <h3>${edu.degree}</h3>
            <p><strong>${edu.institution}</strong> (${edu.duration})</p>
        `;
        educationList.appendChild(eduItem);
    });
}

// Function to populate testimonials (assuming a slider or carousel)
function populateTestimonials() {
    // Example of testimonials data
    const testimonialsData = [
        { name: 'John Doe', testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis leo auctor, fringilla enim ut, maximus dui.' },
        { name: 'Jane Smith', testimonial: 'Duis auctor quam ut nunc vehicula aliquam. Ut gravida enim eget mauris suscipit, eget rutrum felis faucibus.' },