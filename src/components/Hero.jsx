import Logo from "./Logo";
import VisitOurWebsiteButton from "./VisitOurWebsiteButton";

export default function Hero() {
  return (
    <section className="relative w-full h-[688px] outline outline-1 outline-black">
      

      {/* Header row */}
      <div className="max-w-[1240px] mx-auto h-[80px] px-[24px] flex items-center justify-between outline outline-1 outline-black">
        <Logo />
        <VisitOurWebsiteButton />
      </div>

      {/* Content frame (outline only) */}
<div className=" w-[847px] min-h-[288px] mx-auto mt-[150px] flex flex-col items-center gap-[40px] outline outline-1 outline-black">

 {/*Manrope at large sizes benefits from tiny tracking. tracking - [-0.01em] is added, leading(line-height reduced from 78 to 72px)  */}
          <h1
    className="
      font-manrope
      font-bold
      text-[64px]
      leading-[72px] 
      tracking - [-0.01em] 
      text-center
      max-w-[847px]
    "
  >
    <span className="text-black">
      Your Gateway To{" "}
    </span>
    <span style={{ color: "#6BCFB7" }}>
  Agentic AI
</span>
  </h1>


      {/* The subtext...Access, explore  */}




 {/* 
          Hero Description
          NOTE:
          Figma gap (Title → Description) = 28px.
          Reduced to 10px here for optical alignment due to font
          bounding-box and line-height differences in browser.
        */}

      <div
  className="
    w-full
    h-[72px]
    outline
    mt-[10px]  
    outline-1
    outline-dashed
    flex
    items-center
    justify-center
    px-4
  "
>
  <p
    className="
      font-['Outfit']
      text-[28px]
      leading-[43px]
      text-center
      text-[#565656]
      max-w-[700px]
    "
  >
    Access, explore, and collaborate with powerful AI agents
    designed for different needs
  </p>
</div>


        {/* <div className="w-[520px] h-[48px] outline outline-1 outline-dashed" /> */}
        <div className="w-[180px] h-[48px] outline outline-1 outline-dashed rounded-[12px]" />
      </div>

    </section>
  );
}
