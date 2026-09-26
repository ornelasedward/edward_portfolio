import React from "react";

type Props = {
  id?: string;
  label: string;
  children: React.ReactNode;
};

// One resume row: section label on the left, content on the right, a black rule between rows.
const Row = ({ id, label, children }: Props) => {
  return (
    <section
      id={id}
      className="grid scroll-mt-4 grid-cols-1 border-t border-line md:grid-cols-[200px_1fr]"
    >
      <div className="border-line px-4 pb-2 pt-6 sm:px-6 md:border-r md:py-8">
        <h2 className="label">{label}</h2>
      </div>
      <div className="min-w-0 px-4 pb-8 pt-2 sm:px-6 md:py-8">{children}</div>
    </section>
  );
};

export default Row;
