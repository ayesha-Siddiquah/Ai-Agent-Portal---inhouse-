

import NoAgentPanel from "./NoAgentPanel";

export default function Agents() {
  return (
    <div className="h-full flex flex-col">
      
      {/* Page Title */}
      <div className="px-[32px] pt-[32px]">
        <h1 className="font-nunito font-bold text-[24px] text-[#202020]">
          Agents
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center">
        <NoAgentPanel />
      </div>

    </div>
  );
}






















// import NoAgentPanel from "./NoAgentPanel";

// export default function Agents() {
//   return (
    
//     <div className="w-full">

//       {/* PAGE TITLE */}
//       <div className="pt-[40px] pl-[250px]">
//         <h1 className="font-nunito font-bold text-[24px] text-[#202020]">
//           Agents
//         </h1>
//       </div>

//       <NoAgentPanel />
//     </div>
//   );
// }
