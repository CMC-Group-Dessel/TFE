import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Button } from "@/components/ui/button";
import { Trans } from "react-i18next";

import ContainerComponent from "@/components/partials/ContainerComponent";
import SterkteCardList from "@/components/ui/sterkteCard/SterkteCardGrid";
import SubjectComponent from "@/components/ui/subject/SubjectComponent";
import FlexRow from "@/components/partials/FlexRow";
import { Description, Title } from "@/components/ui/card/card";
import { ArrowBigRight, Container, Eye } from "lucide-react";
import CardComponentGrid from "@/components/ui/card/CardGridComponent";
import FooterComponent from "@/components/ui/footer/FooterComponent";

const IndexPage: React.FC<PageProps> = () => {
  const nieuwsberichten = [
    { title: "Titel bericht 1", description: "13/02/2025" },
    { title: "Titel bericht 2", description: "13/02/2025" },
    { title: "Titel bericht 3", description: "13/02/2025" },
    { title: "Titel bericht 4", description: "13/02/2025" },
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
    { title: "Managed Security Services", description: "Monitoring" },
  ];

  return (
    <main>

      <ContainerComponent classes="bg-lightBlue">
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
            <Description className="text-xl w-[55 %]">
              Ontdek hier de nieuwste ontwikkelingen op vlak van CyberSecurity,
            </Description>
          </SubjectComponent>
        </FlexRow>
        <CardComponentGrid
          columns={4}
          rows={2}
          data={nieuwsberichten}
          hovered={
            <FlexRow>
              <Eye></Eye>
              <Description>weergaven</Description>
            </FlexRow>
          }
        />
      </ContainerComponent>

      <ContainerComponent classes="bg-white">
        <SubjectComponent>
          <FlexRow>
            <div className="width-[50%]">
              <Title>We make IT work!</Title>
              <Description>Onderstaande services bieden wij aan.</Description>
            </div>
            <div className="width-[50%]">
              <CardComponentGrid
                rows={6}
                columns={2}
                data={services}
                hovered={
                  <FlexRow>
                    <p className="text-xl text-darkBlue text">&gt;</p>
                    <p className="content-center">bekijk</p>
                  </FlexRow>
                }
              />
            </div>
          </FlexRow>
        </SubjectComponent>
      </ContainerComponent>

      <FooterComponent>fqsfd</FooterComponent>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
