const inquirer = require('inquirer');
var fs = require('fs');



inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please insert your name'
        },
        {
            type: 'input',
            name: 'location',
            message: 'Please inset your location'
        },
        {
            type: 'input',
            name: 'bio',
            message: 'Please insert a bio'
        },
        {
            type: 'input',
            name: 'linkedIn',
            message: 'Please link your linkedIn URL'
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'Please link your GitHub URL'
        }
    ])
    .then(response => {
        const { name, location, bio, linkedIn, gitHub } = response
        const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <title> test </title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="styles.css">
<body>
    <header id="header">
        <h1>Portfolio</h1>
    </header>
    <div id="content">
        <h2 id="name">${name}</h2>
        <p id="bio">${bio}</p>
        <p id="location">${location}</p>
        <p id="linkedin">LinkedIn: ${linkedIn}</p>
        <p id="github">GitHub: ${gitHub}</p>
    </div>

    <script src="index.js"></script>
</body>
</html>
`;
        fs.writeFile('index.html', html, (err) => (err) ? console.error('We got an issue') : console.log('No errors') )
    })








    /*
    function newInfo (response) {
      const contentDiv = document.getElementById('content');
      const name = document.createElement('p').setAttribute('class', 'name')
      name.textContent = response.name
      contentDiv.appendChild(name);
    }
    */

