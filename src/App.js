import React from "react";
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inventory: [
        { name: "Derek", price: 0, url: "yo.com" },
        { name: "Tavas", price: 2, url: "sup.org" }
      ]
    };
  }

  // componentDidMount() {

  //  }

  getClothes = () => {
    axios
      .get("/api/inventory")
      .then(res => {
        this.setState({
          inventory: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard
          inventory={this.state.inventory}
          getClothes={this.state.getClothes}
        />
        <Form />
      </div>
    );
  }
}

export default App;
