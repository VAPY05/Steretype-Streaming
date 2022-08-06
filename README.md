<p align="center">
<img src="https://github.com/VAPY05/Steretype-Streaming/blob/main/assets/logo-.png">
</p>

# Stereotype Streaming

Stereotype Streaming is a project that I am creating with passion as Project Defense for [ReactJS](https://softuni.bg/trainings/3727/reactjs-june-2022) course at [SoftUni](https://softuni.bg/). The idea was born in early 2020, but the work started at the beginning of the course. The project represents the skills that I acquired in the module [JS-Web](https://softuni.bg/modules/122/js-web/1307) such as routing with React Router V6, creating components, creating and manipulating controlled forms, keeping state and using hooks. I wrote the entire Back-End server with ExpressJS and MongoDB and of course the Front-End with ReactJS and other libraries.


## Author

- [@VAPY05](https://github.com/VAPY05)


## Architecture

Front-End:
  At the heart of the application is app.js, in which the components and React Router V6 are located. We have a folder with all components called components in which css files are also located. We have custom hooks located in the hooks folder.
The Contexts folder includes a context for authentication that is passed through app.js to all components. And of course we have services that facilitate sending requests to the server.

<img src="https://github.com/VAPY05/Steretype-Streaming/blob/main/assets/front%20end.png">

Back-End:
  The architecture of the server is based on Models and Controllers. Models: Handles data logic. Controller: It controls the data flow into a model object and updates the view whenever data changes. Services: It handles data fetching  ,utils for helping with the error handling and middlewares for security purposes.
  
  <img src="https://github.com/VAPY05/Steretype-Streaming/blob/main/assets/back%20end.png">

## Tech Stack

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-flat&logo=html5&logoColor=white)&nbsp;
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-flat&logo=css3&logoColor=white)&nbsp;
![Font Awesome](https://img.shields.io/badge/Font%20Awesome-528DD7?style=for-the-flat&logo=fontawesome&logoColor=white)&nbsp;
![JavaScript](https://img.shields.io/badge/Javascript-a57f1c.svg?&style=flat&logo=javascript&logoColor=%23F7DF1E)&nbsp;
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-flat&logo=react&logoColor=%2361DAFB)&nbsp;
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-flat&logo=express&logoColor=%2361DAFB)&nbsp;
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-flat&logo=react-router&logoColor=white)&nbsp;
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-flat&logo=mongodb&logoColor=white)&nbsp;
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-flat&logo=visual-studio-code&logoColor=white)
## Installation

Install stereotype-streaming with npm

```bash
  note that you should have nodejs already installed on your pc.
```

client:
```bash
  cd .\client\
  npm i
  npm start
```
server: 
```bash
  cd .\server\
  npm i
  npm start
```
    
## License

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

