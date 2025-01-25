import * as React from "react";
const RightArrowIcon = (props) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_8468_877)">
      <path
        d="M8.35664 13.7923L7.92145 13.3319C7.63133 13.025 7.63133 12.5427 7.92145 12.2358L12.408 7.48976L7.92145 2.75465C7.63133 2.44774 7.63133 1.96546 7.92145 1.65855L8.35664 1.1982C8.64677 0.891291 9.10268 0.891291 9.3928 1.1982L14.7705 6.88691C15.0917 7.2267 15.0917 7.77474 14.7705 8.10357L9.3928 13.7923C9.10268 14.0992 8.64677 14.0992 8.35664 13.7923Z"
        fill={props.color || "white"}
      />
      <path
        d="M12.6957 6.19556H1C0.447715 6.19556 0 6.64327 0 7.19556V7.80425C0 8.35654 0.447715 8.80425 1 8.80425H12.6957C13.2479 8.80425 13.6957 8.35654 13.6957 7.80425V7.19556C13.6957 6.64327 13.2479 6.19556 12.6957 6.19556Z"
        fill={props.color || "white"}
      />
    </g>
    <defs>
      <clipPath id="clip0_8468_877">
        <rect
          width={15}
          height={13.0435}
          fill="white"
          transform="translate(0 0.978271)"
        />
      </clipPath>
    </defs>
  </svg>
);
export default RightArrowIcon;
