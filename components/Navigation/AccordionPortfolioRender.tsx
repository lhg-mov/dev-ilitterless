import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Accordion, AccordionItem  } from "@nextui-org/react";

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

export default async function AccordionPortfolioRender() {

const render = await getNavLinkData();
  const portAccord = render.portLink;

  const pathname = usePathname()

  return (
    <Accordion className="!p-0 !m-0">
            <AccordionItem key="1" aria-label="Accordion 1" title="Portofolio" className="!p-0 !m-0" indicator={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
}>
              {portAccord.map((portLink: PortfolioLink) => {
                const uid = uuidv4();
                return (
                  <div className="px-4 py-2" key={uid}>
                    <TransLink href={portLink.link} title={portLink.title} className={`${pathname === `{portLink.link}` ? 'disable-link': ''}w-full mb-4 py-2 text-primary dark:text-primary`} />
                  </div>
                );
              })}
            </AccordionItem>
          </Accordion>
  );
}
