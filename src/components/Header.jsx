

import Logo from "./Logo";
import VisitOurWebsiteButton from "./VisitOurWebsiteButton";


export default function Header() {
  return (
    <header className="w-full">
      <div className="max-w-[1240px] mx-auto h-[80px] flex items-center justify-between px-6">
        
        {/* Logo */}
      
       <Logo />


        {/* Visit our Site */}
         <VisitOurWebsiteButton />
        
 
      </div>
    </header>
  );
}
