/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

{
  //write your code here
  window.onload = function excuseGenerator() {
    let whoArray = ["My", "His", "Wandas", "Freddies"];
    let whatArray = ["cat", "snake", "ferret", "alligator"];
    let actionArray = ["pooped on", "smelled", "hid", "stole"];
    let assignmentArray = ["my project", "my car", "my bike", "my breakfast"];

    let who = whoArray[Math.floor(Math.random() * whoArray.length)];
    let what = whatArray[Math.floor(Math.random() * whatArray.length)];
    let action = actionArray[Math.floor(Math.random() * actionArray.length)];
    let assignment =
      assignmentArray[Math.floor(Math.random() * assignmentArray.length)];

    document.getElementById("excuse").onload = function() {
      excuseGenerator();
    };

    document.getElementById("excuse").innerHTML =
      who + " " + what + " " + action + " " + assignment;
  };
  console.log("am i here    ");
}
