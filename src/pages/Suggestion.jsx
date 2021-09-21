import React from "react";
import { FormLabel, Input, Textarea, Button, ButtonGroup } from "@chakra-ui/react";
import { getUser, makeSuggestion } from "../Utils/api";
import Navbar from "../components/Navbar";

export default class Suggestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestionTitle: "",
      suggestion: ""
    }
  }

  submitHandler = (event) => {
    event.preventDefault();

    alert("Suggestion sent!");

    getUser().then(({data}) => {
      console.log(data);
      makeSuggestion("850166096950067210", data.discordId, this.state.suggestion, this.state.suggestionTitle).then(({ data }) => {
        console.log(data);
      }).catch((err) => {
        console.log(err);
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;

    this.setState({ [nam]: val });
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1 style={{ textAlign: "center" }}><b>Make a suggestion!</b></h1>
        <form style={{ marginLeft: "30px" }} onSubmit={this.submitHandler}>
          <FormLabel>Suggestion Title</FormLabel>
          <Input name="suggestionTitle" style={{ width: "400px", float: "left" }} onChange={this.changeHandler} placeholder="Suggestion title" />
          <br />
          <FormLabel style={{ marginTop: "20px" }}>Suggestion</FormLabel>
          <Textarea name="suggestion" style={{ width: "550px", float: "left", paddingLeft: "10px", height: "100px", paddingTop: "10px" }} onChange={this.changeHandler} placeholder="Enter suggestion" />
          <br />
          <Button type="submit" style={{ float: "left", marginLeft: "10px" }} colorScheme="blackAlpha" variant="solid">Submit</Button>
        </form>
      </div>
    )
  }
}