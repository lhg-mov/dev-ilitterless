import React from "react";

import style from "@/app/ilitterless.module.css";

import Link from "next/link";
import Version from "../Version";

import { Image } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="border-t-[1px] border-default-500">
      <div className={style.footer}>
        <div className="sm:flex sm:flex-wrap grid grid-cols-1 items-center gap-16 pt-8 mb-16">
          <div className="footer__title basis-4/12">
            <Image src="/ilitterless_black.png" alt="iLitterless Logo" width={150} height={60} className="dark:hidden pointer-events-none block" draggable="false" />
            <Image src="/ilitterless_white.PNG" alt="iLitterless Logo" width={150} height={60} className="dark:block hidden dark:w-[150px] dark:h-[60px] w-0 h-0 object-contain pointer-events-none" draggable="false" />
            <div className="text-2xl font-extrabold mt-5">iLitterless Indonesia</div>
            <div className="text-default-500 mt-3">Jl. Pulau Sayang No. 9, Jawa Timur, Malang, Indonesia, 65117</div>
            <div className="social__media flex gap-4 mt-7">
              <Link href="https://instagram.com/@ilitterless.indonesia">
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              </Link>
              <Link href="https://www.linkedin.com/company/ilitterless/">
                <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
              </Link>
              <Link href="mailto:ilitterless@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
              </Link>
              <Link href="https://wa.me/6281369517434">
                <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
              </Link>
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
                <Link href={`/waiting`}>Daftar i-Cos</Link>
              </li>
              <li>
                <Link href={`/waiting`}>Daftar MOBI-RS</Link>
              </li>
              <li>
                <Link href={`/waiting`}>Daftar PML</Link>
              </li>
              <li>
                <Link href={`/waiting`}>Daftar Goes to School</Link>
              </li>
              <li>
                <Link href={`/waiting`}>Menjadi Mitra Kami</Link>
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
            <div className="developer sm:mt-0 mt-3">
              <Version />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
