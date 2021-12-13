import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: [],
      searchField: "",
    };

    // this.handleChange = this.handleChange.bind(this); // this is for to bind the method with this keyword without an arrow fn
    this.handleTwo = this.handleOne.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ monster: data }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value }, () => {
      // console.log("after...", this.state.searchField); // to get the callback
    });
  };

  handleOne() {
    console.log("am one");
  }
  handleThree = () => {
    console.log("am three");
  };

  render() {
    const { searchField, monster } = this.state;
    const filteredMonsters = monster.filter((item) => {
      return item.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        {/* <input
          type="search"
          placeholder="search monster"
          onChange={(e) => {
            this.setState({ searchField: e.target.value }, () => {
              console.log("after...", this.state.searchField); // to get the callback
            });
          }}
        /> */}
        <h1>MONTERS WORLD</h1>
        <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange}
        />
        <CardList monster={filteredMonsters}></CardList>

        <div>
          <button onClick={this.handleOne()}>One</button>
          <button onClick={this.handleOne}>OneOne</button>
          <button onClick={this.handleTwo}>Two</button>
          <button onClick={this.handleThree}>Three</button>
        </div>
      </div>
    );
  }
}

export default App;
