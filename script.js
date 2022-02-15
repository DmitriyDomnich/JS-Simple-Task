import { tasks } from "./tasks.js";




printTasks(tasks);


function printTasks(tasks) {

  tasks.forEach((task, taskIndex) => {

    const {functionName, cases} = task;

    console.log(`
      Task ${taskIndex + 1}: ${functionName}
      ${cases.reduce((str, taskCase, caseIndex) => {
        return str + `
          case ${caseIndex + 1}: ${taskCase.input} -> ${taskCase.output}
        `;
      }, '')}
    `);
  });
}