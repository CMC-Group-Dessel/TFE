import React, { FunctionComponent, ReactNode } from "react";
import ListComponent from "../listComponent/ListComponent";
import CardComponent from "./CardComponent";
import GridComponent from "../grid/GridComponent";

interface CardComponentGridProps {
  rows: number;
  columns: number;
  data: any[];
  cardVariant: string;
  cardSize: string;
  hovered?: ReactNode;
}

const CardComponentGrid: FunctionComponent<CardComponentGridProps> = ({
  data,
  hovered,
  columns,
  rows,
  cardVariant,
  cardSize,
}) => {
  return (
    <GridComponent rows={rows} columns={columns}>
      <ListComponent
        data={data}
        renderItem={function (item: any, i?: any) {
          return (
            <CardComponent
              title={item.title}
              description={item.description}
              hovered={<>{hovered}</>}
              variant={cardVariant}
              size={cardSize}
            ></CardComponent>
          );
        }}
      ></ListComponent>
    </GridComponent>
  );
};

export default CardComponentGrid;
