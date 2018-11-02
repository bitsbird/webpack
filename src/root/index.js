import mn from "marionette";
import template from "./template.hbs";
import styles from "./styles.scss";
import logo from "../img/test.jpg";

export default mn.View.extend({
  className: styles.root,
  template,
  templateContext() {
    return {
      logo
    };
  },
  regions: {
    main: ".main"
  }
});
