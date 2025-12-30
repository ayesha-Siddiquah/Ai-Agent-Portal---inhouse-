import logo from "../assets/inflecto-logo.svg";

export default function Logo() {
  return (
    <div
      className="w-[196px] h-[66px] flex items-center"
      aria-label="Inflecto Technologies"
    >
      <img
        src={logo}
        alt="Inflecto Technologies"
        className="w-full h-full object-contain"
      />
    </div>
  );
}
