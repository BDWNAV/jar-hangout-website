import React from "react";
import Header from "../components/Header";
import { getUser } from "../Utils/api";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiCall: null
    }
  }

  componentDidMount() {
    getUser().then(({data}) => {
      if(data) {
        console.log(data);
        this.setState({ apiCall: data.username });
      } else {
        this.setState({ apiCall: null });
      }
    }).catch((err) => {
      console.log(err);
    })
  }
  
  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <p>Wondering why and what JAR hangout is? Well JAR hangout is a awesome place to vibe with a bunch of cool and chill people! Still not convinced? Well we are currently working on custom bot! The bot will have currency but for a bit, you guys will have to use dank memer. We will be acceping staff applications shortly!</p>
          <button className="discord-login"><a href="https://discord.com/api/oauth2/authorize?client_id=868462835313827890&redirect_uri=http%3A%2F%2F91.109.116.52%3A4055%2Fapi%2Fauth%2Fdiscord%2Fredirect&response_type=code&scope=identify">Verify</a></button>
        </div>
      </div>
    );
  }
}