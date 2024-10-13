import { LOGO_URL } from "../utils/constants";
import TeamMember from "./TeamMember";
import React from "react";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }

  componentDidMount() {
    // console.log("parent componentDidMount");  
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <TeamMember
          name="Amit Mehta"
          image={LOGO_URL}
          location="Kota, Rajasthan"
          role="Web Developer"
          contact="amit@gmail.com"
        />
      </div>
    );
  }
}

export default AboutUs;
