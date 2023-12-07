import React from "react";
import Container from "../container/Container";
import { CiCreditCard1 } from "react-icons/ci";
import { TfiGift } from "react-icons/tfi";
import { PiMonitorPlayLight } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";

const FeaturePart = () => {
  return (
    <div className="py-[200px]">
      <Container>
        <div className="grid grid-cols-2 gap-20">
          <div>
            <h3 className="text-[40px] font-medium primary-text-color leading-normal">
              Credibly innovate granular internal or organic sources whereas
              standards.
            </h3>
          </div>
          <div>
            <p className="leading-loose text-[#707070] text-[15px] mt-5">
              Seamlessly empower fully researched growth strategies and
              interoperable internal or “organic” sources. Credibly innovate
              granular internal or “organic” sources whereas high standards in
              web-readiness.
            </p>
          </div>
        </div>
        <div className="py-[50px] grid grid-cols-4 gap-16">
          <div>
            <div className="border border-[#B08EAD] text-center flex items-center p-6 py-10 flex-col ">
              <CiCreditCard1 size={40} />
              <h4 className="primary-text-color font-medium leading-normal mt-6 text-xl">
                Credit Card Support
              </h4>
            </div>
          </div>

          <div>
            <div className="border border-[#B08EAD] text-center flex items-center p-6 py-10 flex-col ">
              <PiMonitorPlayLight size={40} />
              <h4 className="primary-text-color font-medium leading-normal mt-6 text-xl">
                Online Order
              </h4>
            </div>
          </div>

          <div>
            <div className="border border-[#B08EAD] text-center flex items-center p-6 py-10 flex-col ">
              <CiDeliveryTruck size={40} />
              <h4 className="primary-text-color font-medium leading-normal mt-6 text-xl">
                Free Delivery
              </h4>
            </div>
          </div>

          <div>
            <div className="border border-[#B08EAD] text-center flex items-center p-6 py-10 flex-col ">
              <TfiGift size={40} />
              <h4 className="primary-text-color font-medium leading-normal mt-6 text-xl">
                Product with Gift
              </h4>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FeaturePart;
