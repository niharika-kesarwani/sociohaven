import React from "react";
import { useLocation } from "react-router-dom";

function FooterIcon({ inactiveIcon, activeIcon, route, text }) {
  const location = useLocation();
  const onSameRoute = location?.pathname === route;

  return (
    <div className="flex items-center gap-2 rounded-full px-4 py-2 hover:cursor-pointer hover:font-bold hover:text-white lg:hover:bg-primary">
      <div>{onSameRoute ? activeIcon : inactiveIcon}</div>
      <span
        className={`hidden text-lg lg:inline ${onSameRoute && "font-bold"}`}
      >
        {text}
      </span>
    </div>
  );
}

export default FooterIcon;
