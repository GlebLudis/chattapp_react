import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

function Homepage() {
  return (
    <div className="homepage">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}
export default Homepage;
