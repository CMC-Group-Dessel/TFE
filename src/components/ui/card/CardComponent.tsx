import React, { FunctionComponent, ReactNode, useState } from "react";

import {
  Card,
  CardContent,
  Description,
  CardFooter,
  Title,
} from "../card/card";

import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

export interface NewsCardProps {
  title: string;
  description: string;
  hovered: ReactNode;
  variant: string;
  size: string;
  classes?: string;
}

const cardStyles = cva(
  "transition-transform duration-300 hover:scale-105 relative p-4",
  {
    variants: {
      variant: {
        default: "bg-white",
      },
      size: {
        default: "h-[250px] w-[350px]",
        medium: "h-[125px] w-[280px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const CardComponent: FunctionComponent<NewsCardProps> = ({
  title,
  description,
  hovered,
  variant,
  size,
  classes,
}) => {
  const [showText, setShowText] = useState(false);

  return (
    <Card
      className={cn(cardStyles({ variant, size }), classes)}
      onMouseEnter={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
    >
      <Title>{title}</Title>
      <Description>{description}</Description>

      {showText && <>{hovered}</>}
    </Card>
  );
};

export default CardComponent;
