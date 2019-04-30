# react-zeolearn-april-30-may-3-2019
React JS training material for training from [Zeolearn](https://www.zeolearn.com/)

## Exercises
Please refer the [exercises document for exercises given during the training sessions](./exercises.md)

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

## References
- [Official documentation for React](https://reactjs.org/)
- [React.js cheatsheet at devhints.io](https://devhints.io/react)
- [Error Boundaries example](https://codepen.io/gaearon/pen/wqvxGa?editors=0010)
- [Promises - good article explaining its workings](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261)
- [Axios - Promise based HTTP library](https://github.com/axios/axios)
- [Dan Abramov's article on Presentational + COntainer components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

### Some options for form validations in React
- [Article by Michael Ries](https://medium.com/code-monkey/client-side-form-validation-in-react-40e367de47ba)
- [react-form-validator-core](https://www.npmjs.com/package/react-form-validator-core) which is inspired by [formsy-react](https://www.npmjs.com/package/formsy-react)
- [ Form validations for React-redux based projects](https://davidkpiano.github.io/react-redux-form/docs.html)

## Todos
1. FOrms in React - good way to handle
2. Example of mock function usage