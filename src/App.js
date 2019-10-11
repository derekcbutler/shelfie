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
      inventory: []
    };
  }

  componentDidMount() {
    this.getClothes();
  }

  getClothes = () => {
    console.log(this.state.getClothes)
    axios
      .get("/api/products")
      .then(res => {
        this.setState({
          inventory: res.data
        });
      })
      .catch(err => console.log(err));
  };

  addClothes = () => {
    const newClothes = {
      name: this.state.inventory
    };

    axios
      .post("/api/products", newClothes)
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
          addClothes={this.state.addClothes}
        />
        <Form
          inventory={this.state.inventory}
          addClothes={this.state.addClothes}
        />
      </div>
    );
  }
}

export default App;
