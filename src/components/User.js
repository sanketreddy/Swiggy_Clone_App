import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [info, setInfo] = useState({
    userInfo: {
      name: "Dummy",
      location: "Default",
      avatar_url: "",
    },
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const userData = await fetch("https://api.github.com/users/sanketreddy");
    const mainData = await userData.json();
    // console.log(mainData);
    setInfo({ userInfo: mainData });
  };

  return (
    <div className="flex flex-col items-center">
      {/* <h1>Count: {count}</h1> */}
      <img src={info?.userInfo?.avatar_url} />
      <h2>Name: {info?.userInfo?.name}</h2>
      <h3>Location: {info?.userInfo?.location}</h3>
      <h4>Contact: sanketreddy</h4>
    </div>
  );
};

export default User;
