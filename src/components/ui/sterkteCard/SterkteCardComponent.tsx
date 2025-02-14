import React, { FunctionComponent, ReactNode } from "react";
import { Description, Title } from "../card/card";
import { ChildrenPropsInterface } from "@/interface/ChildrenPropsInterface";
import GridComponent from "@/components/partials/GridComponent";
import FlexRow from "@/components/partials/FlexRow";

export interface SterkteCardProps {
  title: string;
  description: string;
  number: number;
}
export interface CirkelProps {
  number: number;
}

const SterkteCardComponent: FunctionComponent<SterkteCardProps> = ({
  title,
  description,
  number,
}) => {
  return (
    <SterkteCardContrainer>
      <FlexRow>
        <CardBlock>
          <CardCirkel number={number} />
        </CardBlock>
        <CardBlock>
          <Title className="text-4xl">{title}</Title>
          <Description>{description}</Description>
        </CardBlock>
      </FlexRow>
    </SterkteCardContrainer>
  );
};

const SterkteCardContrainer: FunctionComponent<ChildrenPropsInterface> = ({
  children,
}) => {
  return <div className="w-[55%] mb-[1%]">{children}</div>;
};

const CardBlock: FunctionComponent<ChildrenPropsInterface> = ({ children }) => {
  return <div className="pl-[2%] pr-[2%]">{children}</div>;
};

const CardCirkel: FunctionComponent<CirkelProps> = ({ number }) => {
  return (
    <div className="w-[150px] h-[150px] bg-darkBlue text-lightBlue  rounded-full content-around text-6xl text-center ">
      {number}
    </div>
  );
};

export default SterkteCardComponent;
SterkteCardContrainer;
CardBlock;
