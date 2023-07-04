import React from "react";

type Props = {
  onClick?: any;
  className?: string;
  children: React.ReactNode;
};

const HomeBtn: React.FC<Props> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} home-btn rounded-[5px] md:rounded-[10px] shadow py-[8px] md:py-[10px]`}
    >
      {children}
    </button>
  );
};

export default HomeBtn;
