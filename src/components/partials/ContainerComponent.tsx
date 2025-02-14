import { ChildrenPropsInterface } from "@/interface/ChildrenPropsInterface";
import React, { ReactNode } from "react";
import { FunctionComponent } from "react";

interface ContrainerProps {
  children: ReactNode;
  classes?: string;
}

const ContainerComponent: FunctionComponent<ContrainerProps> = ({
  children,
  classes,
}) => {
  return (
    <div className={`${classes}`}>
      <ContrainerFrame>{children}</ContrainerFrame>
    </div>
  );
};

const ContrainerFrame: FunctionComponent<ChildrenPropsInterface> = ({
  children,
}) => {
  return <div className="pl-[8%] pt-[3%] pr-[8%] pb-[3%]">{children}</div>;
};

export default ContainerComponent;
ContrainerFrame;
