#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from "chalk";
// import Choices from 'inquirer/lib/objects/choices.js';

let todoList: string [] = [];
let conditions = true;
console.log(chalk.bold.rgb(204,204,204)('\n \t\t <<<====================>>>'));
console.log(chalk.bold.rgb(203,203,203)('\n <<<=>>> "Welcome to code with Sehar - Todo List Application" <<<=>>>'));
console.log(chalk.bold.rgb(201,201,201)('\n \t\t <<<====================>>>'));

let main = async() => {
    while(conditions){
        let option = await inquirer.prompt([
            {
                name: "Choice",
                type: "list",
                message: "Select an option you want to do",
                choices: ["Add Task", "Update Task", "Delete Task", "View to-do List", "Exit"],
            }
        ]);
        if (option.Choice === "Add Task") {
            await addTask();
        }
        else if (option.Choice ==="Update Task") {
            await updateTask();
        }
        else if (option.Choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.Choice === "View to-do List") {
            await viewTask();
        }
        else if (option.Choice === "Exit") {
             conditions = false;
        }
    }
}
let addTask = async() => {
    let newTask = await inquirer.prompt([
        {
            name : "task",
            type : "input",
            message : "Enter new task you want to add in Todo List",
        }
    ])
    todoList.push(newTask.task);
    console.log(`\n \t\t ${newTask.task} has been added in Todo List`);
}

let deleteTask = async () => {
    await viewTask ();
    let taskIndex = await inquirer.prompt([
    {
        name: "index",
        type: "number",
        message: "Enter the index number of the task you want to delete",
    }
    ]);
    let deletedTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n \t\t ${deletedTask} has been deleted from Todo List`);
}

let viewTask = () => {
    console.log("\nYour todo list:\n");
    todoList.forEach((task , index) => {
        console.log(`${index + 1} : ${task}`)
    });
    console.log("\n")
}

let updateTask = async () => {
    await viewTask ();
    let update_task_index = await inquirer.prompt([
{
    name: "index",
    type: "number",
    message: "Enter the index number of the task you want to update",
},
{
    name: "new_task",
    type: "input",
    message: "Add new task",
}
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task;
    console.log(`Task at index no.${update_task_index.index - 1} has been updated successfully `)
}

main();