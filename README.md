# react-zeolearn-april-30-may-3-2019
React JS training material for training from [Zeolearn](https://www.zeolearn.com/)

## Project
Please refer the [project document for the problem statement for a project using React and Redux](./video-catalog-app-description.pdf)

## Video recordings (May 2, 3)
- [May 2 - building the app + miscellaneous topics like Error boundary, lifecycle methods, Immutable.js, defaultProps](https://s3.amazonaws.com/corporate-trainings/fmi/react-april-20-may-3-2019/may-2-2019.mp4)
- [May 3 - Morning session (Redux fundamentals)](https://s3.amazonaws.com/corporate-trainings/fmi/react-april-20-may-3-2019/may-3-2019-part-1.mp4)
- [May 3 - Afternoon session](https://s3.amazonaws.com/corporate-trainings/fmi/react-april-20-may-3-2019/may-3-2019-part-1.mp4)

## About React
React is a web front-end library used to create user interfaces, i.e. a view in MVC architecture. Originally created at Facebook, it is now a free and open-source framework maintained by Facebook, Instagram and some other individual developers and corporations. It is not a full- fledged Single Page Application (SPA) framework unlike Angular, and hence other libraries like React Router and Redux are required to build an SPA. Additionally, a module bundler like Webpack is usually used in a React application.  

Redux is a state management library. It can be used with any framework or standalone but is popularly used in a React app. It manages the state of an application and helps then behave consistently across different platforms.

## Pre-requisites
- Working knowledge of HTML, CSS
- Good knowledge of JavaScript including object-oriented JS features like object prototypes etc. ES2015 (ES6) knowledge is a plus but not necessary.
- Bootstrap knowledge is a plus, but not necessary  

## List of software to be installed before training starts
* Git CLI and a GitHub account
    - [Git CLI download](https://git-scm.com/downloads)
    - [GitHub link for account creation](https://github.com/join?source=header-home)
    The account username needs to be shared with the trainer - this is so that permissions can be given to access the training material.

* Node.js (which also installs npm tool)  
    - [Node.js](https://nodejs.org/en/download/)
    The proxy server details may need to be configured to enable npm access the npm registry (this registry is required to download Node modules required to build Node applications - React is available as node modules and hence the requirement).
    To configure the proxy for npm these articles will be helpful.
    - [https://jjasonclark.com/how-to-setup-node-behind-web-proxy/](https://jjasonclark.com/how-to-setup-node-behind-web-proxy/)
    - [https://forum.freecodecamp.org/t/npm-behind-a-proxy-server/19386](https://forum.freecodecamp.org/t/npm-behind-a-proxy-server/19386)

* VisualStudio Code (VSCode)  
    - [Download VSCode](https://code.visualstudio.com/download)
    A modern IDE like VSCode is highly recommended. If you prefer using one of Atom, WebStorm, SublimeText, Brackets, Eclipse, Netbeans or Visual Studio – that is fine.
    It is available for Windows, Mac OSX and popular Linux distributions.

* Latest version of one of Chrome/Firefox (preferably Chrome). Internet Explorer is not acceptable.  
    - [Chrome](https://www.google.com/chrome/browser/desktop/index.html)
    - [Firefox](https://www.mozilla.org/en-US/firefox/new/)

## How to run the server for products (Ajax example)
You need to run the server placed within server/ folder for the examples on Ajax.

- To run the server first go inside the server/ folder
```
$ cd server
```

- Next install all required node modules (server's dependencies). The dependencies for Node projects are given in package.json.
```
$ npm install
```

- To run the server
```
$ npm run json:server
```

- The server starts on the following URL
```
$ http://localhost:4201/
```

- You can access the data via various endpoints. For example, to retrieve the comments for the post with id = 1, we can hit the endpoint...
```
http://localhost:4201/posts/1/comments
```

## Table of contents
Please refer the [Training Outline](./react-training-outline.pdf)  

## Links to CDN files for React library and Babel
- https://cdnjs.cloudflare.com/ajax/libs/react/16.8.6/umd/react.development.js
- https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.6/umd/react-dom.development.js
- https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js

## Further exploration

### A learning roadmap
- [This is a very extensive roadmap for further exploration. Too vast, but comprehensive - can be quite intimidating](https://github.com/adam-golab/react-developer-roadmap)

### Courses on React
- [List of courses on React](https://reactjs.org/community/courses.html)

### Libraries
- [React](https://reactjs.org/)
- [React - Community resources and Support - includes references to tools](https://reactjs.org/community/support.html)
- [Create React app](https://facebook.github.io/create-react-app/)
- [React router](https://reacttraining.com/react-router/web/guides/quick-start)
- [Redux](https://redux.js.org/)
- [React Redux](http://react-redux.js.org)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk) 
- [Redux Saga Introduction](https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Quick introduction to Mobx](https://mobx.js.org/getting-started.html)
- [Mobx](https://mobx.js.org/)
- [Redux vs Mobx](https://www.youtube.com/watch?v=76FRrbY18Bs)
- [Immutable JS](https://immutable-js.github.io/immutable-js/)
- [Webpack - Step-by-step guide](https://webpack.js.org/guides)
- [Resources on Webpack](https://github.com/webpack-contrib/awesome-webpack)
- [Jest](https://jestjs.io/en/)
- [Enzyme](https://airbnb.io/enzyme/)
- [List of CSS in JS libraries for React](https://github.com/FormidableLabs/radium/tree/905227c122b1775775cf8d82c508cce4179cff08/docs/comparison)

## JavaScript
- [Promises - good article explaining its workings](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261)

### React Router
- [A practical introduction](https://auth0.com/blog/react-router-4-practical-tutorial/)

### Redux
- [Dan Abramov's article on Presentational + Container components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- [Dan Abramov's free course on Redux (on Egghead) - Part 1](https://egghead.io/courses/getting-started-with-redux)
- [Dan Abramov's free course on Redux (on Egghead) - Part 2](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)

### TypeScript with React
- [React with TypeScript](https://github.com/sw-yx/react-typescript-cheatsheet)
- [React with TypeScript](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet)
- [Microsoft's starter kit for using TypeScript with react apps](https://github.com/Microsoft/TypeScript-React-Starter)

### Some options for form validations in React
- [Article by Michael Ries](https://medium.com/code-monkey/client-side-form-validation-in-react-40e367de47ba)
- [react-form-validator-core](https://www.npmjs.com/package/react-form-validator-core) which is inspired by [formsy-react](https://www.npmjs.com/package/formsy-react)
- [Form validations for React-redux based projects](https://davidkpiano.github.io/react-redux-form/docs.html)
