import { BsImage, BsEmojiSmile } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import ProfilePicture from "../assets/profilePicture.jpg";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useState } from "react";

const Input = () => {
  const [text, setText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const handleEmojiSelect = (emoji) => {
    setText((prevText) => prevText + emoji.native);
  };

  return (
    <div className="md:px-3 lg:px-4 mt-1 sm:flex border-b border-gray-600 hidden pb-2">
      <div className="mt-2">
        <img
          src={ProfilePicture}
          alt=""
          width={"45px"}
          height={"45px"}
          className="rounded-full"
        />
      </div>
      <div className="w-full">
        <div>
          <textarea
            value={text}
            name=""
            id=""
            rows="2"
            className="bg-transparent focus:outline-none text-xl px-2 py-3 w-full min-h-[40px]"
            placeholder="What is happening"
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-between mt-4 px-2">
          <div className="flex space-x-4">
            <div>
              <label htmlFor="image" name="image">
                <BsImage className="fill-[#1D9BF0]" />
              </label>
              <input type="file" name="image" id="image" className="hidden" />
            </div>
            <div className=" absolute mt-5" id="picker">
              {showEmojiPicker && (
                <Picker onEmojiSelect={handleEmojiSelect} data={data} />
              )}
            </div>
            <div>
              <BsEmojiSmile
                className="fill-[#1D9BF0]"
                onClick={() => setShowEmojiPicker((prev) => !prev)}
              />
            </div>
            <div>
              <MdLocationOn className="fill-[#1D9BF0]" />
            </div>
          </div>
          <div>
            <button className="px-5 py-2 rounded-full font-bold bg-[#1D9BF0] hover:bg-[#146AFA]">
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
