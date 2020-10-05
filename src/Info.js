import React from 'react'

var INFORMATION = {
    bio: [
        // "Hello!",
        // "My name is Thomas Ryan and I am an avid programmer, network/security professional, and all around eager to learn kind of guy",
        // "My name is Thomas Ryan, and the only reason I get out of bed every morning is to tinker, create, and learn.",
        // "Graduating from Ontario Tech University in 2019, I've continued to learn new concepts, expand my portfolio, and add many new programming languages to my skillset"
        <h4>
        An IT professional passionate about learning new skills and technologies with a talent for solving highly technical problems. Looking for a position that can constantly challenge me in new and exciting ways
        </h4>,
        <h4>
            Skilled in several different programming languages and frameworks, along with an extensive background in networking and security, I'm most at ease in an environment where new challenges are available everyday
        </h4>,
    ],
    education: [
        <div style={{display: "inline"}}>
            <span>Bachelor of Information Techology</span>
            <br/>
            <sup>[Ontario Tech University, Ontario]</sup>
        </div>,
        <ul style={{borderBottom: "5px solid var(--dark-text)", paddingBottom: "30px"}}>
            <li>Completed with a GPA of 3.28 / 4.3</li>
            <li>Excelled primarily in programming and cloud-based courses</li>
            <li>Minored in business management</li>
        </ul>,
        // <div style={{display: "inline"}}>
        //     <span>Masters of Computer Science</span>
        //     <br/>
        //     <sup>[Ontario Tech University, Ontario]</sup>
        // </div>,
        // <ul style={{borderBottom: "5px solid var(--dark-text)", paddingBottom: "30px"}}>
        //     <li>Currently on an indefinite leave of absence</li>
        // </ul>
    ],
    experience: [
        <div style={{display: "inline"}}>
            <span>Software Engineer</span>
            <br/>
            <sup>[Cisco, Ottawa Ontario] - [May 2020 - Present]</sup>
        </div>,
        <ul style={{borderBottom: "5px solid var(--dark-text)", paddingBottom: "30px"}}>
            <li>Contributed to development of the pyATS network test and automation framework</li>
            <ul>
                <li style={{paddingLeft: "10px"}}>Developed parsers using regular expressions along with APIs designed to use them</li>
                <li style={{paddingLeft: "10px"}}>Ensured stability across external and internal builds of the codebase</li>
            </ul>
            <li>Built unit tests for international customers that allows them to test network devices</li>
            <li>Created scripts and tools to improve productivity of the development team</li>
            <li>Worked with internal Cisco users and external Cisco customers to provide product support</li>
        </ul>,
        <div style={{display: "inline"}}>
            <span>Teaching Assistant</span>
            <br/>
            <sup>[Ontario Tech University, Ontario] - [Jan 2018 - Dec 2019]</sup>
        </div>,
        <ul style={{borderBottom: "5px solid var(--dark-text)", paddingBottom: "30px"}}>
            <li>Taught intro to programming and object-oriented concepts in Python</li>
            <li>Prepared weekly labs designed to test concepts learned in lectures</li>
        </ul>,
        <div style={{display: "inline"}}>
            <span>Research Assistant</span>
            <br/>
            <sup>[Ontario Tech University, Ontario] - [Sept 2017 - Apr 2018]</sup>
        </div>,
        <ul style={{borderBottom: "5px solid var(--dark-text)", paddingBottom: "30px"}}>
            <li>Assisted in writing Google data processors for analyzing public transit routes</li>
            <li>Worked closely with faculty and master’s students to produce useful results</li>
        </ul>,
    ]
};

export default INFORMATION;