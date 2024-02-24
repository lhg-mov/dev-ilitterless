import React from "react";

const StatsTitleClient = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="ilitterless_stats__title flex justify-start col-span-1">
      {children}
    </div>
  );
};

export default StatsTitleClient;
