import React, { FunctionComponent, ReactNode } from "react";

import { title } from "process";
import Container from "@/components/partials/ContainerComponent";
import ListComponent from "../listComponent/ListComponent";
import { Eye, Grid } from "lucide-react";
import GridComponent from "@/components/partials/GridComponent";
import NewsCardComponent from "./CardComponent";
import CardComponent from "./CardComponent";
import FlexRow from "@/components/partials/FlexRow";
import { Description } from "../card/card";

interface CardComponentGridProps {
  rows: number,
  columns: number,
  data: any[];
  hovered?: ReactNode;
}

const CardComponentGrid: FunctionComponent<CardComponentGridProps> = ({
  data,
  hovered,
  columns,
  rows
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
            ></CardComponent>
          );
        }}
      ></ListComponent>
    </GridComponent>
  );
};

export default CardComponentGrid;
