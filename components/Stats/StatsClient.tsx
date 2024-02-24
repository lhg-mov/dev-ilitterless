
import React from "react";

const StatsClient = ({children}:{children: React.ReactNode}) => {
  return (
    <div className="ilitterless_stats__content col-span-5">
      {children}
    </div>
  );
};

export default StatsClient;
