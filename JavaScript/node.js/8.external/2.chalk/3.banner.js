import figlet from "figlet";
//const chalk = require('chalk');/
import chalk from "chalk";

figlet('Hello World!', (err, data) => {
    if (err) {
        console.err('에러' , err);
        return;
    }
    console.log(chalk.cyan(data));
});