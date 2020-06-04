import "assets/css/vendor/bootstrap.min.css";
import { defaultColor, themeColorStorageKey } from "constants/defaultValues";

let color = localStorage.getItem(themeColorStorageKey)
  ? localStorage.getItem(themeColorStorageKey)
  : defaultColor;

localStorage.setItem(themeColorStorageKey, color);

let render = () => {
  import("./assets/css/theme/" + color + ".scss").then((x) => {
    require("./App");
  });
};
render();
