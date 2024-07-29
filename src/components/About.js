import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    // console.log("constructor of about is called");
    super(props);
  }

  componentDidMount() {
    // console.log("componentDidMount of about is called");
  }

  render() {
    // console.log("render of about is called");

    return (
      <div className="flex flex-col items-center m-20">
        <h1>We try to server the best at an efficient price</h1>
        <div>
          Logged In user:
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>

        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="text-xl font-bold">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
        <UserClass name="First Component(class)" location="Chandrapur(class)" />

        {/* <User name="First Component(function)" /> */}
      </div>
    );
  }
}

export default About;
