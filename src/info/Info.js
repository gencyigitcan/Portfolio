import self from "../img/selfie.png"
import mock1 from "../img/mock6.png"
import mock2 from "../img/mock6.png"
import mock3 from "../img/mock6.png"
import mock4 from "../img/mock6.png"
import mock5 from "../img/mock6.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Yiğitcan",
    lastName: "Genç",
    initials: "yg", 
    position: "a Full Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            link: "https://linkedin.com/in/gencyigitcan1/",
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            link: "https://linkedin.com/in/gencyigitcan1/",
            emoji: '🌎',
            text: 'based in the Istanbul'
        },
        {
            link: 'https://github.com/gencyigitcan',
            emoji: "💻",
            text: "full stack developer"
        },
        {
            link: "mailto:yigitcangenc@gmail.com?subject=Let's work on something together!",
            emoji: "📧",
            text: "yigitcangenc@gmail.com"
            
        }
    ],
    socials: [
        {
            link: "https://facebook.com/gncygtcn",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com/gencyigitcan",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/gencyigitcan",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/gencyigitcan1/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/gencyigitcan",
            icon: "fa fa-twitter",
            label: 'twitter'
        }


    ],
    bio: "I'm Yiğitcan. I'm a Full Stack Developer. I completed a Certificate Program at Bahçeşehir University, and my passion for the world of software keeps growing day by day. My interest in technology reinforces my belief in the power of design in all areas. You should hire me!",
    skills:
        {
            frontend: ['JavaScript', 'HTML', 'CSS', 'Material UI', 'React.Js', 'API Requests', 'Node.Js'],
            backend: ['C#', 'Asp .Net', 'Ms Sql', 'Restful Api', 'Ado .Net' ],
            tools: ['Visual Studio', 'Visual Studio Code', 'Azure Data Studio', 'Github', 'Figma', 'Adobe CC' ]
        }

    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'digital art',
            emoji: '🎨'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'scuba diving',
            emoji: '🤿'
        }

    ],
    portfolio: [ 
        {
            title: "Project 1",
            live: "https://linkedin.com/in/gencyigitcan1/", 
            source: "https://github.com/gencyigitcan", 
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://linkedin.com/in/gencyigitcan1/",
            source: "https://github.com/gencyigitcan",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://linkedin.com/in/gencyigitcan1/",
            source: "https://github.com/gencyigitcan",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://linkedin.com/in/gencyigitcan1/",
            source: "https://github.com/gencyigitcan",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://linkedin.com/in/gencyigitcan1/",
            source: "https://github.com/gencyigitcan",
            image: mock5
        }
    ]
}