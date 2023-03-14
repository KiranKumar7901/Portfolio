import React from "react";
import "./FloatingDiv.css";
import { themeContext } from "../../context";
import { useContext } from "react";

const FloatingDiv = ({ image, txt1, txt2 }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="floatingdiv"
      style={
        darkMode
          ? {
              background: "var(--gray)",
              boxShadow: "0px 19px 60px rgb(150,150, 150, 25%)",
            }
          : { background: "" }
      }
    >
      <img src={image} alt="" />
      <span>
        {txt1}
        <br />
        {txt2}
      </span>
    </div>
  );
};

export default FloatingDiv;
