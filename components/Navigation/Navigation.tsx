"use client";

import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Accordion, AccordionItem } from "@nextui-org/react";

import Link from "next/link";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faChevronDown, faCircleCheck, faComment, faComments, faDumpster, faHandshakeSimple, faRecycle, faSchoolCircleCheck, faTrashArrowUp } from "@fortawesome/free-solid-svg-icons";
import { ThemeSwitcher } from "./ThemeSwitcher";

import TransLink from "@/components/TransLink";
import { getNavigation, getPortfolioLink, getServiceHome } from "@/sanity/actions";

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

  // Solusi Sementara dikarenakan jika dilakukan Fetch Data terjadi Error Pada seluruh komponen Navigasi
  const buttonText = "Daftar i-Cos";
  const buttonLink = "/waiting";

  const services = [
    {
      shortDesc: "Sebuah program inisiatif untuk mengatasi masalah sampah dan meningkatkan kebersihan lingkungan di Indonesia.",
      title: "Pick Up My Litter",
      slug: "pml",
    },
    {
      shortDesc: "Program Mini Onboarding of iLitterless Recycling Station adalah inisiatif untuk menempatkan stasiun daur ulang mini di lokasi strategis seperti pusat perbelanjaan atau tempat umum lainnya.",
      title: "Mini on Boarding of Ilitterless Recycling Station",
      slug: "mobi-rs",
    },
    {
      shortDesc: "Integrated Circular Waste Management System adalah pendekatan holistik dalam mengelola limbah yang memanfaatkan prinsip ekonomi sirkular.",
      title: "Integrated Circular Waste Management System",
      slug: "i-cos",
    },
    {
      shortDesc: "Program iLitterless Goes to Schools and Universities merupakan inisiatif iLitterless Indonesia untuk meningkatkan kesadaran lingkungan di kalangan siswa dan mahasiswa.",
      title: "iLitterless Goes To School and Universities",
      slug: "goes-to-school",
    },
  ];

  const portfolioLink = [
    {
      description: "Menjadi Bagian Dalam Mengurangi Sampah di Indonesia",
      title: "Mitra Kami",
      link: "/partner",
    },
    {
      description: "Kami telah Menjalin Kerja Sama dengan Berbagai Pihak.",
      title: "Campaign",
      link: "/waiting",
    },
    {
      description: "Kami akan selalu berinovasi untuk mewujudkan minimnya sampah di Indonesia",
      title: "Project",
      link: "/projects",
    },
  ];

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

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} maxWidth="xl" className="sm:py-5 py-2 select-none z-30" shouldHideOnScroll isBlurred={false}>
      <NavbarContent className="xl:hidden md:flex flex pr-3" justify="start">
        <NavbarBrand className="w-[105px] h-[30px]" as={Link} href={"https://ilitterlessindonesia.org"}>
          <Image src="/ilitterless_black.png" alt="iLitterless Logo" width={150} height={60} className="dark:hidden pointer-events-none" draggable="false" />

          <Image src="/ilitterless_white.PNG" alt="iLitterless Logo" width={150} height={60} className="dark:block dark:w-[150px] dark:h-[60px] w-0 h-0 object-contain pointer-events-none" draggable="false" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden xl:flex md:hidden gap-7" justify="center">
        <NavbarBrand>
          <Link href="/">
            <Image src="/ilitterless_black.png" alt="iLitterless Logo" width={150} height={60} className="dark:hidden" draggable="false" />
            <Image src="/ilitterless_white.PNG" alt="iLitterless Logo" width={150} height={60} className="dark:block dark:w-[150px] dark:h-[60px] w-0 h-0 object-contain" draggable="false" />
          </Link>
        </NavbarBrand>
        <NavbarItem className="ml-5">
          <TransLink href="/about" title="Tentang" />
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
                  <TransLink haveDesc={true} desc={service.shortDesc} href={`/services/${service.slug}`} className="hover:text-primary-dark dark:hover:text-primary p-0 m-0" title={service.title} />
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <TransLink href="/blog" title="Blog" />
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
                  <TransLink haveDesc={true} desc={portLink.description} href={portLink.link} className="hover:text-primary-dark dark:hover:text-primary p-0 m-0" title={portLink.title} />
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <TransLink href="/contact" title="Kontak" />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="xl:flex hidden" justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} endContent={<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-4 h-4" />} className={`bg-primary text-white sm:text-md text-sm font-semibold`} href={buttonLink} variant="flat" radius="full">
            {buttonText}
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="xl:hidden flex" justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem className="pt-10">
          <TransLink href="/about" title="Tentang" className=" w-full" />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Accordion className="!p-0 !m-0">
            <AccordionItem key="1" aria-label="Accordion 1" title="Produk & Layanan" className="!p-0 !m-0" indicator={<FontAwesomeIcon icon={faChevronDown} className="w-4 h-4 mr-3 mt-5" />}>
              {services.map((service: any) => {
                const uid = uuidv4();
                return (
                  <div key={uid} className="px-4 py-2 mb-4">
                    <TransLink href={`/services/${service.slug}`} className="text-primary-dark dark:text-primary" title={service.title} />
                  </div>
                );
              })}
            </AccordionItem>
          </Accordion>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <TransLink href="/blog" title="Blog" className=" w-full" />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Accordion className="!p-0 !m-0">
            <AccordionItem key="1" aria-label="Accordion 1" title="Portofolio" className="!p-0 !m-0" indicator={<FontAwesomeIcon icon={faChevronDown} className="w-4 h-4 mr-3" />}>
              {portfolioLink.map((portLink: any) => {
                const uid = uuidv4();
                return (
                  <div className="px-4 py-2" key={uid}>
                    <TransLink href={portLink.link} title={portLink.title} className="w-full mb-4 py-2 text-primary-dark dark:text-primary" />
                  </div>
                );
              })}
            </AccordionItem>
          </Accordion>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <TransLink href="/contact" title="Kontak" className=" w-full" />
        </NavbarMenuItem>
        <NavbarMenuItem className="py-10">
          <Button as={Link} endContent={<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-4 h-4" />} className={`bg-primary w-full text-white sm:text-md text-sm font-semibold`} href={buttonLink} variant="flat" radius="full">
            {buttonText}
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
