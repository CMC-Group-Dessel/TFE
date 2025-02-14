import React, { FunctionComponent, ReactNode, useState } from "react";
import {
  Card,
  CardContent,
  Description,
  CardFooter,
  Title,
} from "../card/card";

export interface NewsCardProps {
  title: string;
  description: string;
  hovered: ReactNode;
}

const CardComponent: FunctionComponent<NewsCardProps> = ({
  title,
  description,
  hovered,
}) => {
  const [showText, setShowText] = useState(false);

  return (
    <Card
      className="h-[250px] w-[350px] bg-white transition-transform duration-300 hover:scale-105 relative p-4"
      onMouseEnter={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
    >
      <Title>{title}</Title>
      <Description>{description}</Description>

      {showText && <div>{hovered}</div>}
    </Card>
  );
};

export default CardComponent;
