import React, { FunctionComponent, ReactNode } from "react";
import { Description, Title } from "../card/card";
import { ChildrenPropsInterface } from "@/interface/ChildrenPropsInterface";

import FlexRow from "@/components/partials/FlexRow";

interface SterkteCardProps {
  title: string;
  description: string;
  number: number;
}
interface CirkelProps {
  number: number;
}

const SterkteCardComponent: FunctionComponent<SterkteCardProps> = ({
  title,
  description,
  number,
}) => {
  return (
    <SterkteCardContrainer>
      <FlexRow classes="items-center"> 
        <CardBlock>
          <div className="flex items-center">
            <CardCirkel number={number} />
          </div>
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
    <div className="w-[150px] h-[150px] bg-darkBlue text-lightBlue rounded-full flex items-center justify-center text-9xl">
      {number}
    </div>
  );
};

export default SterkteCardComponent;
