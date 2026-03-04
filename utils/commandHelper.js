const COMMANDS = [
  {
    command: "about",
    description: "About Me",
  },
  {
    command: "education",
    description: "My Education",
  },
  {
    command: "skills",
    description: "My Tech Skills",
  },
  {
    command: "projects",
    description: "My Tech Projects",
  },
  {
    command: "resume",
    description: "My Resume",
  },
  {
    command: "contact",
    description: "Contact Me",
  },
  {
    command: "blog",
    description: "Visit my blog",
  },
  {
    command:
      // 'clear <span style="color: var(--primary)">(Ctrl+L shortcut)</span>',
      "clear",
    description: "Clear terminal",
  },
];

const getProjects = async () => {
  const projects = await (await fetch("/api/projects")).json();
  const projectHTML =
    `<h3>My Projects (You can scroll)</h3>` +
    projects
      .map(
        (project) => `<div class="command">
        <a href="${project.link}" target="_blank"><b class="command">${
          project.name
        }</b></a> - <b>${project.stack.join(", ")}</b>
        <p class="meaning">${project.description}</p>
      </div>`
      )
      .join("");
  return projectHTML;
};

const getContacts = async () => {
  const contactMediums = await (await fetch("/api/contacts")).json();
  return contactMediums
    .map(
      (contact) => `<div style="display: flex; justify-content: space-between;">
      <p style="font-size: 15px">${contact.medium}</p>
      <a class="meaning" href="${contact.link}" target="_blank">${contact.username}</a>
    </div>`
    )
    .join("");
};

export const CONTENTS = {
  help: () =>
    COMMANDS.map(
      (command) => `<div style="display: flex; justify-content: space-between;">
        <p style="font-size: 15px">${command.command}</p>
        <p>${command.description}</p>
      </div>`
    ).join("") +
    `<br />
      <div class="command">Type one of the above to view. For eg. <span style="color: var(--secondary)">about</span></div>`,
  about: () => `
    I am a Cloud and DevOps Engineer with experience in serverless architectures and on-premise infrastructure workflows
    I have strong problem-solving skills and experience supporting deployment, infrastructure, and release operations through effective cross-team collaboration.
    I am actively seeking opportunities in Cloud, DevOps, or Backend Engineering roles.
    `,


  education:
    () => `
  <b><a href="https://measiit.edu.in/" target="_blank">MEASI Institute of Information Technology</a></b><br/>
  Master of Computer Applications (Aug 2023 – May 2025)<br/>
  GPA: 3.9 / 5.0<br/>
  Coursework: Cloud Computing, Web Technologies, Data Structures & Algorithms, Computer Networks, DBMS, Operating Systems, Distributed Systems, OOP, Software Engineering, Data Science
  <br/><br/>
  <b><a href="https://srmrmp.edu.in/" target="_blank">SRM Institute of Science and Technology</a></b><br/>
  Bachelor of Science in Physics (Aug 2020 – May 2023)<br/>
  GPA: 7.60 / 10.0<br/>
  Relevant Coursework: Object-Oriented Programming with Python, MATLAB
  `,
  skills: () => `
  <div class="skill"><b>languages</b>: Python, SQL, Shell Scripting</div>
  <div class="skill"><b>cloud</b>: AWS (EC2, S3, Lambda, IAM, DynamoDB, Athena)</div>
  <div class="skill"><b>devops</b>: Kubernetes (EKS, KinD), Docker (ECS Fargate), Terraform, Ansible, GitHub Actions</div>
  <div class="skill"><b>web</b>: HTML, CSS</div>
  <div class="skill"><b>networking</b>: TCP/IP, TLS, DNS, VPC, Subnetting, Security Groups</div>
  <div class="skill"><b>version control</b>: Git, GitHub</div>
  <div class="skill"><b>os</b>: Linux, Windows</div>
  `,

  projects: getProjects,
  contact: getContacts,
  resume: () => {
    window.open("resume.pdf", "_blank");
    return "";
  },
  error: (input) =>
    `<div class="help-command">sh: Unknown command: ${input}</div><div class="help-command">See \`help\` for info`,
  blog: () => {
    window.open("https://a-akash.hashnode.dev/", "_blank");
    return "";
  },
};
