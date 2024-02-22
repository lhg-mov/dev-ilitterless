import React from "react";
import AccordionServiceClient from "./AccordionServiceClient";
import AccordionServiceRender from "./AccordionServiceRender";

export default function AccordionService() {

  return (
    <AccordionServiceClient>
        <AccordionServiceRender/>
    </AccordionServiceClient>
  );
}
