#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"
import { differenceInSeconds} from "date-fns"


// welcome message
console.log(chalk.bold.bgBlue.magentaBright("\n\t>>>>>> Welcome To My Project <<<<<<<\t\n"))
console.log(chalk.bold.bgCyanBright.magenta("\n\t\t\t>>>>>> COUNTDOWN TIMER <<<<<<<\t\n"))
console.log("~".repeat(50))

//make a timer
const responce = await inquirer.prompt (
    [
        {
            name: "UserInput",
            type : "number",
            message: chalk.rgb(155, 165, 52)("\n\t\t\tPlease Enter the amount of Second:"),
            validate: (input) => {
                if(isNaN(input)){
                    return "Please enter valid number!!"
                }else if (input > 60){
                    return "Seconds must be in number!!"
                }else {
                    return true;
                 }
            }
        }
    ]
)
// make a function

let input = responce.UserInput
function startTimer (val:number){
    
let iniTime = new Date().setSeconds(new Date().getSeconds() + val);
let intervalTime = new Date(iniTime);
    setInterval(() => {
        let currentTime = new Date()
        let timeDiff = differenceInSeconds(intervalTime, currentTime)
        if (timeDiff <= 0){
            console.log(chalk.bold.red("\n\t\t\tTimer has expired!!\n"))
            console.log(chalk.magenta("\n\t\t\t---- Thank You For CountDown Timer ----\n"))
            console.log("~".repeat(50)) 
            process.exit()

        }
        let hours = Math.floor(timeDiff / 3600)
        let min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        let sec = Math.floor(timeDiff % 60);
        console.log(chalk.bold.rgb(165, 255, 0)(`\n\t\t\t\t${hours.toString().padStart(2,"0")}:${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`))
    }, 1000);
    
    
}
startTimer(input)
