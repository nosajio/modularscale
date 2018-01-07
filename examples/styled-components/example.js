
var Example = createReactClass({
  render: function () {
    return React.createElement(
      "div",
      { className: "Example" },
      React.createElement(
        "h1",
        null,
        "It works"
      )
    );
  }
});

var root = document.querySelector('.example');
ReactDOM.render(React.createElement(Example, null), root);
