import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Container from "../container/Container";
import { ImQuotesLeft } from "react-icons/im";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="py-[100px] px-10 p_bg">
      <Container>
        <Slider {...settings}>
          <div className={` flex justify-center text-center md:px-20`}>
            <div className=" inline-block relative mb-5">
              <Image
                src="/images/slides_img/client.png.webp"
                width={100}
                height={100}
              ></Image>
              <div className="p-3 -bottom-[10px] -right-[20px] bg-gray-400 text-white rounded-full absolute">
                <ImQuotesLeft size={22} />
              </div>
            </div>
            <div>
              <h5 className="text-xl font-medium text-white">
                "Working in conjunction with humanitarian aid agencies, we have
                supported programmes to help alleviate human suffering.
              </h5>
              <span className="text-xl text-white">-Micky Mouse</span>
            </div>
          </div>

          <div className=" flex justify-center text-center md:px-20">
            <div className=" inline-block relative mb-5">
              <Image
                src="/images/slides_img/client_1.png.webp"
                width={100}
                height={100}
              ></Image>
              <div className="p-3 -bottom-[10px] -right-[20px] bg-gray-400 text-white rounded-full absolute">
                <ImQuotesLeft size={22} />
              </div>
            </div>
            <div>
              <h5 className="text-xl font-medium text-white">
                "Working in conjunction with humanitarian aid agencies, we have
                supported programmes to help alleviate human suffering.
              </h5>
              <span className="text-xl text-white">-Micky Mouse</span>
            </div>
          </div>

          <div className=" flex justify-center text-center md:px-20">
            <div className=" inline-block relative mb-5">
              <Image
                src="/images/slides_img/client_2.png.webp"
                width={100}
                height={100}
              ></Image>
              <div className="p-3 -bottom-[10px] -right-[20px] bg-gray-400 text-white rounded-full absolute">
                <ImQuotesLeft size={22} />
              </div>
            </div>
            <div>
              <h5 className="text-xl font-medium text-white">
                "Working in conjunction with humanitarian aid agencies, we have
                supported programmes to help alleviate human suffering.
              </h5>
              <span className="text-xl text-white">-Micky Mouse</span>
            </div>
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default SimpleSlider;
