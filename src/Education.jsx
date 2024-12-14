import React from 'react';

function Education() {
    const skills = [
        {
            skill: "HTML",
            company: "TechBrain Networks",
            year: "2023 - 2024",
            description: "MR Coder has 1 year of experience at TechBrain Networks, specializing in HTML. They developed responsive, accessible web pages, optimized performance, and ensured cross-browser compatibility for enhanced user experiences."
        },
        {
            skill: "JavaScript",
            company: "Juspay",
            year: "2018 - 2019",
            description: "MR Coder has 1 year of experience at Juspay, focusing on JavaScript. They developed interactive web applications, optimized code for performance, and implemented dynamic features to enhance user engagement."
        },
        {
            skill: "React Js",
            company: "TechBrain Networks",
            year: "2018 - 2019",
            description: "MR Coder has 1 year of experience at TechBrain Networks in React.js, building scalable single-page applications, creating reusable components, and managing state for improved performance and user experience."
        },
        {
            skill: "Node Js",
            company: "Juspay",
            year: "2018 - 2019",
            description: "MR Coder has 1 year of experience at Juspay in Node.js, developing server-side applications, creating RESTful APIs, and optimizing backend performance for efficient data handling and seamless integration."
        },
        {
            skill: "Express Js",
            company: "TechBrain Networks",
            year: "2018 - 2019",
            description: "MR Coder has 1 year of experience at TechBrain Networks, focusing on Express.js. They built and maintained RESTful APIs, handled server-side routing, and ensured efficient application performance and scalability."
        },
        {
            skill: "MongoDB",
            company: "TechBrain Networks",
            year: "2018 - 2019",
            description: "MR Coder has 1 year of experience at TechBrain Networks, working with MongoDB. They managed databases, designed schemas, and optimized queries to ensure efficient data storage and retrieval for applications."
        },
        {
            skill: "PHP",
            company: "TechBrain Networks",
            year: "2018 - 2019",
            description: "MR Coder has 1 year of experience at TechBrain Networks, specializing in PHP. They developed server-side scripts, built dynamic web applications, and integrated databases to enhance functionality and user interaction."
        }
    ];

    return (
        <div className="main">
            <h1>My <span> Skills </span></h1>

            <div className="timeline">
                {skills.map((skill, index) => (
                    <div className={`container ${index % 2 === 0 ? 'left-container' : 'right-container'}`} key={index}>
                        <div className={`text-box ${skill.skill.toLowerCase()}card`}>
                            <h2 className={`${skill.skill.toLowerCase()}text`}>{skill.skill}</h2>
                            <small>
                                <span className="company"> {skill.company} </span> {skill.year}
                            </small>
                            <p>{skill.description}</p>
                            <span className={`${index % 2 === 0 ? 'left' : 'right'}-container-arrow ${skill.skill.toLowerCase()}arrow`}></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;
