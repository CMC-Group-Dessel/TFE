import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Button } from "@/components/ui/button";
import { Trans } from "react-i18next";

import ContainerComponent from "@/components/partials/ContainerComponent";
import SterkteCardList from "@/components/ui/sterkteCard/SterkteCardGrid";
import SubjectComponent from "@/components/ui/subject/SubjectComponent";
import FlexRow from "@/components/partials/FlexRow";
import { Description, Title } from "@/components/ui/card/card";
import { Container, Eye } from "lucide-react";
import CardComponentGrid from "@/components/ui/card/CardGridComponent";
import FooterComponent from "@/components/ui/footer/FooterComponent";
import ListComponent from "@/components/ui/listComponent/ListComponent";

const IndexPage: React.FC<PageProps> = () => {
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
        <p></p>
      </ContainerComponent>
      <ContainerComponent classes="bg-lightBlue rounded-t-lg">
        <FlexRow>
          <SubjectComponent>
            <Title className="text-3xl">Onze sterktes</Title>
          </SubjectComponent>
        </FlexRow>
        <SterkteCardList></SterkteCardList>
      </ContainerComponent>

      <ContainerComponent classes="bg-[#f8f8f8]">
        <FlexRow>
          <SubjectComponent>
            <Title className="text-3xl">Laatse nieuws</Title>
            <Description className="text-xl w-[55%]">
              Ontdek hier de nieuwste ontwikkelingen op vlak van CyberSecurity.
            </Description>
          </SubjectComponent>
        </FlexRow>
        <CardComponentGrid
          columns={4}
          rows={1}
          data={nieuwsberichten}
          hovered={
            <FlexRow>
              <Eye></Eye>
              <Description>weergaven</Description>
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
              <Description>Onderstaande services bieden wij aan.</Description>
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
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
