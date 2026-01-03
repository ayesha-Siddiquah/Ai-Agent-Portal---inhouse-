// import NoAgentIcon from "../assets/no-agent-icon.svg";

// export default function NoAgentPanel() {
//   return (
//     <div className="w-full flex justify-center pt-[118px]">
      
//       <div className="w-[1158px] h-[591px] bg-white flex flex-col items-center rounded-[12px]">
        
//         {/* Icon */}
//         <div className="pt-[48px]">
//           <img
//             src={NoAgentIcon}
//             alt="No agents"
//             className="w-[225px] h-[225px]"
//           />
//         </div>

//         {/* Text + Button */}
//         <div className="mt-[32px] w-[515px] flex flex-col items-center gap-[16px]">
          
//           <h2 className="font-nunito font-semibold text-[28px] text-[#202020] text-center">
//             You haven’t added any agents
//           </h2>

//           <p className="font-nunito text-[16px] text-[#626262] text-center">
//             Start by adding your first agent to manage and explore their capabilities
//           </p>

//           <button
//             className="
//               mt-[8px]
//               w-[320px]
//               h-[58px]
//               rounded-[12px]
//               bg-[#B978B2]
//               text-white
//               text-[16px]
//               font-nunito
//               font-semibold
//               hover:opacity-90
//               transition
//             "
//           >
//             Add Agent
//           </button>
//         </div>
//       </div>

//     </div>
//   );
// }




import NoAgentIcon from "../assets/no-agent-icon.svg";

export default function NoAgentPanel() {
  return (
    <div className="w-full flex justify-center pt-[118px]">
      <div className="w-[1158px] h-[591px] bg-white flex flex-col items-center">
        
        {/* Icon */}
        <div className="pt-[48px]">
          <img
            src={NoAgentIcon}
            alt="No agents"
            className="w-[225px] h-[225px]"
          />
        </div>

        {/* Text + Button */}
        <div className="mt-[32px] w-[515px] flex flex-col items-center gap-[16px]">
          
          {/* Title */}
          <h2 className="font-nunito font-semibold text-[28px] text-[#202020] text-center">
            You haven’t added any agents
          </h2>

          {/* Subtitle */}
          <p className="font-nunito text-[16px] text-[#626262] text-center">
            Start by adding your first agent to manage and explore their capabilities
          </p>

          {/* Add Agent Button — TEXT FORCED WHITE */}
          <button
            style={{ color: "#FFFFFF" }}   // 🔥 FORCE WHITE (cannot be overridden)
            className="
              mt-[8px]
              w-[320px]
              h-[58px]
              rounded-[12px]
              bg-[#B978B2]
              text-[16px]
              font-nunito
              font-semibold
              border-none
              outline-none
              focus:outline-none
              hover:opacity-90
              transition
            "
          >
            Add Agent
          </button>
        </div>
      </div>
    </div>
  );
}
