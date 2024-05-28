import Header from "../_components/Header";

import { Josefin_Sans } from "next/font/google";
import SideNavigation from "../_components/SideNavigation";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
