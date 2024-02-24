import React from 'react'

import { getPartnerTitle } from "@/sanity/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

type PartnerTitle = {
  title: string;
  secondaryTitle: string;
}

import ButtonUI from "../ui/ButtonUI";

const MitraTitleRender = async () => {
    const render: PartnerTitle = await getPartnerTitle()
  return (
    
          <div className="partner_brand__title sm:flex justify-between items-center w-full">
            <div>
              <div className="sm:text-5xl text-4xl font-extrabold text-start">
                {render.title}
              </div>
              <div className="text-default-500 sm:w-4/6 w-full">{render.secondaryTitle}</div>
            </div>
            <div className="action__button sm:mt-0 mt-5">
              <ButtonUI text="Selengkapnya" link="/partner" type="accent" endContent={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />} />
            </div>
          </div>
  )
}

export default MitraTitleRender