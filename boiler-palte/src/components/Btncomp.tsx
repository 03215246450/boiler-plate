import React, { useState } from "react";
import Button from "@mui/material/Button";

type ButtonProps = {
  buttons: string[];
};

export default function Btncomp(props: ButtonProps) {
  const { buttons } = props;
  const [clickedText, setClickedText] = useState("");

  const handleClick = (buttonText: string) => {
    setClickedText(`You clicked on ${buttonText}`);
  };

  return (
    <div>
      {buttons.map((buttonText, index) => (
        <Button
        className="m-2"
          variant="contained"
          key={index}
          onClick={() => handleClick(buttonText)}
        >
          {buttonText}
        </Button>
      ))}
      <p>{clickedText}</p>
    </div>
  );
}
