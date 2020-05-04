import React from 'react';
import { ReactComponent as Sass } from './svg/sass.svg';
import { ReactComponent as Handle } from './svg/handlebars.svg';
import { ReactComponent as Express } from './svg/express.svg';
import { ReactComponent as Mongo } from './svg/mongodb.svg';
import { ReactComponent as Bootstrap } from './svg/bootstrap.svg';
import { ReactComponent as Css } from './svg/css.svg';
import { ReactComponent as Es6 } from './svg/es6.svg';
import { ReactComponent as Git } from './svg/git.svg';
import { ReactComponent as Js } from './svg/js.svg';
import { ReactComponent as Node } from './svg/node.svg';
import { ReactComponent as Php } from './svg/php.svg';
import { ReactComponent as ReactL } from './svg/react.svg';
import { ReactComponent as Webpack } from './svg/webpack.svg';
import { ReactComponent as Docker } from './svg/docker.svg';
import { ReactComponent as Word } from './svg/wordpress.svg';
import { ReactComponent as Html } from './svg/html.svg';
import { ReactComponent as Jquery } from './svg/jquery.svg';
import { ReactComponent as Heroku } from './svg/heroku.svg';
import { ReactComponent as Redux } from './svg/redux.svg';
import { ReactComponent as Ec2 } from './svg/ec2.svg';
import { ReactComponent as Aws } from './svg/aws.svg';
import { ReactComponent as Strapi } from './svg/strapi.svg';


export const data = [
  {
    name: 'Studyum.io.2.0',
    img: 'img/work/responsive/19.png',
    info:
        "Studyum.io.2.0 is the second version of the Web platform entirely redesigned and developed , I'm responsible for entire FullStack structure, From developing UI to user Registration. I took the jam-stack approach and it keeps growing. Currently, It uses React and Express Wordpress as headless CMS for content management.",
    tech: [
      <ReactL/>,
      <Es6/>,
      <Node/>,
      <Express/>,
      <Css/>,
      <Sass/>,
      <Word/>,
      <Git/>,


    ],
    demo: 'https://studyum.io/',
    github: 'https://github.com/STUDYUM/Studyum.io-2.0',
  },
  {
    name: 'Studyum.io',
    img: 'img/work/responsive/22.png',
    info:
      "Studyum.io is E-learning Platform based on block-chain technology, I'm responsible for entire FullStack structure, From developing UI to user Registration. I took the jam-stack approach and it keeps growing. Currently, It uses React App in front and Express on the back-end and it uses Wordpress as headless CMS for content management.",
    tech: [
      <ReactL/>,
      <Es6/>,
      <Node/>,
      <Express/>,
      <Css/>,
      <Sass/>,
        <Word/>,
      <Git/>,


    ],
    demo: 'https://zealous-brahmagupta-e2fdc0.netlify.com/',
    github: 'https://github.com/STUDYUM/studyum',
  },
  {
    name: 'Karate City',
    img: 'img/work/responsive/20.png',
    info:
        "Karate City is a charitable non-profit organization, dedicated to improving the well-being of New Yorkers through art and sport of karate. This project is Wordpress powered, I'm responsible for Fullstack development and custom features such as template design, UI/UX, Paypal payment system and drastic improvement of SEO.",
    tech: [
      <Word/>,
      <Php/>,
      <Js/>,
      <Jquery/>,
      <Css/>,
      <Sass/>,
    ],
    demo: 'https://www.karatecity.org/',
    github: 'https://github.com/K00ry',
  },

  {
    name: 'Skylarking',
    img: 'img/work/responsive/21.png',
    info:
        // 'Pars Jadval is concrete precast company. Technologies i used were MongoDB Atlas, React, Express, Node.js and created a cms like functionality for admin user to update new products on the website, also it uses i18next (for Localization).',
    'Skylarking silversmith is a project I developed as an e-commerce platform to showcase and sale of beautiful silversmith products. it\'s developed on Bigcommerce Stencil and it was heavy on Handlebar.js and complex UI development.',
    tech: [
      <Handle/>,
      <Html/>,
      <Css/>,
      <Sass/>,
      <Es6/>,
      <Git/>,
    ],
    demo: 'https://skylarkingsilver.com/',
    github: 'https://github.com/K00ry/pars-fullstack',
  },
  {
    name: 'YAASSS Music',
    img: 'img/work/responsive/17.png',
    info:
        'Web Platform for the Great Yaasss Band. Technologies used are React, Strapi CMS for content management, MongoDb for Database and AWS S3 for Storage.',
    tech: [
      <ReactL/>,
      <Redux/>,
      <Sass/>,
      <Bootstrap/>,
      <Mongo/>,
      <Heroku/>,
      <Aws/>,
      <Git/>,
    ],
    demo: 'https://naughty-euclid-6bae38.netlify.com/',
    github: 'https://github.com/K00ry/yaasss',
  },
  {
    name: 'React Web API',
    img: 'img/work/responsive/1.png',
    info:
      "In This Project, using Axios library, i used two Public API's(Lastfm/Flickr) to search for the artist and form a Gallery from the result, user then can choose an album and get info like bio and genres of chosen Artist. as bonus, User gets latest pictures related to the chosen Artist from Flickr.",
    tech: [
      <Html/>,
      <Css/>,
      <Sass/>,
      <ReactL/>,
      <Js/>,
      <Git/>,
    ],
    demo: 'https://k00ry.github.io/react-web-api/',
    github: 'https://github.com/K00ry/react-web-api',
  },
  // {
  //   name: 'Pars Jadval',
  //   img: 'img/work/responsive/16.png',
  //   info:
  //       'Pars Jadval is concrete precast company. Technologies i used were MongoDB Atlas, React, Express, Node.js and created a cms like functionality for admin user to update new products on the website, also it uses i18next (for Localization).',
  //   tech: [
  //     <ReactL/>,
  //     <Node/>,
  //     <Mongo/>,
  //     <Express/>,
  //     <Es6/>,
  //     <Sass/>,
  //     <Bootstrap/>,
  //     <Git/>,
  //   ],
  //   demo: 'http://www.parsjadval.co/',
  //   github: 'https://github.com/K00ry/pars-fullstack',
  // },
  // {
  //   name: 'Web App',
  //   img: 'img/work/responsive/2.png',
  //   info:
  //       'This project was about building a beautiful web application dashboard complete with JavaScript-driven charts and graphs base on a supplied graphic Mock-up. This was a front end project only, that required to create the responsive layout in HTML and CSS with added JavaScript functionality. Flexbox and Sass proved to be invaluable tools.',
  //   tech: [
  //
  //     <Html/>,
  //     <Css/>,
  //     <Sass/>,
  //     <Jquery/>,
  //     <Js/>,
  //     <Git/>,
  //
  //   ],
  //   demo: 'https://k00ry.github.io/web_app_dashboard_v2/',
  //   github: 'https://github.com/K00ry/web_app_dashboard_v2',
  // },
  // {
  //   name: 'Interactive Player',
  //   img: 'img/work/responsive/4.png',
  //   info:
  //     'This video player has custom controls created with CSS and Javascript. There is a functional caption track as well as an interactive transcript which highlights the text as the video plays. The text can be clicked on to jump to the appropriate time index in the video.',
  //   tech: [
  //     <Html/>,
  //     <Css/>,
  //     <Js/>,
  //     <Git/>,
  //   ],
  //   demo: 'https://k00ry.github.io/video_player_v2/',
  //   github: 'https://github.com/K00ry/video_player_v2',
  // },
];

export const skills = [
  'img/work/logos/react.png',
  'img/work/logos/node.png',
    'img/work/logos/es6.png',
  'img/work/logos/html.png',
  'img/work/logos/css.png',
    'img/work/logos/js.png',
    'img/work/logos/jquery.png',
    'img/work/logos/php.png',
  'img/work/logos/sass.svg',
  'img/work/logos/webpack.png',
  'img/work/logos/gulp1.png',
  'img/work/logos/git.png',
  'img/work/logos/bootstrap.png',
  'img/work/logos/big.png',
  'img/work/logos/green.png',
  'img/work/logos/adobe.png',
];
export const skills_svg = [
  <ReactL/>,
  <Redux/>,
  <Jquery/>,
  <Bootstrap/>,
  <Html/>,
  <Css/>,
  <Sass/>,
  <Js/>,
  <Node/>,
  <Mongo/>,
  <Express/>,
  <Es6/>,
  <Php/>,
  <Word/>,
  <Webpack/>,
  <Docker/>,
  <Ec2/>,
  <Aws/>,
  <Heroku/>,
  <Git/>,
  <Handle/>,
  <Strapi/>
];


export const worksDataMobile = [
  { id: 4, name: 'Studyum.io.2.0', src: 'img/work/responsive-works/19.png' },
  { id: 1, name: 'Studyum.io', src: 'img/work/responsive-works/22.png' },
  { id: 2, name: 'Karate City', src: 'img/work/responsive-works/20.png' },
  { id: 4, name: 'Skylarking', src: 'img/work/responsive-works/21.png' },
  { id: 6, name: 'YAASSS Music', src: 'img/work/responsive-works/17.png' },
  { id: 3, name: 'React Web API', src: 'img/work/responsive-works/1.png' },
  // { id: 2, name: 'Web App', src: 'img/work/responsive-works/2.png' },

];
