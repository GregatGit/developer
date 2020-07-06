import ironThroneImg from '../img/iron-throne.jpg'
import wikiImg from '../img/wiki.JPG'
import tictactoe from '../img/tictactoe.JPG'
import recipebox from '../img/recipebox.JPG'
import pomodoro from '../img/pomodoro.JPG'
import gregProfile from '../img/greg.jpg'
import sunny from '../img/Sunny1.jpg'
import markdown from '../img/markdown-previewer.JPG'
import dailyQuote from '../img/quote.JPG'
import gameOfLife from '../img/GameOfLife.JPG'
import simon from '../img/simon-game.JPG'
import calculator from '../img/calculator.JPG'
import projects from '../img/projects.JPG'
import drumMachine from '../img/drum-machine.JPG'
import goShop from '../img/goShop.JPG'
import todoLab from '../img/todoLab.JPG'
import todoVue from '../img/vue-todos.JPG'

export const aboutPics = { gregProfile, sunny }

export const projectStatus = [
  `This project is still being worked on. It is not up and running.`, //0
  `This project is up and running. It is no longer being updated but left to show eariler coding.`, //1
  `This project is up and running. It is complete but will continue be updated.`, //2
  `This project is still being worked on. It is up running to demonstrate how the code is working so far.`, //3
]
// const temp = {
//   title: ``,
//   status: projectStatus[1],
//   background: ``,
//   img: markdown,
//   url: '',
//   code: '',
// }
export const projectData = [
  {
    title: `Projects Page`,
    status: projectStatus[2],
    background: `Welcome to the projects page. These are the projects I’ve been working or worked on. Earlier I depended heavily on jQuery and Bootstrap. I now prefer to use vanilla js, react and vue. I haven’t included any of the tutorials that I’ve coded as I followed along as they’re not really mine. Some of them I put on GitHub but make it very clear that it’s someone else’s work. The buttons below will open the projects or their code repositories. This time the “open project” button will take you to this personal-profile’s code and the “code button” will open my GitHub repository.
    `,
    img: projects,
    url: 'https://github.com/GregatGit/personal-profile-react',
    code: 'https://github.com/GregatGit?tab=repositories',
  },
  {
    title: `Go-Shop`,
    subtitle: `A Shopping List for You.`,
    status: projectStatus[2],
    background: `Before, when I went shopping, I would text myself a list. I finally have an app up and going for just that. The most valuable lesson I learnt was planning your app in more detail. I had all different views on paper but when I build that it was clear that it wasn't practical. I had to redesign and use React Router. After that the project got much simpler to work on.`,
    img: goShop,
    url: 'https://gregatgit.github.io/go-shop/',
    code: 'https://github.com/GregatGit/go-shop/',
  },
  {
    title: `Vue Todos`,
    subtitle: `My first Vue project`,
    status: projectStatus[2],
    background: `This is my first app using Vue.js. Vue is similar to React but requires different thinking. It also incorporates VueX as store and I also used Bootstrap 4`,
    img: todoVue,
    url: 'https://todos-vue-a46b4.firebaseapp.com/',
    code: 'https://github.com/GregatGit/todos-vue',
  },
  {
    title: 'The Iron Throne',
    status: projectStatus[3],
    subtitle: 'You choose who sits',
    blurb: 'Finally your voice is heard - who should sit on the iron throne!',
    about:
      'A simple voting app that allows you to choose who you want to sit on the iron throne.',
    code: 'https://github.com/GregatGit/how-to-vote',
    img: ironThroneImg,
    url: 'https://gregatgit.github.io/how-to-vote/',
    background: `We were all pretty upset by the Game of Thrones ending. To take a little of the sting out of it, an app that gives you a vote on who should sit on the Iron Throne. It’s built with React, Redux, Create-React-App, Redux, Semantic-UI. It was fun to build due to the subject matter. The hardest challenge is making the cards suit the style of Game of Thrones. For that reason, it is not currently finished. It gave me plenty of practice grabbing Semantic Html then converting it into JSX.`,
  },
  {
    title: `Drum Machine`,
    status: projectStatus[2],
    background: `A freeCodeCamp challenge to build a fun app that lets you plays the drums. The drums need to be fired off by mouse click or keyboard. Getting the sound working was the most challenging aspect. You also had to use an audio element from the HTML, not just a sound file that you could reference from somewhere else. The project started me using transitions. This was built with React, Create-React-App and simple css.`,
    img: drumMachine,
    url: 'https://gregatgit.github.io/drum-machine/',
    code: 'https://github.com/GregatGit/drum-machine',
  },
  {
    title: 'Todos Lab',
    status: projectStatus[2],
    subtitle: 'A simple todo list',
    blurb: 'Just get it done',
    code: 'https://github.com/GregatGit/todos-lab',
    url: 'https://gregatgit.github.io/todos-lab/',
    img: todoLab,
    background: `I build this react/redux app to practice speed and only use classless components. Once the app was up and going I added Material-Ui. I wanted the colour of the Navbar to change once the all the todos were completed or deleted. Using Material-Ui in this project has given me other ideas on how to apply it in other apps and good practice at searching through the Material-Ui docs.`,
  },
  {
    title: 'Recipe Box',
    status: projectStatus[1],
    subtitle: 'Check out the recipes!',
    blurb: 'You can make and edit simple recipes',
    code: 'https://github.com/GregatGit/recipe-box-redux',
    url: 'https://gregatgit.github.io/recipe-box-redux/',
    img: recipebox,
    background: `This is a freeCodeCamp challenge where you must use React and localStorage. This was my first time implementing Redux. The project could have been done without it, but I wanted to start using Redux in a project that was simple. I used react-sanfona for the accordion. The biggest hurdle was trying to make sure localStorage was always in sync with the app. I did find out that it was an easy fix, just by replacing the localStorage with the new state.`,
  },
  {
    title: 'Tic-Tac-Toe',
    status: projectStatus[1],
    subtile: 'The Classic Game',
    blurb: 'How bored are you?',
    about:
      'Another freeCodeCamp challenge. While it sounds simple putting it together threw up plenty of challenges.',
    code: 'https://github.com/GregatGit/ticTacToe',
    url: 'https://gregatgit.github.io/ticTacToe/',
    img: tictactoe,
    background: `The Tic-Tac-Toe is simple enough but when you build it from scratch you find that it’s not as simple as first thought. The biggest challenge was creating logic that it can implement on the fly. I used JS, Html, Css, jQuery and Bootstrap to build it. I built a separated ai file to host the logic.`,
  },
  {
    title: 'Pomodoro Clock',
    status: projectStatus[1],
    subtitle: 'A clock to work by',
    blurb: 'fsdgdg',
    about: `There is a time for work a and a time to rest - and you can choose how long.`,
    background: `One of the early freeCodeCamp challenges that felt impossible at first. The biggest hurdle was understanding how to properly use setInterval(). The other resource that proved invaluble was freeCodeCamps Gitter forums. A great place to learn how to ask questions. The Pomodoro Clock was built with javaScript, bootstrap, jQuery at codepen.io. Codepen is perfect to start projects for beginners.`,
    url: 'https://codepen.io/gregoverhere/full/VvgEQw',
    img: pomodoro,
    code: `https://codepen.io/gregoverhere/pen/VvgEQw`,
  },
  {
    title: 'Wiki Search',
    status: projectStatus[1],
    subtitle: 'Seach Wikipedia now!',
    blurb: 'A simple interface for seaching Wikipedia',
    about: 'A freeCodeCamp challenge using wikipedia and your own search term',
    code: 'https://github.com/GregatGit/wikipedia-search',
    url: 'https://gregatgit.github.io/wikipedia-search/',
    img: wikiImg,
    background: `Using Wikipedia’s API get a search term from the user and display the results. It is a simple app using js, css, jQuery and Wikipedia’s API. The most challenging aspect was getting a search string from Wikipedia. I leaned not to get bogged down in one little area. I ended up getting search string from someone else that worked just fine. It was a good introduction on how to use data passed down from a GET request.`,
  },
  {
    title: `Online Calculator`,
    status: projectStatus[1],
    background: `A project that was very challenging with what seemed very basic idea. But maths gets hard with all its little rules that are key to making it work. I build it with jQuery and bootstrap.`,
    img: calculator,
    url: 'https://codepen.io/gregoverhere/full/YyRyej',
    code: 'https://codepen.io/gregoverhere/pen/YyRyej',
  },
  {
    title: `Simon Game`,
    status: projectStatus[1],
    background: `Built with jQuery, Bootstrap and font-awesome. The fun memory game that speeds up the longer you play. Speeding up the game was difficult to implement as you don’t want all the sounds playing over the top of each other. The css was challenging as I didn’t want to do a straight copy of the original game.`,
    img: simon,
    url: 'https://codepen.io/gregoverhere/full/WxxZxy',
    code: 'https://codepen.io/gregoverhere/pen/WxxZxy',
  },
  {
    title: `Game of Life`,
    status: projectStatus[1],
    background: `The challenge was to build Conway’s Game of Life. Once you figured out the maths and structure to make it work it turns out to be a lot simpler than first thought. An important lesson taken from this was to use create-react-app instead of building my own environment with webpack. Most of the hurdles I hit were with my Webpack set up. Since switching it’s made leaning and working with react so much easier.`,
    img: gameOfLife,
    url: 'https://gregatgit.github.io/game-of-life/',
    code: 'https://github.com/GregatGit/game-of-life',
  },
  {
    title: `Quote of the Day`,
    status: projectStatus[1],
    background: `An inspirational quote app that lets you randomly shuffle through its large array of quotes. If you like a quote the ‘tweet’ button lets you tweet it out. Once you have chosen a quote it will have to work its way through the rest of the quotes as the app avoids repeats. The most challenging aspect was implementing the tweeting of the quote. It was built with jQuery, bootstrap and font-awesome.`,
    img: dailyQuote,
    url: 'https://codepen.io/gregoverhere/full/xwWevp',
    code: 'https://codepen.io/gregoverhere/pen/xwWevp',
  },
  {
    title: `Markdown Previewer`,
    status: projectStatus[1],
    background: `This is the first project I ever built in react. It wasn't too hard, but I did get stuck due to using a text field instead of a text area.`,
    img: markdown,
    url: 'https://gregatgit.github.io/gregs-markdown-app/',
    code: 'https://github.com/GregatGit/gregs-markdown-app',
  },
]

export const skillsList = [
  'React',
  'Create-React-App',
  'Redux',
  'React-Router',
  'Vue',
  'Firebase',
  'Vanilla.js',
  'Css',
  'Bootstrap',
  'Html',
  'JSX',
  'Material-UI',
  'Chrome Dev Tools',
  'Google',
  'React & Redux Dev Tools',
  'Git',
  'GitHub',
  'Mozilla MDN',
  'Stack Overflow',
  'VS Code',
]

export const welcome = [
  `I am Greg Duncan from Brisbane looking to get full-time work in
Front-End development.`,
  `I started learning to program in C then C# but
eventually found myself in the world of javascript. I have worked on
projects using Devexpress, built on the Apache Cordova platform.`,
  `I build projects using Vanilla.js, React bootstrapped with
create-react-app and Vue.js using the vue-cli`,
  `I use Google's Firebase as a back-end for databases and authorisation.`,
  `I have studied networking configuring Cisco routers and
Windows Active Directory. I completed the Front-End Development
Certificate at FreeCodeCamp and continue to study web development through
Udemy and Lynda. I have utilized bootstrap, mongoDB, jQuery, Wikipedia Api
and other tools and libraries.`,
  `Please feel free to look around, check out
my code and see how my projects have turned out.`,
]

export const about = [
  `I am an Australian who having travelled to many countries (but not enough) feel very at home in South East Qld. We have great weather all year round perfect for camping and going to the beach. I am hoping to do a lot more travel with Vietnam and Cambodia up next.`,
  `I am married and have three wonderful children. Our house is protected by the awesome Sunny, a cattle dog that loves life more than any other creature on Earth. I enjoy performing, mainly improv comedy, and play acoustic guitar. I am a big cinema fan with Harry Potter, James Bond and Star Wars at the top of my list.`,
  `I love the javaScript world. Despite a few run ins where I vowed never to type a jot of code again, I always come back and get amazed at what js can do.`,
]

export const skillsTextA = [
  `I do my coding in the VS Code editor using Prettier, Colour Brackets and
other helpful extensions as well as utilizing libraries such as lodash.`,
  `Previously I configured webpack to work with React but now I work in the
Create-React-App environment with a redux store.`,
  `I was using the
Semantic-UI library in projects but I have switched to Material-UI due to its
ease of installing and integration in create-react-app.`,
  `I now use Vue.js with the Vue CLI and utilising bootstrap 4.`,
  `These are the tools and technologies I use on a regular coding basis:`,
]

export const skillsTextB = [
  `Other technologies I use when I needed are MongoDB, Bootstrap, jQuery
and Postman to name a few. I have coded in C and C# and used other
javascript frameworks and libraries such as Angular, Knockout and
Devexpress.`,
  `I have a Diploma in Networking (completed 2014) that grounded me in the network fundamentals and taught me how to
configure Cisco routers and manage Windows Server and Window Active Directory.`,
  `I host Murder Mysteries and Trivia nights which has made me a confident public speaker.`,
]
