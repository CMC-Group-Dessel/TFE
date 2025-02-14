import React, { FunctionComponent, ReactNode } from "react";

export interface GridProps {
  children: ReactNode;
  rows: number;
  columns: number;
  classes?: string;
}

const GridComponent: FunctionComponent<GridProps> = ({
  classes,
  children,
  columns,
  rows,
}) => {
  return (
    <div
      className={`${classes} grid grid-cols-${columns} gap-4`}
    >
      {children}
    </div>
  );
};

export default GridComponent;
