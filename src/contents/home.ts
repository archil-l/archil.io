import { defineMessages } from 'react-intl';

const messages = defineMessages({
    heading: {
        id: 'home.heading',
        defaultMessage: `Welcome! 🖖🏻`,
    },
    aboutPartOne: {
        id: 'home.aboutPartOne',
        defaultMessage: 'My name is Archil Lelashvili, I am a software engineer building dynamic, semantic, accessible, and user-friendly web applications.',
    },
    aboutPartTwo: {
        id: 'home.aboutPartTwo',
        defaultMessage: `Welcome to my personal page. I'm excited to share my work, projects, and insights into my journey in web development. Glad to have you here!`,
    },
    whatsDone: {
        id: 'home.whatsDone',
        defaultMessage: `This page is built 👨🏻‍💻 using React, TypeScript, and styled-components. I haven't used any templates, just skeleton.css for initial basic styling. I added responsiveness and light/dark mode 🌓 support. The latter follows your OS settings and there is a switcher on the top. If you are curious how this page is built, checkout the `,
    },
    stayTuned: {
        id: 'home.stayTuned',
        defaultMessage: 'Stay tuned, there will be more updates soon!',
    },
});

export default messages;
