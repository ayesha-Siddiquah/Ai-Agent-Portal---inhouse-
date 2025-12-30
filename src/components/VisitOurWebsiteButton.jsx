import globeIcon from "../assets/globe.svg";

export default function VisitOurWebsiteButton() {
  return (
    <button
      className="
        h-[56px]
        flex items-center
        gap-[12px]
        px-[32px] py-[16px]
        rounded-[12px]
        bg-white
        font-['Outfit']
        font-medium
        text-[18px]
        leading-[23px]
        text-[#252525]
      "
      style={{
        border: "1px solid rgba(108, 191, 183, 0.24)",
      }}
    >
      {/* Text: EXACT 139 × 23 rendering */}
      <span className="block">
        Visit Our Website
      </span>

      {/* Globe icon */}
      <img
        src={globeIcon}
        alt="Globe"
        className="w-[18px] h-[18px]"
      />
    </button>
  );
}
