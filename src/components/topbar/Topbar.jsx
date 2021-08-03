import React from "react";
import './Topbar.css'
import {NotificationsNone,Language,Settings} from '@material-ui/icons';
function Topbar(props) {
  return <div className="topbar">
    <div className="topbarWrapper">
      <div className="topbarLeft">
        <span className="logo">
          Mutosi Dashboard
        </span>
      </div>
      <div className="topbarRight">
        <div className="topbarIconContainer">
          <NotificationsNone />
          <span className="topIconBag">2</span>
        </div>
        <div className="topbarIconContainer">
          <Language />
          <span className="topIconBag">2</span>
        </div>
        <div className="topbarIconContainer">
          <Settings />
        </div>
          <img className="topAvantar" src="https://picsum.photos/200/300?grayscale" alt="Avantar" />
      </div>
    </div>
  </div>;
}

export default Topbar;
