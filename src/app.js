import mn from "marionette";
import RootView from "./root";

const App = mn.Application.extend({
  region: "#root",

  onStart() {
    this.showView(new RootView());
  }
});

const myApp = new App();
myApp.start();
