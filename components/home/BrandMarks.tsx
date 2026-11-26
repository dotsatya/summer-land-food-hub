import React from "react";

export function FoodHubLogoMark({
  className = "w-10 h-10",
  variant = "color",
}: {
  className?: string;
  variant?: "color" | "light";
}) {
  const outerLeaf = variant === "light" ? "#8EC07C" : "#5A8E50";
  const innerLeaf = variant === "light" ? "#FFFFFF" : "#193827";
  const ringStroke = variant === "light" ? "rgba(255,255,255,0.28)" : "#75A761";

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="24"
        cy="24"
        r="20"
        stroke={ringStroke}
        strokeWidth="1.6"
        opacity="0.7"
      />
      {/* Left leaf */}
      <path
        d="M24 34C17 34 12 28.5 12 21.5C12 18.5 13 15.8 14.8 14C19.8 14.8 24 19.6 24 26.5V34Z"
        fill={outerLeaf}
        opacity="0.92"
      />
      {/* Right leaf */}
      <path
        d="M24 34C31 34 36 28.5 36 21.5C36 18.5 35 15.8 33.2 14C28.2 14.8 24 19.6 24 26.5V34Z"
        fill={outerLeaf}
        opacity="0.78"
      />
      {/* Center sprout & stem */}
      <path
        d="M24 11C26.8 14.6 27.6 19.2 24 24.5C20.4 19.2 21.2 14.6 24 11Z"
        fill={innerLeaf}
      />
      <path
        d="M24 23V37"
        stroke={innerLeaf}
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <path
        d="M24 29L18.5 24.5M24 29L29.5 24.5"
        stroke={innerLeaf}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FarmCraftEmblem({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 38V21"
        stroke="#2E5939"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M24 27C16.5 27 11.5 21.5 11.5 14C17.5 14 23.5 18.5 24 27Z"
        fill="#6BA05B"
      />
      <path
        d="M24 25C31.5 25 36.5 19.5 36.5 12C30.5 12 24.5 16.5 24 25Z"
        fill="#4A7C44"
      />
      <path
        d="M15 17C18.5 19.2 21.2 22 23 25"
        stroke="#E9EFE1"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M33 15C29.5 17.5 26.8 20.5 25 23.5"
        stroke="#E9EFE1"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LocalMotiveEmblem({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Radiating harvest burst */}
      <path
        d="M24 8V22M17 10L22 22M31 10L26 22M11 16L20 24M37 16L28 24"
        stroke="#5A8E50"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M10 27H38"
        stroke="#193827"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M14 32.5C17.5 30.2 20.5 30.2 24 32.5C27.5 34.8 30.5 34.8 34 32.5"
        stroke="#2E5939"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M17 37.5C19.5 36 22 36 24 37.5C26 39 28.5 39 31 37.5"
        stroke="#6BA05B"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function OkanaganCentreEmblem({
  className = "w-11 h-11",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="24"
        cy="24"
        r="17"
        stroke="#193827"
        strokeWidth="2"
      />
      {/* Mountain peaks */}
      <path
        d="M10.5 27L19 17.5L25.5 24.5L30.5 19.5L37.5 27"
        stroke="#193827"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Sun */}
      <circle cx="24" cy="14" r="2.6" fill="#6BA05B" />
      {/* Lake waves */}
      <path
        d="M12.5 31.5C16.5 29.8 20.2 29.8 24 31.5C27.8 33.2 31.5 33.2 35.5 31.5"
        stroke="#5A8E50"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M15.5 35.5C18.5 34.3 21.5 34.3 24 35.5C26.5 36.7 29.5 36.7 32.5 35.5"
        stroke="#193827"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BotanicalLeafWatermark({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 180 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M25 240C45 170 72 110 135 45"
        stroke="#75A761"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path
        d="M72 145C28 135 12 95 25 55C65 65 88 102 72 145Z"
        fill="#8FC07B"
        opacity="0.22"
      />
      <path
        d="M95 102C138 98 162 68 158 28C118 32 92 64 95 102Z"
        fill="#6BA05B"
        opacity="0.25"
      />
      <path
        d="M52 195C98 192 128 164 128 122C84 125 54 156 52 195Z"
        fill="#8FC07B"
        opacity="0.2"
      />
    </svg>
  );
}
