// Navigation Bar SECTION
const navBar = {
  show: true
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#FF0D00, #00E727",
  firstName: "Sagor",
  middleName: "",
  lastName: "Bhadro",
  message: " Developers aim to change the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/SagorBhadro"
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/sagor.bhadro/"
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/____.__sagor__.____/"
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/sagor-bhadro-8b8083211/"
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/sagorbhadro"
    }
  ]
};

// ABOUT SECTION
const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../assets/img/head.jpg"),
  imageSize: 375,
  message:
    "My name is Sagar Bhadra. I am studying science from a national university. My goal is to be a good web developer. When I'm free, I look at programming projects. And seeing them, I try to do something different. I like coding very much.",
  resume: "https://drive.google.com/file/d/1kusGWuhbV5ttZVSsTXikhmIb_6AXxdO7/edit"
};

// PROJECTS SECTION
const works = {
  heading: "Recent Works",
  works: [
    { title: "All-service-related", live:"https://indicate-design.web.app/", github:" ", img: require("../assets/img/works/1.JPG") },
    { title: "penguin-fashion", live:"https://sagorbhadro.github.io/assignment-2/index.html",github:" https://github.com/SagorBhadro/assignment-2", img: require("../assets/img/works/2.JPG") },
    { title: "Rokomary-book", live:" ", github:"https://github.com/SagorBhadro/rokomary-book", img: require("../assets/img/works/3.JPG") },
    { title: "Raider-location", live:"https://mystifying-yonath-7e40b9.netlify.app/", github:"https://github.com/SagorBhadro/town-Uber-Rider", img: require("../assets/img/works/4.JPG") },
    { title: "Soppin-related", live:" ", github:" ", img: require("../assets/img/works/5.JPG") }
  ]
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../assets/img/head.jpg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../assets/img/head.jpg"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    }
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "HTML5", value: 90 },
    { name: "CSS3", value: 85 },
    { name: "Bootstrap4", value: 85 },
    { name: "JavaScript/ES6", value: 90 },
    { name: "ReactJs", value: 90 },
    { name: "NodeJs", value: 85 },
    { name: "Firebase Auth", value: 80 },
    { name: "MongoDB", value: 80 }
  ],
  softSkills: [
    // { name: "Goal-Oriented", value: 80 },
    // { name: "Collaboration", value: 90 },
    // { name: "Positivity", value: 75 },
    // { name: "Adaptability", value: 85 },
    // { name: "Problem Solving", value: 75 },
    // { name: "Empathy", value: 90 },
    // { name: "Organization", value: 70 },
    // { name: "Creativity", value: 90 }
  ]
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: "Software Engineer", // Here Add Company Name
      companylogo: require("../assets/img/dell.png"),
      date: "June 2018 – Present"
    },
    {
      role: "Front-End Developer",
      companylogo: require("../assets/img/boeing.png"),
      date: "May 2017 – May 2018"
    }
  ]
};

export { navBar, mainBody, about, skills, leadership, works, experiences };
