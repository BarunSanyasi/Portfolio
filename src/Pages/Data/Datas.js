import { faEnvelope, faLocationDot, faMobile } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedinIn, faWhatsapp, } from '@fortawesome/free-brands-svg-icons';

export const socialMediaData = [
  { icon: faFacebook, link: 'https://www.facebook.com/profile.php?id=100075023260623' },
  { icon: faGithub, link: 'https://github.com/BarunSanyasi' },
  { icon: faWhatsapp, link: 'https://wa.me/7008836652' },
  { icon: faLinkedinIn, link: 'https://www.linkedin.com/in/barun-sanyasi-64797b256/' }
];

export const contactDetails = [
    { icon: faEnvelope, title: 'Email', detail: 'sanyasibarun@gmail.com', link: 'mailto:sanyasibarun@gmail.com' },
    { icon: faMobile, title: 'Phone', detail: '+91-7008836652', link: 'tel:+917008836652' },
    { icon: faLocationDot, title: 'Location', detail: 'Bhubaneswar, India', link: 'https://maps.google.com/?q=Bhubaneswar,India' }
  ];

export const cvDownloadLink = 'https://docs.google.com/document/d/1ifnWl7JbE1LSmjVr0413LezkYQXnIeRbno4lG_JFIKo/edit?usp=sharing'; //resume link

export const skills= [
    {
        title: "Frontend",
        skills: [
            {
                name:"HTML",
                image:'../Images/html.png'
            },
            {
                name:"CSS",
                image:'../Images/css-3.png'
            },
            {
                name:"React Js",
                image:'../Images/React.png'
            },
            {
                name:"Bootstrap",
                image:'../Images/bootsrap.png'
            },
            {
                name:"JavaScript",
                image:'../Images/js.png'
            }
        ],
    },
    {
        title: "Backend",
        skills: [
            {
                name:"Node Js",
                image:'../Images/node-js.png'
            },
            {
                name:"API",
                image:'../Images/api.png'
            },
            {
                name:"My SQL",
                image:'../Images/sql-server.png'
            },
            {
                name:"Java",
                image:'../Images/java.png'
            }
        ],
    },
    {
        title: "Others",
        skills: [
            {
                name:"Git",
                image:'../Images/git.png'
            },
            {
                name:"Github",
                image:'../Images/github.png'
            },
            {
                name:"VS Code",
                image:'../Images/vscode.png'
            },
            {
                name:"Wordpress",
                image:'../Images/wordpress.png'
            }
        ],
    },
];

export const educations=[
    {
        id: 0,
        img: '../Images/soa.jpg',
        school: "Institude of Technical Education and Research (SOA).",
        date: "Aug 2020 - July 2024",
        desc: "I'm currently pursuing a Bachelor's degree in Computer Science and Engineering at Institude of Technical Education and Research (SOA), Bhubaneswar, India.",
        degree: "Bachelor of Technology - B.Tech in Computer Science and Engineering."
    },
    {
        id: 1,
        img: '../Images/Yhss.png',
        school: "Yangchenphugh Higher Secondary School.",
        date: "Feb 2018 - Dec 2018",
        desc: "I completed my class 12 at Yangchenphugh Higher Secondary School, Thimphu, Bhutan.",
        degree: "BHSEC(XII), Science."
    },
    {
        id: 2,
        img: '../Images/Tcs.jpg',
        school: "Tendruk Higher Secondary School.",
        date: "Feb 2016 - Dec 2016",
        desc: "I completed my class 10 at Tendruk Higher Secondary School, Tendruk, Samtse, Bhutan.",
        degree: "BCSE(X), IT."
    }
];

export const projects= [
    {
        id: 0,
        title: "FunTube",
        date: "May 2024",
        description: "FunTube is a dynamic YouTube clone website.",
        image: '../Images/FubTube.png',
        tags:["React.js", "Node.js", "Material UI", "antd design", "APIs"],
        category: "",
        github: 'https://github.com/BarunSanyasi/FunTube',
        website: 'https://funtube1.netlify.app',
    },
    {
        id: 1,
        title: "Bhutan Trip Planner",
        date: "Nov 2023",
        description: "It's a travel planner website for travelers.",
        image: '../Images/BhutanTP.png',
        tags:["WordPress", "elementor"],
        category: "",
        github: '',
        website: 'https://bhutantripplanner.com/',
    },
    // {
    //     id: 2,
    //     title: "project5",
    //     date: "March 2024",
    //     description: "Im good",
    //     image: '',
    //     tags:["React", "HTML"],
    //     category: "",
    //     github: '',
    //     website: '',
    // },
];