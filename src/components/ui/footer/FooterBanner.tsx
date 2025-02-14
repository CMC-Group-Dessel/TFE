import React, { FunctionComponent } from "react";
import { Description, Title } from "../card/card";

interface FooterBannerProps {
  title: string;
}

const FooterBanner: FunctionComponent<FooterBannerProps> = ({
  title
}) => {
  return (
    <div className="w-[50%]">
      <Title>{title}</Title>
      
    </div>
  );
};

export default FooterBanner;
