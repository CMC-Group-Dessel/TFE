import React, { FunctionComponent, ReactNode } from "react";

export interface GridProps {
  children: ReactNode;
  rows: number;
  columns: number;
  classes?: string;
}

const GridComponent: FunctionComponent<GridProps> = ({
  classes = "",
  children,
  columns,
  rows,
}) => {
  return (
    <div
      className={`${classes} grid gap-4`}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
      }}
    >
      {children}
    </div>
  );
};

export default GridComponent;
