/**
 * Using props and state, we can put together a small Todo application.
 * This example uses state to track the current list of items as well as the text that the user has entered.
 * Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.
 */

var TodoList = React.createClass({
  render: function () {
    var createItem = function (item) {
      return <li key={item.id}>{item.text}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});

var TodoApp = React.createClass({
  getInitialState: function () {
    return {items: [], text: ''};
  },
  onChange: function (e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function (e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function () {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items}/>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text}/>
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
});

ReactDOM.render(<TodoApp />, document.getElementById('example'));
