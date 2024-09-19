import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";

const ButtonMenu = ({ options, item }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button className="p-2" onClick={toggleMenu}>
      <CiMenuKebab />
      </button>
      {isOpen && (
        <div className="absolute mt-2 right-0 bg-white shadow-md rounded-lg py-2 z-50">
          {options.map((option: { action: (arg0: any) => void; label: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }, index: React.Key | null | undefined) => (
            <button
              key={index}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              onClick={() => {
                option.action(item); 
                setIsOpen(false); 
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
export default ButtonMenu