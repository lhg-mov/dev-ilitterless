import React from "react";

import { Button, Link } from "@nextui-org/react";

type Props = {
  startContent?: JSX.Element;
  endContent?: JSX.Element;
  className?: string;
  link?: string;
  text?: string;
  wide?: boolean;
  type?: "secondary" | "primary" | "accent" | null;
};

const ButtonUI = ({ startContent, endContent, link, text, wide, type, className }: Props) => {
  return (
    <Button
      as={Link}
      endContent={endContent}
      startContent={startContent}
      className={`bg-${type === "primary" ? "primary" : type === "secondary" ? "primary" : type === "accent" ? "primary" : "primary"} text-white sm:text-md pt-2 pb-2.5 text-sm font-semibold ${wide ? "w-full" : null} ${className}`}
      href={link}
      variant="flat"
      radius="full"
    >
      {text}
    </Button>
  );
};

export default ButtonUI;
