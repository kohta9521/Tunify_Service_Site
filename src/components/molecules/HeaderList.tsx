import React from "react";

// components

// type
export type HeaderListProps = {
  children: React.ReactNode;
};

const HeaderList = ({ children }: HeaderListProps) => {
  return (
    <div className="mx-md flex justify-between items-center">{children}</div>
  );
};

export default HeaderList;
