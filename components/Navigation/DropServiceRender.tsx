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

export const revalidate = 60;

import { v4 as uuidv4 } from "uuid";

export default async function DropServiceRender() {

  const render = await getNavLinkData();
  const drop = render.serviceLink;

//   const pathname = usePathname();

  return (
        <Dropdown className="shadow-md">
          <NavbarItem>
            <DropdownTrigger>
              <Button disableRipple className="p-0 text-md bg-transparent data-[hover=true]:bg-transparent" radius="sm" variant="light" endContent={<FontAwesomeIcon icon={faChevronDown} className="w-3 h-3" />}>
                Produk & Layanan
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Produk & Layanan"
            className="w-[350px]"
            itemClasses={{
              base: ["p-0", "m-0", "space-y-0"],
            }}
          >
            {drop.map((service: ServiceData) => {
              const uid = uuidv4();
              return (
                <DropdownItem key={uid} className="data-[hover=true]:bg-transparent p-4 m-0">
                  <TransLink haveDesc={true} desc={service?.shortDesc} href={`/services/${service?.slug}`} title={service?.title} className={` hover:text-primary dark:hover:text-primary p-0 m-0`}/>
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </Dropdown>
  );
}
