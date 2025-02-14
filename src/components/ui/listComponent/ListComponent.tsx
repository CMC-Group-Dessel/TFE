import React, { ReactNode } from "react";

type ListComponentProps = {
  data: any[];
  renderItem: (item: any, i?: any) => ReactNode;
};

export default function ListComponent({
  data,
  renderItem,
}: ListComponentProps) {
  return <>{data.map((item, i) => renderItem(item, i))}</>;
}
