import React, { FunctionComponent } from "react";
import ListComponent from "../listComponent/ListComponent";
import SterkteCardComponent from "./SterkteCardComponent";

const SterkteCardList: FunctionComponent = () => {
  const sterktes = [
    {
      number: 1,
      title: "Firewall",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium nulla vel efficitur rutrum. Donec placerat erat ac dui malesuada interdum. Fusce nec placerat sapien. Suspendisse quis diam eu risus ornare sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris quis lacus convallis est facilisis semper. Integer id tellus auctor, aliquet tortor in, dapibus sapien. Donec dolor nulla, placerat vitae dolor non, efficitur laoreet ipsum. Nam risus eros, ",
    },
    {
      number: 2,
      title: "Objectieve netwerk analyse",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium nulla vel efficitur rutrum. Donec placerat erat ac dui malesuada interdum. Fusce nec placerat sapien. Suspendisse quis diam eu risus ornare sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris quis lacus convallis est facilisis semper. Integer id tellus auctor, aliquet tortor in, dapibus sapien. Donec dolor nulla, placerat vitae dolor non, efficitur laoreet ipsum. Nam risus eros, ",
    },
    {
      number: 3,
      title: "Jaren ervaring",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium nulla vel efficitur rutrum. Donec placerat erat ac dui malesuada interdum. Fusce nec placerat sapien. Suspendisse quis diam eu risus ornare sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris quis lacus convallis est facilisis semper. Integer id tellus auctor, aliquet tortor in, dapibus sapien. Donec dolor nulla, placerat vitae dolor non, efficitur laoreet ipsum. Nam risus eros, ",
    },
  ];
  return (
    <>
      <ListComponent
        data={sterktes}
        renderItem={function (item: any, i?: any): React.ReactNode {
          return <SterkteCardComponent {...item}></SterkteCardComponent>;
        }}
      ></ListComponent>
    </>
  );
};

export default SterkteCardList;
