import GlobeIcon from "../assets/globe.svg";

export default function VisitOurWebsiteButton() {
  return (
    <button
      className="
        relative
        inline-flex
        items-center
        gap-[12px]

        h-[56px]
        px-[32px]

        rounded-[12px]

        font-outfit
        text-[14px]
        font-normal
        text-[#252525]

        shadow-none
        overflow-hidden
      "
    >
      {/* ANGULAR GRADIENT STROKE — MATCHES FIGMA */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-[12px] p-[1px] pointer-events-none"
        style={{
          background: `
            conic-gradient(
              from 180deg,
              #70CBCF 0%,
              #E36256 50%,
              #FFF7A0 75%,
              #B978B2 100%
            )
          `,
        }}
      >
        {/* Inner fill */}
        <span className="block w-full h-full bg-white rounded-[11px]" />
      </span>

      {/* CONTENT */}
      <img
        src={GlobeIcon}
        alt=""
        className="w-[16px] h-[16px] relative z-10"
        draggable="false"
      />
      <span className="relative z-10">Visit Our Website</span>
    </button>
  );
}
