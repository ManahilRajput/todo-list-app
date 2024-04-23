#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todolist = [];
let condition = true;
console.log(chalk.bgGray.bold("WELCOME TO MY TODO LIST APP!"));
let main = async () => {
    while (condition) {
        let a = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: chalk.magenta("select any option you want to do:"),
                choices: ["add item", "delete item", "check todo list", "Exit"]
            }
        ]);
        if (a.choice === "add item") {
            await additem();
        }
        else if (a.choice === "delete item") {
            await deleteitem();
        }
        else if (a.choice === "check todo list") {
            await checktodolist();
        }
        else if (a.choice === "Exit") {
            condition = false;
            console.log(chalk.blue("THANK YOU FOR VISITING ON MY TODO LIST APP!!"));
        }
    }
};
let additem = async () => {
    let b = await inquirer.prompt([{
            type: "input",
            name: "add",
            message: "add an item in your todo list :",
        }]);
    todolist.push(b.add);
    console.log(chalk.cyan(`${b.add} is added successfully in you todo list!.`));
};
let deleteitem = async () => {
    let c = await inquirer.prompt([{
            type: "number",
            name: "delete",
            message: "delete an item from your todo list: ",
        }]);
    let dltitem = todolist.splice(c.delete - 1, 1);
    console.log(chalk.green.italic(`${dltitem} has been deleted successfully from your todo list! [you can now view the to_do list to check deleted items ]`));
};
let checktodolist = async () => {
    console.log(chalk.bgYellow(`YOUR TODO LIST IS : ${todolist}`));
};
main();
