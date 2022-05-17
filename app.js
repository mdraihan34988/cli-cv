const inquirer = require('inquirer')
const information = require("./cv_info.json");
function displayResume(){
    inquirer
  .prompt([
    {
        type: 'list',
        name: 'myResume',
        choices: [...Object.keys(information),"Exit"]

    }
  ])
  .then((answers) => {
      if(answers.myResume == "Exit") {
          console.log("Thank You Very much for Exploring me!!! ")
        return;
      }
      information[answers.myResume].forEach(element => {
          if(element.length > 0) {
            console.log(element);
          }
      });
    
    displayResumeBack();
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log(error)
    } else {
      // Something else went wrong
      console.log(error)
    }
  });
}
function displayResumeBack(){
    inquirer
  .prompt([
    {
        type: 'list',
        name: 'myResumeNext',
        choices: ["Back","Exit"]

    }
  ])
  .then((answers) => {
      if(answers.myResumeNext == "Exit") {
          console.log("Thank You Very much for Exploring me!!! ")
        return;
      } else {
        displayResume();
      }
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log(error)
    } else {
      // Something else went wrong
      console.log(error)
    }
  });
}
displayResume();