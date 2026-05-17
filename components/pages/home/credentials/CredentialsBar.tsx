import { credentialsData } from "@/constant";
import React from "react";

type CredentialItem = (typeof credentialsData)[number];

const CredentialValue = ({ item }: { item: CredentialItem }) => {
  if (Array.isArray(item.value)) {
    return (
      <div className="space-y-1">
        {item.value.map((line) => (
          <p
            key={line}
            className="text-base font-semibold leading-snug text-white sm:text-lg"
          >
            {line}
          </p>
        ))}
      </div>
    );
  }

  return (
    <p className="text-base font-semibold leading-snug text-white sm:text-lg">{item.value}</p>
  );
};

const CredentialsBar = () => {
  return (
    <section className="w-full border-y border-gray bg-primary-dark">
      <div className="grid w-full grid-cols-1 divide-y divide-gray sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
        {credentialsData.map((item) => (
          <div
            key={item.label}
            className="flex h-full min-h-[9rem] flex-col items-center justify-center gap-3 px-6 py-8 text-center sm:min-h-[10rem] lg:min-h-[11rem] lg:py-10"
          >
            <p className="text-[11px] font-medium uppercase leading-snug tracking-[0.2em] text-gray">
              {item.label}
            </p>
            <CredentialValue item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CredentialsBar;
