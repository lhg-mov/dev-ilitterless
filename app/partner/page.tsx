import CallToAction from "@/components/CallToAction/CallToAction";
import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";
import { getPartnerBrand, getPartnerCafe } from "@/sanity/actions";
import React from "react";

import style from "@/app/ilitterless.module.css";
import MitraBrandRender from "@/components/Mitra/MitraBrandRender";
import MitraCafeRender from "@/components/Mitra/MitraCafeRender";
import ButtonUI from "@/components/ui/ButtonUI";

import { Link, Image } from "@nextui-org/react";
import { v4 as uuidv4 } from "uuid";

const PartnerPage = async () => {
  const renderBrand = await getPartnerBrand();
  const renderCafe = await getPartnerCafe();
  return (
    <>
      <Navigation />
      <div className={style.partnerpage}>
        <div className="partner_brand__content logos flex gap-10 sm:before:left-0 sm:before:bg-gradient-to-r sm:before:from-white sm:after:right-0 sm:after:bg-gradient-to-l sm:after:from-white sm:dark:before:left-0 sm:dark:before:bg-gradient-to-r sm:dark:before:from-neutral-950 sm:dark:after:right-0 sm:dark:after:bg-gradient-to-l sm:dark:after:from-neutral-950">
          <MitraBrandRender />
        </div>

        <div className="partner_page__title">
          <div className="relative flex gap-2 items-center w-40 mb-7">
            <div className="border-t-2 border-primary flex-grow"></div>
            <div className="text-xl text-primary font-extrabold flex-shrink">Our Partner</div>
          </div>
          <div className="sm:text-5xl text-4xl font-extrabold sm:w-3/5 w-full">Kami telah Menjalin Kerja Sama dengan Berbagai Pihak.</div>
          <div className="action__button mt-8">
            <ButtonUI text="Ayo Bergabung!" link="/partner/sign-up" type={"accent"} />
          </div>
        </div>

        <div className="partner_cafe__content logos flex gap-10 sm:before:left-0 sm:before:bg-gradient-to-r sm:before:from-white sm:after:right-0 sm:after:bg-gradient-to-l sm:after:from-white sm:dark:before:left-0 sm:dark:before:bg-gradient-to-r sm:dark:before:from-neutral-950 sm:dark:after:right-0 sm:dark:after:bg-gradient-to-l sm:dark:after:from-neutral-950">
          <MitraCafeRender />
        </div>

        <div className="partner__all__content">
          <div className="brand">
            <div className="relative flex justify-center items-center gap-5">
              <div className="border-t-2 border-primary flex-grow"></div>
              <div className="text-4xl font-extrabold py-16 flex-shrink">Mitra Brand</div>
              <div className="border-t-2 border-primary flex-grow"></div>
            </div>

            <div className="partner_brand grid xl:grid-cols-9 md:grid-cols-5 grid-cols-3 gap-10 items-center">
              {renderBrand.map((data: any) => {
                const uid = uuidv4();
                return (
                  <Link href={data.link} key={uid}>
                    <Image src={data.logoImage.asset.url} alt={data.title} width={200} height={200} style={{ objectFit: "contain", objectPosition: "center" }} className="" radius="none" />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="cafe">
            <div className="relative flex justify-center items-center gap-5">
              <div className="border-t-2 border-secondary flex-grow"></div>
              <div className="text-4xl font-extrabold py-16 flex-shrink">Mitra Cafe</div>
              <div className="border-t-2 border-secondary flex-grow"></div>
            </div>
            <div className="partner_brand grid xl:grid-cols-9 md:grid-cols-5 grid-cols-3 gap-10 items-center">
              {renderCafe.map((data: any) => {
                const uid = uuidv4();
                return (
                  <Link href={data.link} key={uid}>
                    <Image src={data.logoImage.asset.url} alt={data.title} width={200} height={200} style={{ objectFit: "contain", objectPosition: "center" }} className="" radius="none" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </>
  );
};

export default PartnerPage;
