import React from "react";

import { Skeleton } from "@nextui-org/react";

import styles from "@/app/ilitterless.module.css";

interface Props {
  size: string;
}

const Loading = ({ size }: Props) => {
  return <Skeleton className={`${size}`} />;
};

export default Loading;
