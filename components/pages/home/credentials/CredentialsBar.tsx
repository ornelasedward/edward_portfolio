import { credentialsData } from "@/constant";
import React from "react";

const CredentialsBar = () => {
  return (
    <section className="w-full border-y border-gray bg-primary-dark">
      <div className="grid w-full grid-cols-1 divide-y divide-gray sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
        {credentialsData.map((item) => (
          <div
            key={item.label}
            className="flex min-w-0 flex-col items-center overflow-hidden px-6 py-9 text-center sm:px-5 lg:px-6 lg:py-10 xl:px-8"
          >
            <p className="mb-5 shrink-0 text-[11px] font-medium uppercase leading-none tracking-[0.2em] text-gray">
              {item.label}
            </p>
            <p className="w-full text-sm font-semibold leading-snug text-white sm:text-[15px] lg:text-sm xl:text-[15px]">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CredentialsBar;
