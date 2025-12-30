import exploreIcon from "../assets/explore.svg"; // your exported icon

export default function ExploreAgentsButton() {
  return (
    <button
      className="
        flex items-center gap-[8px]
        h-[48px]
        px-[20px]
        bg-white
        rounded-[12px]
        outline outline-1 outline-dashed outline-black
      "
    >
      {/* Icon */}
      <img
        src={exploreIcon}
        alt="Explore"
        className="w-[20px] h-[20px]"
      />

      {/* Text */}
      <span
        className="
          font-manrope
          font-medium
          text-[16px]
          leading-[20px]
          text-[#333333]
        "
      >
        Explore Agents
      </span>
    </button>
  );
}
