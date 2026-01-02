import { NavLink } from "react-router-dom";

import InflectoLogo from "../assets/inflecto-logo.svg";
import DashboardIcon from "../assets/dashboard-sidebar-icon.svg";
import AgentsIcon from "../assets/Robo-agents-sidebar-icon.svg";
import NotificationIcon from "../assets/notification-sidebar-icon.svg";
import SettingsIcon from "../assets/settings-sidebar-icon.svg";

export default function Sidebar() {
  return (
    <aside className="w-[218px] h-screen bg-white flex flex-col justify-between">
      
      {/* TOP SECTION */}
      <div>
        {/* Logo (Figma exact placement) */}
        <div className="pt-[28px] pl-[28px]">
          <img
            src={InflectoLogo}
            alt="Inflecto Technologies"
            className="w-[146px] h-[49px]"
          />
        </div>

        {/* Navigation */}
        <nav className="mt-[32px] flex flex-col gap-[16px] pl-[28px]">
          <SidebarItem
            to="/dashboard"
            label="Dashboard"
            icon={DashboardIcon}
          />

          <SidebarItem
            to="/agents"
            label="Agents"
            icon={AgentsIcon}
          />

          <SidebarItem
            to="/notifications"
            label="Notifications"
            icon={NotificationIcon}
          />

          <SidebarItem
            to="/settings"
            label="Settings"
            icon={SettingsIcon}
          />
        </nav>
      </div>

      {/* BOTTOM USER */}
      <div className="pl-[28px] pb-[24px]">
        <div className="flex items-center gap-[12px]">
          <div className="w-[36px] h-[36px] rounded-full bg-[#EDEDED]" />
          <div>
            <p className="text-[14px] font-semibold text-[#202020]">
              Hemanth
            </p>
            <p className="text-[12px] text-[#8A8A8A]">
              Admin
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

/* ------------------------------------
   Sidebar Item (Figma exact)
------------------------------------ */
function SidebarItem({ to, label, icon }) {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <div
          className={`
            h-[40px]
            flex items-center
            px-[12px]
            rounded-[10px]
            transition
            ${isActive ? "bg-[#F6E9F3]" : ""}
          `}
        >
          <div className="flex items-center gap-[12px] h-[22px]">
            <img
              src={icon}
              alt={label}
              className="w-[18px] h-[18px]"
            />
            <span
              className={`
                text-[14px] font-medium
                ${isActive ? "text-[#B978B2]" : "text-[#8A8A8A]"}
              `}
            >
              {label}
            </span>
          </div>
        </div>
      )}
    </NavLink>
  );
}
