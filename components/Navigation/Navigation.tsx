"use client";

import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Accordion, AccordionItem } from "@nextui-org/react";

import Link from "next/link";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faChevronDown, faCircleCheck, faComment, faComments, faDumpster, faHandshakeSimple, faRecycle, faSchoolCircleCheck, faTrashArrowUp } from "@fortawesome/free-solid-svg-icons";

import { useRouter } from 'next/navigation'

import { usePathname } from 'next/navigation'

import TransLink from "@/components/TransLink";
import { getNavLinkData } from "@/sanity/actions";

// Tentukan tipe data untuk respons dari getServiceHome
interface ServiceData {
  _id: string;
  slug: string;
  title: string;
  shortDesc: string;
  mainImage: string;
  asset: string;
  url: string;
  // Tambahkan properti lain sesuai kebutuhan
}

interface PortfolioLinkData {
  _id: string;
  title: string;
  description: string;
  link: string;
}

export const revalidate = 60;

import { v4 as uuidv4 } from "uuid";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const [services, setServices] = useState<ServiceData[]>([]);
  const [portfolioLink, setPortfolioLink] = useState<PortfolioLinkData[]>([]);
  const [button, setButtonData] = useState<{ buttonText: string, buttonLink: string }>({ buttonText: 'Loading', buttonLink: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getNavLinkData();
        const dataset = response.fastButton;
        const services = response.serviceLink;
        const portfolioLink = response.portLink;
        setButtonData({ buttonText: dataset.buttonText, buttonLink: dataset.buttonLink });
        setServices(services); // Mengambil data services
        setPortfolioLink(portfolioLink); // Mengambil data portfolioLink
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const pathname = usePathname()

  // const [services, setServices] = useState<ServiceData[]>([]);
  // const [portfolioLink, setPortfolioLink] = useState<PortfolioLinkData[]>([]);

  // useEffect(() => {
  //   Promise.all([getPortfolioLink(), getServiceHome()])
  //     .then(([portfolioData, serviceData]) => {
  //       setPortfolioLink(portfolioData);
  //       setServices(serviceData);
  //     })
  //     .catch((error) => {
  //       console.error("Error while fetching data:", error);
  //     });
  // }, []);

  const router = useRouter()

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} maxWidth="xl" className="sm:py-5 py-2 select-none z-30 dark:bg-neutral-950" shouldHideOnScroll isBlurred={false}>
      <NavbarContent className="xl:hidden md:flex flex pr-3" justify="start">
        <NavbarBrand className={`w-[105px] h-[30px] ${pathname === '/home' ? 'disable-link': ''} ${pathname === '/' ? 'disable-link': ''}`} as={Link} href="/home" >
          <Image src="/ilitterless_black.png" alt="iLitterless Logo" width={150} height={60} className="dark:hidden pointer-events-none" draggable="false" />

          <Image src="/ilitterless_white.PNG" alt="iLitterless Logo" width={150} height={60} className="dark:block dark:w-[150px] dark:h-[60px] w-0 h-0 object-contain pointer-events-none" draggable="false" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden xl:flex md:hidden gap-7" justify="center">
        <NavbarBrand as={Link} href="/home" className={`${pathname === '/home' ? 'disable-link': ''} ${pathname === '/' ? 'disable-link': ''}`}>

            <Image src="/ilitterless_black.png" alt="iLitterless Logo" width={150} height={60} className="dark:hidden" draggable="false" />
            <Image src="/ilitterless_white.PNG" alt="iLitterless Logo" width={150} height={60} className="dark:block dark:w-[150px] dark:h-[60px] w-0 h-0 object-contain" draggable="false" />

        </NavbarBrand>
        <NavbarItem className="ml-5">
          <TransLink href="/about" title="Tentang" className={`${pathname === '/about' ? 'disable-link': ''}`} />
        </NavbarItem>
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
            {services.map((service: any) => {
              const uid = uuidv4();
              return (
                <DropdownItem key={uid} className="data-[hover=true]:bg-transparent p-4 m-0">
                  <TransLink haveDesc={true} desc={service.shortDesc} href={`/services/${service.slug}`} title={service.title} className={`${pathname === `/services/${service.slug}` ? 'disable-link': ''} hover:text-primary dark:hover:text-primary p-0 m-0`}/>
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <TransLink href="/blog" title="Blog" className={`${pathname === '/blog' ? 'disable-link': ''}`} />
        </NavbarItem>
        <Dropdown className="shadow-md">
          <NavbarItem>
            <DropdownTrigger>
              <Button disableRipple className="p-0 text-md bg-transparent data-[hover=true]:bg-transparent" radius="sm" variant="light" endContent={<FontAwesomeIcon icon={faChevronDown} className="w-3 h-3" />}>
                Portofolio
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu aria-label="Portofolio" className="w-[320px]">
            {portfolioLink.map((portLink: any) => {
              const uid = uuidv4();
              return (
                <DropdownItem key={uid} className="data-[hover=true]:bg-transparent p-4 m-0">
                  <TransLink haveDesc={true} desc={portLink.description} href={portLink.link} className={`hover:text-primary dark:hover:text-primary p-0 m-0 ${pathname === `{portLink.link}` ? 'disable-link' : ''}`} title={portLink.title} />
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <TransLink href="/contact" title="Kontak" className={`${pathname === '/contact' ? 'disable-link': ''}`}/>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="xl:flex hidden" justify="end">
        <NavbarItem>
          <Button as={Link} endContent={<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-4 h-4" />} className={`bg-primary text-white sm:text-md text-sm font-semibold`} href={button.buttonLink} variant="flat" radius="full">
            {button.buttonText}
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="xl:hidden flex" justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem className="pt-10">
          <TransLink href="/about" title="Tentang" className={`w-full ${pathname === '/about' ? 'disable-link': ''}`} />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Accordion className="!p-0 !m-0">
            <AccordionItem key="1" aria-label="Accordion 1" title="Produk & Layanan" className="!p-0 !m-0" indicator={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
}>
              {services.map((service: any) => {
                const uid = uuidv4();
                return (
                  <div key={uid} className="px-4 py-2 mb-4">
                    <TransLink href={`/services/${service.slug}`} className={`${pathname === `/services/${service.slug}` ? 'disable-link': ''} text-primary dark:text-primary`} title={service.title} />
                  </div>
                );
              })}
            </AccordionItem>
          </Accordion>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <TransLink href="/blog" title="Blog" className={`${pathname === '/blog' ? 'disable-link': ''} w-full`} />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Accordion className="!p-0 !m-0">
            <AccordionItem key="1" aria-label="Accordion 1" title="Portofolio" className="!p-0 !m-0" indicator={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
}>
              {portfolioLink.map((portLink: any) => {
                const uid = uuidv4();
                return (
                  <div className="px-4 py-2" key={uid}>
                    <TransLink href={portLink.link} title={portLink.title} className={`${pathname === `{portLink.link}` ? 'disable-link': ''}w-full mb-4 py-2 text-primary dark:text-primary`} />
                  </div>
                );
              })}
            </AccordionItem>
          </Accordion>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <TransLink href="/contact" title="Kontak" className={`w-full ${pathname === '/contact' ? 'disable-link': ''}`} />
        </NavbarMenuItem>
        <NavbarMenuItem className="py-10">
          <Button as={Link} endContent={<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-4 h-4" />} className={`bg-primary w-full text-white sm:text-md text-sm font-semibold`} href={button.buttonLink} variant="flat" radius="full">
            {button.buttonText}
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
