import React from "react";

export interface Props {
  text: String;
  onclick: Function;
}

export default function RoundeButton(props: Props) {
  return (
    <div className="rounde-button">
      <button>{props.text}</button>
    </div>
  );
}
