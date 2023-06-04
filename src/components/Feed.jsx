import Input from "./Input";
import Post from "./Post";
import { BsTwitter } from "react-icons/bs";

const Feed = () => {
  return (
    <div className="text-white sm:border-x border-gray-600 lg:w-[600px] md:w-full w-full pt-2">
      <div className="border-b border-gray-600 pb-5">
        <h2 className="hidden sm:block text-xl font-semibold px-3">Home</h2>
        <div className="flex justify-center sm:hidden mt-1">
          <BsTwitter className="fill-[#1D9BF0] scale-150"/>
        </div>
        <div className="flex text-center mt-7">
          <div className="w-1/2">For You</div>
          <div className="w-1/2">Following</div>
        </div>
      </div>
      <Input />
      <Post />
    </div>
  );
};

export default Feed;
