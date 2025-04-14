// import chalk from "chalk";
const chalk = require('chalk');
console.log(chalk.green('성공메세지'));
console.log(chalk.red('실패메세지'));
console.log(chalk.green.bold('에러 볼드메세지'));
console.log(chalk.red.bold('에러 볼드메세지'));
console.log(chalk.bgBlue.white('정보메세지 파란 바탕에 하얀글씨'));
console.log(chalk.yellow.underline('경고 메세지 노란색, 밑줄'));