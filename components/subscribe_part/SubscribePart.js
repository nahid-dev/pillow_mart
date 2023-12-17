import React from "react";
import Container from "../container/Container";

const SubscribePart = () => {
  return (
    <div className="subscribe_part_bg py-[200px]">
      <Container>
        <div className="flex justify-center ">
          <div className="text-center w-2/3 flex items-center justify-center flex-col">
            <h3 className="text-white leading-normal text-[40px] font-semibold mb-7">
              Get promotions & updates!
            </h3>
            <p className="leading-loose text-[15px] text-white ">
              Seamlessly empower fully researched growth strategies and
              interoperable internal or “organic” sources credibly innovate
              granular internal .
            </p>
            <div className=" w-2/3 relative mt-10">
              <input
                className="w-full bg-transparent rounded-full py-5 text-white px-7 border-2"
                type="email"
                placeholder="Enter your email"
              />
              <button
                className="absolute top-[3px] right-[3px] text-lg px-[30px] py-[15px] text-white bg-[#B08EAD] border-2 border-[#B08EAD] rounded-full"
                type="submit"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SubscribePart;
