import "./App.css";
import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: [],
      searchField: "",
      showChild: true,
      text: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ person: users }));
  }

  handelchange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { person, searchField } = this.state;
    const filterPerson = person.filter((user) =>
      user.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Roledex</h1>
        <SearchBox
          placeholder="search here"
          handelChange={this.handelchange}
        ></SearchBox>
        <CardList person={filterPerson} />
      </div>
    );
  }
}

export default App;
