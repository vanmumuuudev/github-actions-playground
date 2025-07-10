import actions_core from "@actions/core";
import figlet from "figlet";

const message = actions_core.getInput("message");

console.log(figlet.textSync(message));
