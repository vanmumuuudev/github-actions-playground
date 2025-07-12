import actions_core from "@actions/core";

const DAY_NAMES = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const date = new Date();
const day = DAY_NAMES[date.getDay()];

actions_core.setOutput("day", day);
