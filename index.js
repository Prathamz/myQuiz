var readlineSync = require('readline-sync');
const chalk = require('chalk');
var score=0
function quiz(question,answer){

  var userAns=readlineSync.question(chalk.bgMagenta("-> "+question))
  if(userAns===answer){
  console.log(chalk.bgGreen("You are right!"))
  score=score+1
}
else{
  console.log(chalk.bgRed("You are wrong!"))
}
}

var userName=readlineSync.question(chalk.bgMagenta("What is your name? \n"))

console.log(chalk.bgYellow("Hi "+userName+" Welcome to my quiz app"))

var questions=[{
  "ques":'Do you think my age is more than 25? yes/no? \n',
  "ans":'no'
},
{
  "ques":'Is my hometown Guledgudda? yes/no? \n',
  "ans":'yes'
},
{
  "ques":'Do i like sweets more than spice? yes/no? \n',
  "ans":'no'
},
{
  "ques":'Is my fav breakfast Idli? yes/no? \n',
  "ans":'yes'
},
{
  "ques":'Do I like horror movies more than action? yes/no? \n',
  "ans":'yes'
},
{
  "ques":'Do i like mcdonalds more than KFC ? yes/no? \n',
  "ans":'no'
},
{
  "ques":'I am more devotee ? yes/no? \n',
  "ans":'no'
},
{
  "ques":'I am CS student? yes/no? \n',
  "ans":'no'
},
{
  "ques":'Is graduated from Banglore college? yes/no? \n',
  "ans":'yes'
},
{
  "ques":'I like kitkat more than dairymilk? yes/no? \n',
  "ans":'yes'
}
]

for(i=0;i<questions.length;i++){
  if(i===5){
    if(score>=4){
     console.log(chalk.bgGreenBright(".........\nCongrats you are qualified for level 2\n........."))
       console.log("question Number : "+(i+1))
        quiz(questions[i].ques,questions[i].ans)
    }
    else{
        console.log(chalk.bgRedBright("----------\n You did not clear 1st level"))
        break
    }
  }
  else{
  console.log("question Number : "+(i+1))
  quiz(questions[i].ques,questions[i].ans)
  }
}
console.log(chalk.bgYellow("----------\n Your score= "+score+"/"+(questions.length)))

