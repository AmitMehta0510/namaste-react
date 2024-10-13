import React from "react";
import { LOGO_URL } from "../utils/constants";

class TeamMember extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Your Name",
        location: "your location",
        avatar_url: "default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/AmitMehta0510");
    const json = await data.json();
    this.setState({ userInfo: json });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("component Did Update");
  }
  componentWillUnmount() {
    console.log("component Will Unmount");
  }

  render() {
    const { name, login, avatar_url } = this.state.userInfo;

    return (
      <div className="team-member-card">
        <div className="card-content">
          <img src={avatar_url}></img>
          <h2 className="name">{name}</h2>
          <h2 className="name">{login}</h2>
          {/* <h3 className="location">{location}</h3>
          <h4 className="role">{role}</h4>
          <h4 className="contact">{contact}</h4> */}
        </div>
      </div>
    );
  }
}

export default TeamMember;
