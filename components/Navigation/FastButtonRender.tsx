import React from "react";
import { Button} from "@nextui-org/react";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { usePathname } from 'next/navigation'

import { getNavLinkData } from "@/sanity/actions";

export const revalidate = 60;

export default async function FastButtonRender() {

const render = await getNavLinkData();
  const button = render.fastButton;

  return (
    <Button as={Link} endContent={<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-4 h-4" />} className={`bg-primary text-white sm:text-md text-sm font-semibold w-full`} href={button.buttonLink} variant="flat" radius="full">
            {button.buttonText}
          </Button>
  );
}
