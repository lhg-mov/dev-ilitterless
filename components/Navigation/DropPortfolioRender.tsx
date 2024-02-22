import React from "react";
import { NavbarItem, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

import Link from "next/link";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { usePathname } from 'next/navigation'

import TransLink from "@/components/TransLink";
import { getNavLinkData } from "@/sanity/actions";

// Tentukan tipe data untuk respons dari getServiceHome
interface ServiceData {
  _id: string;
  slug: string;
  title: string;
  shortDesc: string;
  // Tambahkan properti lain sesuai kebutuhan
}

interface PortfolioLink {
  _id: string;
  title: string;
  description: string;
  link: string;
}

export const revalidate = 60;

import { v4 as uuidv4 } from "uuid";

export default async function DropPortfolioRender() {

  const render = await getNavLinkData();
  const dropPort = render.portLink;

  // const pathname = usePathname();

  return (
    <Dropdown className="shadow-md">
    <NavbarItem>
      <DropdownTrigger>
        <Button disableRipple className="p-0 text-md bg-transparent data-[hover=true]:bg-transparent" radius="sm" variant="light" endContent={<FontAwesomeIcon icon={faChevronDown} className="w-3 h-3" />}>
          Portofolio
        </Button>
      </DropdownTrigger>
    </NavbarItem>
    <DropdownMenu aria-label="Portofolio" className="w-[320px]">
      {dropPort.map((portLink: PortfolioLink) => {
        const uid = uuidv4();
        return (
          <DropdownItem key={uid} className="data-[hover=true]:bg-transparent p-4 m-0">
            <TransLink haveDesc={true} desc={portLink.description} href={portLink.link} className={`hover:text-primary dark:hover:text-primary p-0 m-0`} title={portLink.title} />
          </DropdownItem>
        );
      })}
    </DropdownMenu>
  </Dropdown>
  );
}
