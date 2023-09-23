let React = require("react");
let ReactDom = require("react-dom");

ReactDom.render(<h1>Hello React</h1>, document.getElementById("root"));

// Creating new element h1 and embedding it to div in index.html
let h1 = document.createElement("h1");
h1.innerHTML = "Hello React";
document.getElementById("root").appendChild(h1);
