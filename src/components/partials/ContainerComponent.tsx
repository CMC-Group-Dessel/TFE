import { ChildrenPropsInterface } from "@/interface/ChildrenPropsInterface";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React, { ReactNode } from "react";
import { FunctionComponent } from "react";

interface ContrainerProps {

  children: ReactNode;
  classes?: string;
  background?: "default" |"darkBlue" | "lightBlue" | "lightGray" 
}

const containerStyles = cva(
  "",
  {
    variants: {
      background: {
        default: "bg-white",
        darkBlue: "bg-cmcdarkBlue",
        lightBlue: "bg-cmclightBlue",
        lightGray: "bg-cmclightGray"
      },
    },
    defaultVariants: {
      background: "default",
    },
  }
);


const ContainerComponent: FunctionComponent<ContrainerProps> = ({
  children,
  classes,
  background
}) => {
  return (
    <div className={cn(containerStyles({background}), classes)}>
      <ContrainerFrame>{children}</ContrainerFrame>
    </div>
  );
};


const ContrainerFrame: FunctionComponent<ChildrenPropsInterface> = ({
  children,
}) => {
  return <div className="pl-[12%] pr-[12%] pb-[3%] pt-[3%]">{children}</div>;
};
export default ContainerComponent;
ContrainerFrame;
