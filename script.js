function Person(props) {
  return (
    React.createElement("div", { className: "person" },
    React.createElement("h1", null, props.name),
    React.createElement("p", null, "Age: ", props.age)));


}

var app =
React.createElement("div", null,
React.createElement(Person, { name: "Swan", age: "20" }),
React.createElement(Person, { name: "Zu", age: "20" }));


ReactDOM.render(app, document.querySelector('#app'));