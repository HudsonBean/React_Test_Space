import React, { HTMLAttributes } from "react";

interface props {
  text: string;
  message?: string;
  colors: [colorOne: string, colorTwo: string];
}

export const CoolButton: React.FC<HTMLAttributes<HTMLButtonElement> & props> = (
  props
) => {
  let toggle = false;
  const handleClick = (message: any, colors: any) => (e: any) => {
    message && console.log(message);
    e.target.style.color = toggle ? colors[0] : colors[1];
    toggle = !toggle;
  };
  const Button: React.FC<HTMLAttributes<HTMLButtonElement> & props> = ({
    text,
    message,
    colors,
  }) => <button onClick={handleClick(message, colors)}>{text}</button>;
  return <Button {...props} />;
};
