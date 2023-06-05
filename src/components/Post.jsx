import ProfilePicture from "../assets/profilePicture.jpg";
import { LuMoreHorizontal } from "react-icons/lu";
import { BsChat } from "react-icons/bs";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { LuShare } from "react-icons/lu";
import { BiBarChart } from "react-icons/bi";
const Post = () => {
  return (
    <div className="px-2 md:px-3 lg:px-4  mt-3 border-b pb-2 border-gray-600">
      <div className="flex space-x-2">
        <div className="w-[50px]">
          <img src={ProfilePicture} alt="" className="rounded-full" />
        </div>
        <div>
          <div className="flex justify-between w-full">
            <h3 className="space-x-1">
              <span className="font-bold">Hitam Putih</span>
              <span className="opacity-25 text-sm">@hitamputih • 11h</span>
            </h3>
            <div>
              <div className="rounded-full hover:bg-[#133045] w-8 h-8 flex justify-center items-center hover:group-[0>text-[#1D9BF0]]">
                <LuMoreHorizontal className="scale-125 " />
              </div>
            </div>
          </div>
          <div>
            LinkedIn is an amazing platform to connect with people, land jobs
            and get new opportunities.
          </div>
          <div className="lg:mt-4 md:mt-3 mt-2">
            <div className="flex justify-between md:pr-20 pr-12">
              <div className="flex space-x-1 opacity-50 font-thin">
                <BsChat className="scale-95" />
                <p className="-mt-1">123</p>
              </div>
              <div className="flex space-x-1 opacity-50 font-thin">
                <FaRetweet className="scale-110" />
                <p className="-mt-1">23</p>
              </div>
              <div className="flex space-x-1 opacity-50 font-thin">
                <AiOutlineHeart className="scale-110" />
                <p className="-mt-1">113</p>
              </div>
              <div className="flex space-x-1 opacity-50 font-thin">
                <BiBarChart className="scale-110" />
                <p className="-mt-1">123</p>
              </div>
              <div className="flex space-x-1 opacity-50 font-thin">
                <LuShare className="scale-110" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
