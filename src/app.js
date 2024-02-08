/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let excuse_who = "";
  let excuse_action = "";
  let excuse_what = "";
  let excuse_when = "";

  let random_who = Math.ceil(Math.random() * 4);
  let random_action = Math.ceil(Math.random() * 4);
  let random_what = Math.ceil(Math.random() * 3);
  let random_when = Math.ceil(Math.random() * 5);

  switch (random_who) {
    case 1:
      excuse_who = who[0];
      break;
    case 2:
      excuse_who = who[1];
      break;
    case 3:
      excuse_who = who[2];
      break;
    case 4:
      excuse_who = who[3];
      break;
    default:
      console.log("default");
  }
  switch (random_action) {
    case 1:
      excuse_action = action[0];
      break;
    case 2:
      excuse_action = action[1];
      break;
    case 3:
      excuse_action = action[2];
      break;
    case 4:
      excuse_action = action[3];
      break;
    default:
      console.log("default");
  }
  switch (random_what) {
    case 1:
      excuse_what = what[0];
      break;
    case 2:
      excuse_what = what[1];
      break;
    case 3:
      excuse_what = what[2];
      break;
    default:
      console.log("default");
  }
  switch (random_when) {
    case 1:
      excuse_when = when[0];
      break;
    case 2:
      excuse_when = when[1];
      break;
    case 3:
      excuse_when = when[2];
      break;
    case 4:
      excuse_when = when[3];
      break;
    case 5:
      excuse_when = when[4];
      break;
    default:
      console.log("default");
  }
  console.log(`${excuse_who} ${excuse_action} ${excuse_what} ${excuse_when}`);
};
