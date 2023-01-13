import React from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Chatsbar from "./Chatsbar";

function Sidebar() {
  return (
    <div className="sidebar">
      <Navbar />
      <Searchbar />
      <Chatsbar />
    </div>
  );
}

export default Sidebar;
