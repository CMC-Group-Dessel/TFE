import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Button } from "@/components/ui/button";
import { Trans, useTranslation } from "react-i18next";

import ContainerComponent from "@/components/partials/ContainerComponent";
import SterkteCardList from "@/components/ui/sterkteCard/SterkteCardGrid";
import SubjectComponent from "@/components/ui/subject/SubjectComponent";
import FlexRow from "@/components/partials/FlexRow";
import { Description, Title } from "@/components/ui/card/card";
import { Container, Eye } from "lucide-react";
import CardComponentGrid from "@/components/ui/card/CardGridComponent";
import FooterComponent from "@/components/ui/footer/FooterComponent";
import ListComponent from "@/components/ui/listComponent/ListComponent";
import ChangeLanguage from "@/components/partials/ChangeLanguage";

const IndexPage: React.FC<PageProps> = () => {
  const { t, i18n } = useTranslation();

  const nieuwsberichten = [
    { title: "Titel bericht 1", description: "13/02/2025" },
    { title: "Titel bericht 2", description: "13/02/2025" },
    { title: "Titel bericht 3", description: "13/02/2025" },
    { title: "Titel bericht 3", description: "13/02/2025" },
  ];

  const services = [
    { title: "Security Services", description: "Proactieve aanpak" },
    {
      title: "Identity & Access protection",
      description: "Conditional Aceess",
    },
    {
      title: "Endpoint Protection",
      description: "EDR",
    },
    {
      title: "Endpoint Protection",
      description: "EDR",
    },
    {
      title: "Endpoint Protection",
      description: "EDR",
    },
  ];

  return (
    <main>
      <ContainerComponent>

        <SubjectComponent>
          <div className="w-[75%]">

          <Title className="text-cmcBlue">{t("Bedrijf veiligheid")}</Title>
          </div>
          <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                felis odio, pretium et erat nec, ultrices sollicitudin magna.
                Proin ac ligula dolor. Ut ultricies, libero vitae malesuada
                egestas, urna lectus lobortis leo, nec maximus lacus lorem ut
                lectus. Aenean consectetur velit vehicula sodales tincidunt.
          </Description>
        </SubjectComponent>



      </ContainerComponent>
      <ContainerComponent>
        <ContainerComponent>
          <FlexRow>
            <SubjectComponent>
              <Title>{t("Waarom TFE")} ?</Title>
              <Description className="w-[50%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                felis odio, pretium et erat nec, ultrices sollicitudin magna.
                Proin ac ligula dolor. Ut ultricies, libero vitae malesuada
                egestas, urna lectus lobortis leo, nec maximus lacus lorem ut
                lectus. Aenean consectetur velit vehicula sodales tincidunt.
              </Description>
              <h1 className="text-cmcBlue font-bold">{t("Ontdek visie")}</h1>
            </SubjectComponent>
          </FlexRow>
        </ContainerComponent>
      </ContainerComponent>

      <ContainerComponent background="lightBlue">
        <FlexRow>
          <SubjectComponent>
            <Title className="text-3xl">{t("Onze sterktes")}</Title>
          </SubjectComponent>
        </FlexRow>
        <SterkteCardList></SterkteCardList>
      </ContainerComponent>

      <ContainerComponent background="lightGray">
        <FlexRow>
          <SubjectComponent>
            <Title className="text-3xl">{t("Laatste nieuws")}</Title>
            <Description className="text-xl w-[55%]">
              {t("Ontdek ontwikkelingen CyberSecurity.")}
            </Description>
          </SubjectComponent>
        </FlexRow>

        <CardComponentGrid
          columns={4}
          rows={1}
          data={nieuwsberichten}
          hovered={
            <FlexRow>
              <Eye />
              <Description>1000 {t("Weergaven")}</Description>
            </FlexRow>
          }
          cardVariant={"default"}
          cardSize={"default"}
        />
      </ContainerComponent>

      <ContainerComponent>
        <FlexRow>
          <div className="w-[50%]"></div>
          <div className="w-[50%]">
            <SubjectComponent>
              <Title>We make IT work!</Title>
              <Description>{t("Services")}</Description>
            </SubjectComponent>
            <CardComponentGrid
              rows={2}
              columns={2}
              data={services}
              cardVariant={"default"}
              cardSize={"medium"}
            ></CardComponentGrid>
          </div>
        </FlexRow>
      </ContainerComponent>

      <FooterComponent></FooterComponent>
      <ChangeLanguage />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
