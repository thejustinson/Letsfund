import {
  RiAccountCircleFill,
  RiBarChartGroupedFill,
  RiMegaphoneFill,
  RiSettings3Fill,
  RiUser3Fill,
} from "@remixicon/react";
import { useRouter } from "next/router";
import Link from "next/link";

const SideBar = () => {
  const router = useRouter(); // Use Next.js useRouter hook

  // Function to check if the link is the active route
  const isActive = (path: string) => router.pathname === path;

  return (
    <nav className="bg-[#1E1F22] hidden md:flex w-[300px] h-screen py-5 px-2  flex-col">
      <div className="text-xl font-bold py-5 px-3 h-20 flex items-center">
        PledgePal
      </div>
      <div className="grow my-5 flex flex-col justify-between ">
        <div>
          <h3 className="text-neutral-500 mb-2 px-3">General</h3>

          <Link href="/profile" passHref>
            <div
              className={`flex gap-3 py-3 px-3 rounded items-center cursor-pointer duration-200 ${
                isActive("/profile") ? "bg-purple-600" : "hover:bg-[#35373C]"
              }`}
            >
              <RiUser3Fill className="w-5" />
              <span>Profile</span>
            </div>
          </Link>

          <Link href="/campaigns" passHref>
            <div
              className={`flex gap-3 py-3 px-3 rounded items-center cursor-pointer duration-200 ${
                isActive("/campaigns") ? "bg-purple-600" : "hover:bg-[#35373C]"
              }`}
            >
              <RiMegaphoneFill className="w-5" />
              <span>Campaigns</span>
            </div>
          </Link>
        </div>

        <div>
          <h3 className="text-neutral-500 mb-2 px-3">Settings and Account</h3>

          <Link href="/settings" passHref>
            <div
              className={`flex gap-3 py-3 px-3 rounded items-center cursor-pointer duration-200 ${
                isActive("/settings") ? "bg-purple-600" : "hover:bg-[#35373C]"
              }`}
            >
              <RiSettings3Fill className="w-5" />
              <span>Settings</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
