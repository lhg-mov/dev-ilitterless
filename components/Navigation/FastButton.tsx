import React from "react";
import FastButtonClient from "./FastButtonClient";
import FastButtonRender from "./FastButtonRender";

export default function FastButton() {

  return (
    <FastButtonClient>
        <FastButtonRender/>
    </FastButtonClient>
  );
}
