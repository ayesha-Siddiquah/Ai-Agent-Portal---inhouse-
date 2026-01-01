
import { useEffect, useRef, useState } from "react";
import PrimaryActionButton from "./PrimaryActionButton";

export default function AgentCard({ agent, tagStyles }) {
  const [expanded, setExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);

  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    if (el.scrollHeight > el.clientHeight) {
      setShowToggle(true);
    }
  }, []);

  return (
    <div
      className="
        w-[352px]
        self-start
        rounded-[20px]
        border
        border-[#E0E0E0]
        bg-white
        flex
        flex-col
        pt-[10px]
        px-[24px]
        pb-[24px]
      "
    >
      <h3 className="font-manrope font-semibold text-[20px] text-[#252525] mb-[4px]">
        {agent.title}
      </h3>

      <div className="flex flex-wrap gap-[8px] mb-[12px]">
        {agent.tags.map((tag, i) => (
          <span
            key={i}
            className={`text-[12px] px-[10px] py-[4px] rounded-full ${tagStyles[tag]}`}
          >
            {tag}
          </span>
        ))}
      </div>

      <p
        ref={textRef}
        className={`font-outfit text-[16px] leading-[155%] text-[#565656] ${
          !expanded ? "line-clamp-3" : ""
        }`}
      >
        {agent.description}
      </p>

      {showToggle && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-[6px] text-[14px] underline text-[#6B6B6B] hover:text-[#4B371C] self-start"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}

      <div className="mt-auto pt-[16px]">
        <PrimaryActionButton
          text={agent.button}
          disabled={agent.button === "Coming Soon"}
        />
      </div>
    </div>
  );
}
