import React from "react";

import style from "@/app/ilitterless.module.css";
import Navigation from "@/components/Navigation/Navigation";
import CallToAction from "@/components/CallToAction/CallToAction";
import Footer from "@/components/Footer/Footer";

import { Input, Textarea, Button, Link } from "@nextui-org/react";
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactPage = () => {
  return (
    <>
      <Navigation />
      <div className={style.contactpage}>
        <div className="contact__content py-20">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center">
            <div className="contact__title">
              <div className="text-xl font-extrabold text-default-700 relative w-36 flex items-center gap-2">
                <div className="border-t-2 border-default-700 flex-grow"></div>
                <div className="flex-shrink">Contact</div>
              </div>
              <div className="mt-3">
                <div className="text-4xl font-semibold">Beritahu Kami Jika Kamu Membutuhkan Sesuatu</div>
                <div className="description text-default-500 mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, laudantium consequuntur debitis cumque amet eveniet.</div>
              </div>
              <div className="social__media flex flex-wrap items-center sm:gap-10 gap-5 mt-10">
                <Link href="/instagram" target="_black">
                  <div className="social__media__item flex gap-3 items-center">
                    <FontAwesomeIcon icon={faInstagram} className="text-primary" />
                    <div className="social__media_title font-semibold text-default-700">Instagram</div>
                  </div>
                </Link>
                <Link href="/linkedin" target="_black">
                  <div className="social__media__item flex gap-3 items-center">
                    <FontAwesomeIcon icon={faLinkedin} className="text-primary" />
                    <div className="social__media_title font-semibold text-default-700">LinkedIn</div>
                  </div>
                </Link>
                <Link href="/linkedin" target="_black">
                  <div className="social__media__item flex gap-3 items-center">
                    <FontAwesomeIcon icon={faFacebook} className="text-primary" />
                    <div className="social__media_title font-semibold text-default-700">Facebook</div>
                  </div>
                </Link>
                <Link href="/linkedin" target="_black">
                  <div className="social__media__item flex gap-3 items-center">
                    <FontAwesomeIcon icon={faWhatsapp} className="text-primary" />
                    <div className="social__media_title font-semibold text-default-700">WhatsApp</div>
                  </div>
                </Link>
              </div>
            </div>
            <form className="form sm:mt-0 mt-8">
              <Input size="lg" type="email" label="Email" name="Email" variant="underlined" isRequired />
              <Input size="lg" type="tel" label="Phone Number" name="Phone Number" variant="underlined" isRequired />
              <Input size="lg" type="text" label="Subject" name="Subject" variant="underlined" isRequired />
              <Textarea variant="underlined" label="Message" name="Message" className="w-full mt-5 text-xl" isRequired />
              <Button
                endContent={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                }
                className={`bg-primary text-white sm:text-md text-sm font-semibold mt-8`}
                variant="flat"
                radius="full"
                type="submit"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </>
  );
};

export default ContactPage;
