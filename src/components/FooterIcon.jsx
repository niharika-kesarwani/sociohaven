import React from "react";
import { useLocation } from "react-router-dom";

function FooterIcon({ inactiveIcon, activeIcon, route }) {
  const location = useLocation();

  return <div>{location?.pathname === route ? activeIcon : inactiveIcon}</div>;
}

export default FooterIcon;
