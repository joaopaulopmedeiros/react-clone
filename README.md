## React Clone

API's basic usage
```javascript
const element = <h1 title="title-ipsum">Content</h1>
const constainer = document.querySelector("#root")
ReactDOM.render(element, container)
```
This
```javascript
const element = (
    <div id="ipsum">
        <div>Content</div>
    </div>
)
```
Is converted to:

```javascript
const element = React.createElement(
	"div",
	{title: "ipsum"},
	React.createElement("div", null, "Content"),
)
```

