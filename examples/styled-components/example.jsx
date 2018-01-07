
var Example = createReactClass({
  render: function() {
    return (
      <div className="Example">
        <h1>It works</h1>
      </div>
    );
  }
});

var root = document.querySelector('.example');
ReactDOM.render(<Example />, root);
