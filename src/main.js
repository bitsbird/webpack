import template from "./index.html";
import styles from "./style.css";
import scss from "./test.scss";

var a = args => {
  const { a, b } = args;
  console.log("Hello from the future!", a, b);
};

a({ a: 1, b: 2 });
