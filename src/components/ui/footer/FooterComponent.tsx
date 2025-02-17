import Container from "@/components/partials/ContainerComponent";
import FlexRow from "@/components/partials/FlexRow";
import React, { FunctionComponent, ReactNode, useState } from "react";
import { Description, Title } from "../card/card";
import { ChildrenPropsInterface } from "@/interface/ChildrenPropsInterface";
import { LinkedinIcon } from "lucide-react";
import { Button } from "../button";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

interface FooterBannerProps {
  title: string;
  button?: ReactNode;
}

const FooterBanner: FunctionComponent<FooterBannerProps> = ({
  title,
  button,
}) => {
  const [hovered, sethovered] = useState(false);
  const { t, i18n } = useTranslation();

  const mouseEnterHover = () => {
    sethovered(true);
  };

  const mouseLeaveHover = () => {
    sethovered(false);
  };

  return (
    <div
      className={`mt-2 w-[50%] h-[150px] ${hovered ? `bg-cmclightBlueHover border-10 border-cmclightBlue` : `bg-cmclightBlue`} rounded-[15px] p-5 content-center align-middle absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2`}
      onMouseEnter={mouseEnterHover}
      onMouseLeave={mouseLeaveHover}
    >
      <FlexRow>
        <div className="w-[40%] text-cmcBlue static">
          <Title>{title}</Title>
        </div>
        <div className="w-[60%]">{button}</div>
      </FlexRow>
    </div>
  );
};

const FooterComponent: FunctionComponent = () => {
  return (
    <Container background="darkBlue" classes="mt-10  relative py-20 ">
      <FooterBanner title={t("Klaar voor netwerk") + "?"} />
      <Container background="darkBlue">
        <FlexRow>
          <FooterBlock>
            <h1>CMC Group</h1>
            <h1>E Portaal</h1>
          </FooterBlock>

          <FooterBlock />
          <FooterBlock />
          <FooterBlock>
            <Description>Help desk</Description>
            <h1>014 37 33 11</h1>
          </FooterBlock>

          <FooterBlock>
            <Description>{t("Contact gegevens")}</Description>
            <h1>TFE</h1>
            <h1>Turnhoutsebaan 115</h1>
            <h1>2480 Dessel</h1>
            <h1>014 37 33 11</h1>
            <FooterSeperator />
            <h1>{t("Volg ons")}</h1>
            <LinkedinIcon />
          </FooterBlock>
        </FlexRow>
      </Container>
    </Container>
  );
};

const FooterBlock: FunctionComponent<ChildrenPropsInterface> = ({
  children,
}) => {
  return <div className="w-1/5  m-[10px] text-white">{children}</div>;
};

const FooterSeperator: FunctionComponent = () => {
  return <div className="mt-[5%] mb-[5%] w-2/3 h-[1px] bg-white" />;
};

export default FooterComponent;
