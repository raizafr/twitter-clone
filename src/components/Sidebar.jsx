import SidebarLink from "./SidebarLink";
import ProfilePicture from "../assets/profile_default.png";

import { AiOutlineHome, AiFillTwitterSquare } from "react-icons/ai";
import { BiHash } from "react-icons/bi";
import { RiNotification2Line, RiFileListLine } from "react-icons/ri";
import { FiMail } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { HiOutlineUser } from "react-icons/hi";
import { BsTwitter } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { LuMoreHorizontal } from "react-icons/lu";

const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col px-4 md:px-5 lg:px-14 b-slate-400 max-h-screen sticky top-0">
      <div
        className="w-fit hover:bg-zinc-900 p-4 rounded-full
      "
      >
        <BsTwitter className="fill-white scale-[1.7]" />
      </div>
      <div className="space-y-0.5">
        <SidebarLink
          title="Home"
          icon={<AiOutlineHome className=" scale-125" />}
        />
        <SidebarLink title="Explore" icon={<BiHash className=" scale-125" />} />
        <SidebarLink
          title="Notification"
          icon={<RiNotification2Line className="scale-125" />}
        />
        <SidebarLink title="Massage" icon={<FiMail className="scale-125" />} />
        <SidebarLink
          title="Lists"
          icon={<RiFileListLine className="scale-125" />}
        />
        <SidebarLink
          title="Bookmarks"
          icon={<BsBookmark className="scale-125" />}
        />
        <SidebarLink
          title="Twitter Blue"
          icon={<AiFillTwitterSquare className="scale-125" />}
        />
        <SidebarLink
          title="Profile"
          icon={<HiOutlineUser className="scale-125" />}
        />
        <SidebarLink title="More" icon={<CgMoreO className="scale-125" />} />
      </div>
      <div className="lg:mt-2 md:mt-6">
        <a
          href=""
          className="text-xl bg-[#1D9BF0] text-white py-2.5 px-20 rounded-full hover:bg-[#146AFA] hidden lg:block w-fit"
        >
          Tweet
        </a>
        <a
          href=""
          className="text-xl bg-[#1D9BF0] text-white p-2 rounded-full hover:bg-[#146AFA] hidden md:block w-fit lg:hidden ml-1"
        >
          <TfiWrite />
        </a>
      </div>
      <div className="relative h-full text-white">
        <div className="absolute inset-x-0 bottom-4 flex justify-between hover:bg-zinc-900 px-2 rounded-full py-1">
          <div className="flex">
            <div
              className="w-fit hover:bg-zinc-900 lg:p-3 rounded-full md:p-1
      "
            >
              <img
                src={ProfilePicture}
                alt=""
                width={"29px"}
                height={"29px"}
                className=""
              />
            </div>
            <div className="hidden lg:block">
              <h3 className="font-semibold">user</h3>
              <p className="text-sm opacity-50">@user123</p>
            </div>
          </div>
          <div className="mt-4 hidden lg:block">
            <LuMoreHorizontal className="scale-125" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
