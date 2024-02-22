import React from "react";
import DropPortfolioClient from "./DropPortfolioClient";
import DropPortfolioRender from "./DropPortfolioRender";

export default function DropPortfolio() {

  return (
    <DropPortfolioClient>
        <DropPortfolioRender/>
    </DropPortfolioClient>
  );
}
