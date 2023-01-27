import React from "react";

type ButtonPropsType = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export const Button = (props: ButtonPropsType) => {
  return (
    <button onClick={(event) => props.handleClick(event, 1)}>Button</button>
  );
};
