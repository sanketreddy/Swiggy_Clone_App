import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log("constructor of userclass is called");

    this.state = {
      userData: {
        name: "Dummy",
        location: "Default",
        avatarUrl: "http://dummy",
      },
    };
  }

  async componentDidMount() {
    // console.log("Inside the component did mount method of userclass component");
    const data = await fetch("https://api.github.com/users/sanketreddy");
    const json = await data.json();
    // console.log(json);
    this.setState({
      userData: json,
    });
  }

  componentDidUpdate() {
    // console.log("Inside the component did update of userclass component");
  }

  componentWillUnmount() {
    // console.log("Called when the component will be unmounted");
  }

  render() {
    // console.log("Inside the render method of userclass component");
    const { name, location, avatar_url } = this.state.userData;

    return (
      <div className="p-10 border-solid border-2 border-black">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @sanket83</h4>
      </div>
    );
  }
}

export default UserClass;
