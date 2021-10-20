import React from "react";

interface SvgMenuProps {
  currentColor: string;
}

function SvgMenu({ currentColor }: SvgMenuProps) {
  return (
    <svg
      stroke={currentColor}
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="Open menu"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Open menu</title>
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );
}

export default SvgMenu;
