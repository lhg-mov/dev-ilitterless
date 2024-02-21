import React from "react";
import { v4 as uuidv4 } from "uuid";

const Version = () => {
  const uid = uuidv4();
  return (
    <div className="text-default-500 sm:text-end text-start">
      <div>Staging - 0.1.3</div>
      <div className="text-tiny text-default-400">UID - {uid}</div>
    </div>
  );
};

export default Version;
