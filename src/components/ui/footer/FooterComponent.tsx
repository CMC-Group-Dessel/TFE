import Container from "@/components/partials/ContainerComponent";
import React, { FunctionComponent } from "react";
import FooterBanner from "./FooterBanner";

const FooterComponent: FunctionComponent = () => {
  return (
    <>
      <Container classes="bg-darkBlue">
        <FooterBanner title={""} description={""}></FooterBanner>
      </Container>
    </>
  );
};

export default FooterComponent;
