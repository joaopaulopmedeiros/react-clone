## React Clone

API's basic usage

```javascript
const element = ReactClone.createElement(
  "div",
  { title: "ipsum" },
  ReactClone.createElement("div", null, "Content")
);
const constainer = document.querySelector("#root")
ReactClone.render(element, container)
```