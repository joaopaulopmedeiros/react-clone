import { TEXT_ELEMENT } from "../constants/index";

export default function render(element, container) {
  const dom =
    element.type == TEXT_ELEMENT
      ? document.createTextNode("")
      : document.createElement(element.type);

  element.props.children.forEach((child) => render(child, dom));

  container.appendChild(dom);
}
