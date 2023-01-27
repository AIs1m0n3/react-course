import React from "react";
import styled from "styled-components";

type Props = {
  children: JSX.Element;
};

export const Card = (props: Props) => {
  return (
    <div className="card">
      <div className="card-content">{props.children} </div>
    </div>
  );
};
