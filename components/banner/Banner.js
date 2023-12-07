import React from "react";
import Container from "../container/Container";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className=" relative pb-10">
      <Container>
        <div className="grid grid-cols-3">
          <div className="col-span-1  h-[535px] flex items-center">
            <div>
              <h1 className="text-7xl font-semibold primary-text-color mb-6">
                Best quality pillow
              </h1>
              <p className="mb-14 s_t_c text-xl ">
                Seamlessly empower fully researched growth strategies and
                interoperable internal
              </p>
              <Link
                href="/"
                className="px-[50px] py-[17px] text-white text-[15px] font-medium p_bg rounded-md"
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div className="col-span-2 absolute right-0">
            <div className="relative">
              <Image
                src="/images/banner.png.webp"
                width={742}
                height={500}
              ></Image>
              <Image
                src="/images/banner_pattern.png.webp"
                width={276}
                height={132}
                className="absolute bottom-0 -left-[100px]"
              ></Image>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
