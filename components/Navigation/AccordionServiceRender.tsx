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

export const revalidate = 60;

import { v4 as uuidv4 } from "uuid";

export default async function AccordionServiceRender() {

const render = await getNavLinkData();
  const accord = render.serviceLink;

  const pathname = usePathname()

  return (
    <Accordion className="!p-0 !m-0">
    <AccordionItem key="1" aria-label="Accordion 1" title="Produk & Layanan" className="!p-0 !m-0" indicator={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
}>
      {accord.map((service: ServiceData) => {
        const uid = uuidv4();
        return (
          <div key={uid} className="px-4 py-2 mb-4">
            <TransLink href={`/services/${service.slug}`} className={`${pathname === `/services/${service.slug}` ? 'disable-link': ''} text-primary dark:text-primary`} title={service.title} />
          </div>
        );
      })}
    </AccordionItem>
  </Accordion>
  );
}
