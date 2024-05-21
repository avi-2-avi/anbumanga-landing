import React, { useState } from "react";

interface FoldableElementProps {
  title: string;
  content: string;
}

const FoldableElement: React.FC<FoldableElementProps> = ({
  title,
  content,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div>
      <button
        onClick={toggleOpen}
        className="bg-am-red text-white px-6 py-4 rounded-xl hover:bg-am-red/85 transition-colors"
      >
        {isOpen ? (
          <div className="flex flex-row">
            <p className="pr-2 text-xl">Cerrar</p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.75 15.375L12 8.625L5.25 15.375"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ) : (
          <div className="flex flex-row items-center">
            <p className="pr-2 w-40 text-xl">{title}</p>
            <svg
              width="16"
              height="9"
              viewBox="0 0 16 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7.75 7.75L14.5 1"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </button>
      {isOpen && (
        <div className="p-4 mt-2 border rounded shadow-sm w-48">{content}</div>
      )}
    </div>
  );
};

export default FoldableElement;
