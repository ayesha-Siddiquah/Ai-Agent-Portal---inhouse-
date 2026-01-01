import Logo from "./Logo";
import VisitOurWebsiteButton from "./VisitOurWebsiteButton";

export default function Header() {
  return (
    <header className="w-full absolute top-0 left-0 z-20">
      <div
        className="
          max-w-[1240px]
          mx-auto
          h-[80px]
          px-[24px]
          mt-[16px]
          flex
          items-center
          justify-between
          rounded-[20px]
        "
        style={{
          /* Glass background (reduced whitishness) */
          background: `
            linear-gradient(
              180deg,
              rgba(255,255,255,0.40) 0%,
              rgba(255,255,255,0.70) 50%,
              rgba(255,255,255,0.85) 75%,
              rgba(255,255,255,1) 100%
            )
          `,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",

          /* Subtle elevation */
          boxShadow: "0px 6px 20px rgba(0,0,0,0.08)",
        }}
      >
        {/* Logo */}
        <Logo />

        {/* CTA */}
        <VisitOurWebsiteButton />
      </div>
    </header>
  );
}
