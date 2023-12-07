import React from "react";
import Container from "../container/Container";
import Image from "next/image";
import Link from "next/link";

const Explore = ({ side_change, image, image_position, image_position_2 }) => {
  return (
    <div className="py-[100px]">
      <Container>
        <div className={`flex ${side_change} `}>
          <div className="w-1/2">
            <div className="relative ">
              <Image
                src={image}
                width={520}
                height={436}
                className={`z-20 absolute ${image_position_2}`}
              ></Image>
              <Image
                src="/images/product_overlay.png.webp"
                width={392}
                height={460}
                className={`absolute z-0 ${image_position}`}
              ></Image>
            </div>
          </div>
          <div className=" w-1/2 flex items-center ms-20">
            <div>
              <h5 className="t_t_c font-medium text-xl mb-10">
                Started from $10
              </h5>
              <h2 className="text-5xl font-bold primary-text-color mb-20 leading-normal">
                Printed memory foam brief modern throw pillow case
              </h2>
              <Link
                className="px-[36px] py-[18px] border border-[#B08EAD] rounded-md t_t_c hover:bg-[#B08EAD] hover:text-white transition-all duration-300 text-xl"
                href="/"
              >
                Explore Now
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Explore;
