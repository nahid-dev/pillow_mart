import React from "react";
import Container from "../container/Container";
import Image from "next/image";

const Trendings = () => {
  return (
    <div className="bg-[#F4EDF2] py-[200px]">
      <Container>
        <div className="flex items-center justify-center mb-16">
          <h3 className="primary-text-color text-4xl font-bold">
            Trending Items
          </h3>
        </div>
        {/* Trending Card Items */}
        <div className="grid grid-cols-3 gap-10">
          <div className="">
            <div>
              <Image
                src="/images/tranding_item_1.png.webp"
                width={360}
                height={249}
                layout="responsive"
                className="w-full"
              ></Image>
              <h4 className="primary-text-color leading-normal text-2xl mt-6 mb-2">
                Cervical pillow for airplane car office nap pillow
              </h4>
              <p className="s_t_c text-xl">From $5</p>
            </div>
          </div>
          <div className="">
            <div>
              <Image
                src="/images/tranding_item_2.png.webp"
                width={360}
                height={249}
                layout="responsive"
                className="w-full"
              ></Image>
              <h4 className="primary-text-color leading-normal text-2xl mt-6 mb-2">
                Cervical pillow for airplane car office nap pillow
              </h4>
              <p className="s_t_c text-xl">From $5</p>
            </div>
          </div>
          <div className="">
            <div>
              <Image
                src="/images/tranding_item_3.png.webp"
                width={360}
                height={249}
                layout="responsive"
                className="w-full"
              ></Image>
              <h4 className="primary-text-color leading-normal text-2xl mt-6 mb-2">
                Cervical pillow for airplane car office nap pillow
              </h4>
              <p className="s_t_c text-xl">From $5</p>
            </div>
          </div>
          <div className="">
            <div>
              <Image
                src="/images/tranding_item_4.png.webp"
                width={360}
                height={249}
                layout="responsive"
                className="w-full"
              ></Image>
              <h4 className="primary-text-color leading-normal text-2xl mt-6 mb-2">
                Cervical pillow for airplane car office nap pillow
              </h4>
              <p className="s_t_c text-xl">From $5</p>
            </div>
          </div>
          <div className="">
            <div>
              <Image
                src="/images/tranding_item_5.png.webp"
                width={360}
                height={249}
                layout="responsive"
                className="w-full"
              ></Image>
              <h4 className="primary-text-color leading-normal text-2xl mt-6 mb-2">
                Cervical pillow for airplane car office nap pillow
              </h4>
              <p className="s_t_c text-xl">From $5</p>
            </div>
          </div>
          <div className="">
            <div>
              <Image
                src="/images/tranding_item_6.png.webp"
                width={360}
                height={249}
                layout="responsive"
                className="w-full"
              ></Image>
              <h4 className="primary-text-color leading-normal text-2xl mt-6 mb-2">
                Cervical pillow for airplane car office nap pillow
              </h4>
              <p className="s_t_c text-xl">From $5</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Trendings;
