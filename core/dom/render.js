export default function render(element, container) {
  const dom = document.createElement(element.type);
  container.appendChild(dom);
}
