import React from "react";

import style from "@/app/ilitterless.module.css";

import Link from "next/link";
import Version from "../Version";

import { Image } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { ThemeSwitcher } from "../Navigation/ThemeSwitcher";

import {getContact} from "@/sanity/actions";

type Contact = {
  _id: string;
  title: string;
  description: string;
  address: string;
  instagram: string;
  linkedin: string;
  facebook: string;
  whatsapp: string;
  email: string;
}

const Footer = async () => {
  const render: Contact = await getContact();
  return (
    <div className="border-t-[1px] border-default-500">
      <div className={style.footer}>
        <div className="sm:flex sm:flex-wrap grid grid-cols-1 items-top gap-16 pt-8 mb-16">
          <div className="footer__title basis-4/12">
            <Image src="/ilitterless_black.png" alt="iLitterless Logo" width={150} height={60} className="dark:hidden pointer-events-none block" draggable="false" />
            <Image src="/ilitterless_white.PNG" alt="iLitterless Logo" width={150} height={60} className="dark:block hidden dark:w-[150px] dark:h-[60px] w-0 h-0 object-contain pointer-events-none" draggable="false" />
            <div className="text-2xl font-extrabold mt-5">iLitterless Indonesia</div>
            <div className="text-default-500 mt-3">{render.address}</div>
            <div className="social__media flex gap-4 mt-4">
            <Link href={render.instagram} target="_black">
                  <div className="social__media__item items-center">
                    <FontAwesomeIcon icon={faInstagram} className="text-primary" />
                  </div>
                </Link>
                <Link href={render.linkedin} target="_black">
                  <div className="social__media__item items-center">
                    <FontAwesomeIcon icon={faLinkedin} className="text-primary" />
                  </div>
                </Link>
                <Link href={render.facebook} target="_black">
                  <div className="social__media__item items-center">
                    <FontAwesomeIcon icon={faFacebook} className="text-primary" />
                  </div>
                </Link>
                <Link href={`https://wa.me/${render.whatsapp}`} target="_black">
                  <div className="social__media__item items-center">
                    <FontAwesomeIcon icon={faWhatsapp} className="text-primary" />
                  </div>
                </Link>
                <Link href={render.email} target="_black">
                  <div className="social__media__item items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
                  </div>
                </Link>
            </div>
            <div className="version_id mt-5">
            <Version />
            </div>
          </div>
          <div className="footer__link sm:grow">
            <div className="footer__link_header font-semibold">Pages</div>
            <ul className="space-y-2 text-default-500 mt-4">
              <li>
                <Link href={`/about`}>Tentang Kami</Link>
              </li>
              <li>
                <Link href={`/product`}>Produk & Layanan</Link>
              </li>
              <li>
                <Link href={`/blog`}>Blog</Link>
              </li>
              <li>
                <Link href={`/portofolio`}>Portofolio</Link>
              </li>
              <li>
                <Link href={`/contact`}>Kontak</Link>
              </li>
              <li>
                <Link href={`/waiting`}>Karir</Link>
              </li>
            </ul>
          </div>
          <div className="footer__link sm:grow">
            <div className="footer__link_header font-semibold">Registrasi</div>
            <ul className="space-y-2 text-default-500 mt-4">
              <li>
                <Link href={`/sign-up/i-cos`}>i-Cos</Link>
              </li>
              <li>
                <Link href={`/sign-up/pml`}>PML</Link>
              </li>
              <li>
                <Link href={`/sign-up/goes-to-school`}>Goes to School</Link>
              </li>
              <li>
                <Link href={`/sign-up/collaboration`}>Kolaborasi</Link>
              </li>
            </ul>
          </div>
          <div className="footer__link sm:grow">
            <div className="footer__link_header font-semibold">Website</div>
            <ul className="space-y-2 text-default-500 mt-4">
              <li>
                <Link href={`/waiting`}>Kebijakan Privasi</Link>
              </li>
              <li>
                <Link href={`/waiting`}>Syarat & Ketentuan</Link>
              </li>
              <li>
                <Link href={`/waiting`}>Disclaimer</Link>
              </li>
              <li>
                <Link href={`https://status.ilitterlessindonesia.org`}>Status</Link>
              </li>
              <li>
                <Link href={`/help`}>Bantuan</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom border-t-[1px] border-default-300 pt-10">
          <div className="sm:flex sm:justify-between items-center">
            <div className="text-default-500">© 2024 iLitterless Indonesia, All Rights Reserved.</div>
            <div className="flex gap-2 sm:mt-0 mt-3">
              <div className="text-default-500 text-sm">Theme</div>
              <ThemeSwitcher/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
