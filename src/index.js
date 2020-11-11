import { ReactClone } from "../core/index";

const element = ReactClone.createElement(
  "div",
  { title: "ipsum" },
  ReactClone.createElement("div", null, "Content")
);
