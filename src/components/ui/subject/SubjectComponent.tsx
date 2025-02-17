import React, { FunctionComponent } from "react";
import { Title, Description } from "../card/card";
import { ChildrenPropsInterface } from "@/interface/ChildrenPropsInterface";

const SubjectComponent: FunctionComponent<ChildrenPropsInterface> = ({
  children, classes
}) => {
  return <SubjectComoponentFrame>{children}</SubjectComoponentFrame>;
};

const SubjectComoponentFrame: FunctionComponent<ChildrenPropsInterface> = ({
  children,
}) => {
  return <div className="mb-[2%] w-[50%]">{children}</div>;
};

export default SubjectComponent;
