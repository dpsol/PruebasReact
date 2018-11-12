import React, { Component } from "react";
import "./styles.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.submitItem = this.submitItem.bind(this);
    this.inputChanged = this.inputChanged.bind(this);
    this.state = {
      title: "simple Todo List",
      items: ["Get milk", "Boil water", "Bake tea"]
    };
  }

  submitItem(e) {
    e.preventDefault();
    console.log("Form Submited");
    let items = this.state.items;
    items.push(this.state.ValuePlaceholder);
    this.setState({
      items
    });
  }
  inputChanged(e) {
    console.log(e.target.value);
    this.setState({
      ValuePlaceholder: e.target.value
    });
  }

  render() {
    return (
      <div className="wrap">
        <h2>{this.state.title}</h2>
        <form onSubmit={this.submitItem}>
          <input type="text" onChange={this.inputChanged} />
        </form>
        <ul>
          {this.state.items.map((item, id) => (
            <li key={id}>
              {" "}
              {item} <span> x</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
