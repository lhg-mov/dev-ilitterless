import React from "react";
import DropServiceClient from "./DropServiceClient";
import DropServiceRender from "./DropServiceRender";

export default function DropService() {

  return (
    <DropServiceClient>
        <DropServiceRender/>
    </DropServiceClient>
  );
}
