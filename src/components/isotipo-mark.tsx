import type { SVGProps } from "react";

/** El isotipo oficial: la "A" de Sandra + Rangel en un solo trazo continuo. */
export function IsotipoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="-14 -14 140 140" {...props}>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth={17}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M55 37 L48 24 L14 88 A18 18 0 0 0 45.8 104.9 L83.3 34.3" />
        <path d="M67 65 L99 110" />
      </g>
    </svg>
  );
}
