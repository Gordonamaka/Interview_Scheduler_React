import React from "react";
import "components/Button.scss";
import classNames from "classnames";

export default function Button(props) {

   // Configures the classNames for the buttonClass
   const buttonClass = classNames("button", {
      "button--confirm": props.confirm,
      "button--danger": props.danger
   });
   //Return the configured classNames using props
   return (
      <button
         className={buttonClass}
         onClick={props.onClick}
         disabled={props.disabled}
      >
         {props.children}
      </button>
   );
}
