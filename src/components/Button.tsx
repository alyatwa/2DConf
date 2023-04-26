import React from "react";

interface Props {
  text: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ 
    text,
    onClick
  }) => { 
  return (
    <button className="text-white bg-blue-600 rounded-md font-medium focus:outline-none hover:bg-blue-700 focus-visible:ring-offset-2 border border-transparent focus:ring-blue-300 text-sm px-4 py-2 text-center shadow-sm" type="button"
      onClick={onClick}
    >
    <span className="flex h-full items-center whitespace-nowrap">{text}</span>
    </button>
  );
}

export default Button;