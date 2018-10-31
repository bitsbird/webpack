import template from "./index.html";
import styles from "./style.css";
import scss from "./test.scss";
import ms from "marionette";
import backbone from "backbone";

var a = args => {
  const { a, b } = args;
  console.log("Hello from the future!", a, b);
};

a({ a: 1, b: 2 });
