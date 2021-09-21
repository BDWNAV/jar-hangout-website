import React from "react";
import { FormLabel, Input, Button, ButtonGroup } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { getUser, kickUser } from "../Utils/api";
import { staffIds } from "../Utils/utils";

export default class StaffDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      modUserId: ""
    }
  }

  componentDidMount() {
    getUser().then(({ data }) => {
      this.setState({ modUserId: data.discordId });
      this.setState({ userId: data.discordId });
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    alert("Member was kicked!");

    kickUser("850166096950067210", this.state.modUserId).then(({data}) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });
  }

  formChange = (event) => {
    this.setState({ modUserId: event.target.value });
  }

  render() {
    return (
      <div>{
        staffIds.find((staffIds) => staffIds === this.state.userId) ?
          <div style={{ textAlign: "center" }}>
            <Navbar />
            <h1 style={{ fontSize: "30px" }}><b>Admin panel</b></h1>
            <form style={{ marginLeft: "20px" }} onSubmit={this.handleSubmit}>
              <div>
                <FormLabel>Kick user</FormLabel>
                <Input style={{ width: "400px", float: "left" }} onChange={this.formChange} focusBorderColor="blackAlpha.900" placeholder="User Id" />
                <Button type="submit" style={{ float: "left", marginLeft: "10px" }} colorScheme="blackAlpha" variant="solid">Submit</Button>
              </div>
            </form>
          </div> :
          <div>
          </div>
      }</div>
    )
  }
}