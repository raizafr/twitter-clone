import Input from "./Input";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="text-white sm:border-x border-gray-600 lg:w-[600px] md:w-full w-full pt-2">
      <div className="border-b border-gray-600 pb-5">
        <h2 className="hidden sm:block text-xl font-semibold px-3">Home</h2>
        <div className="flex justify-center sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-twitter"
            viewBox="0 0 16 16"
          >
            <path
              fill="#00f"
              d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0016 3.542a6.658 6.658 0 01-1.889.518 3.301 3.301 0 001.447-1.817 6.533 6.533 0 01-2.087.793A3.286 3.286 0 007.875 6.03a9.325 9.325 0 01-6.767-3.429 3.289 3.289 0 001.018 4.382A3.323 3.323 0 01.64 6.575v.045a3.288 3.288 0 002.632 3.218 3.203 3.203 0 01-.865.115 3.23 3.23 0 01-.614-.057 3.283 3.283 0 003.067 2.277A6.588 6.588 0 01.78 13.58a6.32 6.32 0 01-.78-.045A9.344 9.344 0 005.026 15z"
            ></path>
          </svg>
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
