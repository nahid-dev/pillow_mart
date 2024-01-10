import React from "react";
import Container from "../container/Container";

const AboutUs = () => {
  return (
    <div className="pt-[200px]">
      <Container>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-2"></div>
          <div className="col-span-8">
            <div>
              <p className="t_t_c text-xl">Our Mission</p>
              <h5 className="text-2xl text-[#4B3049] mt-5">
                Donec imperdiet congue orci consequat mattis. Donec rutrum
                porttitor sollicitudin. Pellentesque id dolor tempor sapien
                feugiat ultrices nec sed neque.
              </h5>
            </div>
            <div>
              <video src="/"></video>
              <iframe
                width="750"
                height="447.45"
                src="https://www.youtube.com/embed/DWHB6nTyKDI"
                title="5 Things To Know Before You Start Your Shopify Store | Ecommerce Tips 2021"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="col-span-2"></div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
